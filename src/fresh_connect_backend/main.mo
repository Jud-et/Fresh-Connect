import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Nat32 "mo:base/Nat32";
import Option "mo:base/Option";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Iter "mo:base/Iter";
import Buffer "mo:base/Buffer";

actor FreshFarmConnect {

    // Types
    type UserId = Principal;
    type ProductId = Nat;
    type OrderId = Nat;

    type User = {
        username: Text;
        role: {#farmer; #consumer; #mamamboga};
        registrationDate: Time.Time;
    };

    type Product = {
        farmerId: UserId;
        name: Text;
        productType: Text;
        quantity: Nat;
        price: Nat;
        availability: Bool;
    };

    type Order = {
        buyerId: UserId;
        sellerId: UserId;
        productId: ProductId;
        quantity: Nat;
        totalPrice: Nat;
        status: {#pending; #confirmed; #shipped; #delivered; #cancelled};
        orderDate: Time.Time;
    };

    type Review = {
        reviewerId: UserId;
        productId: ProductId;
        rating: Nat;
        comment: Text;
        reviewDate: Time.Time;
    };

    // Custom hash function for Nat
    private func natHash(n : Nat) : Nat32 {
        Nat32.fromNat(n)
    };

    // State variables
    private stable var nextProductId : Nat = 0;
    private stable var nextOrderId : Nat = 0;

    private let users = HashMap.HashMap<UserId, User>(0, Principal.equal, Principal.hash);
    private let products = HashMap.HashMap<ProductId, Product>(0, Nat.equal, natHash);
    private let orders = HashMap.HashMap<OrderId, Order>(0, Nat.equal, natHash);
    private let reviews = HashMap.HashMap<ProductId, [Review]>(0, Nat.equal, natHash);

    // User Management
    public shared(msg) func registerUser(username: Text, role: {#farmer; #consumer; #mamamboga}) : async Bool {
        let userId = msg.caller;
        if (users.get(userId) != null) {
            return false; // User already exists
        };
        let newUser : User = {
            username = username;
            role = role;
            registrationDate = Time.now();
        };
        users.put(userId, newUser);
        true
    };

    public query func getUser(userId: UserId) : async ?User {
        users.get(userId)
    };

    // Product Management
    public shared(msg) func addProduct(name: Text, productType: Text, quantity: Nat, price: Nat) : async ProductId {
        let farmerId = msg.caller;
        let newProduct : Product = {
            farmerId = farmerId;
            name = name;
            productType = productType;
            quantity = quantity;
            price = price;
            availability = true;
        };
        let productId = nextProductId;
        products.put(productId, newProduct);
        nextProductId += 1;
        productId
    };

    public query func getProduct(productId: ProductId) : async ?Product {
        products.get(productId)
    };

    public query func searchProducts(productType: ?Text, maxPrice: ?Nat) : async [Product] {
        let allProducts = Iter.toArray(products.vals());
        Array.filter(allProducts, func (p: Product) : Bool {
            switch (productType, maxPrice) {
                case (?pType, ?price) { p.productType == pType and p.price <= price };
                case (?pType, null) { p.productType == pType };
                case (null, ?price) { p.price <= price };
                case (null, null) { true };
            }
        })
    };

    // Order Management
    public shared(msg) func placeOrder(productId: ProductId, quantity: Nat) : async ?OrderId {
        switch (products.get(productId)) {
            case (null) { null };
            case (?product) {
                if (product.quantity < quantity) { return null; };
                let buyerId = msg.caller;
                let newOrder : Order = {
                    buyerId = buyerId;
                    sellerId = product.farmerId;
                    productId = productId;
                    quantity = quantity;
                    totalPrice = product.price * quantity;
                    status = #pending;
                    orderDate = Time.now();
                };
                let orderId = nextOrderId;
                orders.put(orderId, newOrder);
                nextOrderId += 1;
                
                // Update product quantity
                let updatedProduct = {
                    product with quantity = product.quantity - quantity;
                };
                products.put(productId, updatedProduct);
                
                ?orderId
            };
        }
    };

    public query func getOrder(orderId: OrderId) : async ?Order {
        orders.get(orderId)
    };

    public shared(msg) func updateOrderStatus(orderId: OrderId, newStatus: {#pending; #confirmed; #shipped; #delivered; #cancelled}) : async Bool {
        switch (orders.get(orderId)) {
            case (null) { false };
            case (?order) {
                if (order.sellerId != msg.caller) { return false; };
                let updatedOrder = {
                    order with status = newStatus;
                };
                orders.put(orderId, updatedOrder);
                true
            };
        }
    };

    // Review System
    public shared(msg) func addReview(productId: ProductId, rating: Nat, comment: Text) : async Bool {
        let reviewerId = msg.caller;
        let newReview : Review = {
            reviewerId = reviewerId;
            productId = productId;
            rating = rating;
            comment = comment;
            reviewDate = Time.now();
        };
        switch (reviews.get(productId)) {
            case (null) {
                reviews.put(productId, [newReview]);
            };
            case (?existingReviews) {
                let updatedReviews = Buffer.fromArray<Review>(existingReviews);
                updatedReviews.add(newReview);
                reviews.put(productId, Buffer.toArray(updatedReviews));
            };
        };
        true
    };

    public query func getProductReviews(productId: ProductId) : async [Review] {
        Option.get(reviews.get(productId), [])
    };

    // Analytics
    public query func getUserAnalytics(userId: UserId) : async {totalOrders: Nat; totalSpent: Nat} {
        let userOrders = Array.filter(Iter.toArray(orders.vals()), func (o: Order) : Bool { o.buyerId == userId });
        let totalOrders = userOrders.size();
        let totalSpent = Array.foldLeft(userOrders, 0, func (acc: Nat, o: Order) : Nat { acc + o.totalPrice });
        {totalOrders; totalSpent}
    };

    public query func getFarmerAnalytics(farmerId: UserId) : async {totalSales: Nat; revenue: Nat} {
        let farmerOrders = Array.filter(Iter.toArray(orders.vals()), func (o: Order) : Bool { o.sellerId == farmerId });
        let totalSales = farmerOrders.size();
        let revenue = Array.foldLeft(farmerOrders, 0, func (acc: Nat, o: Order) : Nat { acc + o.totalPrice });
        {totalSales; revenue}
    };
}