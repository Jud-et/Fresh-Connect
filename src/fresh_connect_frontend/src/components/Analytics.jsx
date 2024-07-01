import React, { useState, useEffect } from 'react';
import { fresh_connect_backend } from "../../../declarations/fresh_connect_backend";

function Analytics({ user }) {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    if (user) {
      fetchAnalytics();
    }
  }, [user]);

  const fetchAnalytics = async () => {
    try {
      let analyticsData;
      if (user.role === 'farmer') {
        analyticsData = await fresh_connect_backend.getFarmerAnalytics(user.principal);
      } else {
        analyticsData = await fresh_connect_backend.getUserAnalytics(user.principal);
      }
      setAnalytics(analyticsData);
    } catch (error) {
      console.error("Error fetching analytics:", error);
    }
  };

  if (!user) {
    return <p>Please log in to view analytics.</p>;
  }

  return (
    <div>
      <h2>Analytics</h2>
      {analytics ? (
        <div>
          <p>Total Orders: {analytics.totalOrders.toString()}</p>
          {user.role === 'farmer' ? (
            <p>Total Revenue: {analytics.revenue.toString()} tokens</p>
          ) : (
            <p>Total Spent: {analytics.totalSpent.toString()} tokens</p>
          )}
        </div>
      ) : (
        <p>Loading analytics...</p>
      )}
      <button onClick={fetchAnalytics}>Refresh Analytics</button>
    </div>
  );
}

export default Analytics;