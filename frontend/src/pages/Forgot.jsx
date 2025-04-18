import React from 'react';
import { Link } from 'react-router-dom';

export default function Forgot() {
  return (
    <section
      className="relative flex justify-center items-center flex-col text-center z-10 py-16 h-screen"
      style={{
        backgroundImage: "url('images/bg2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">Forgot Password</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // logic to handle password reset can be added here
            window.location.href = 'https://mail.google.com/';
          }}
        >
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Enter your registered email address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Request Password Reset
          </button>

          {/* Link to Login */}
          <div className="mt-4 text-center">
            <Link to="/login" className="text-blue-500 text-sm hover:underline">
              Remember your password? Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
