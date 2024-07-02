import React from 'react';

const ContactSection = () => {
  return (
    <div id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default ContactSection;
