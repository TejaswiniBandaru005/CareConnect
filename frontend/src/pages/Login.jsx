import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
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
                <h2 className="text-2xl font-semibold text-center mb-6">Login to Your Account</h2>
                <form id="loginForm">
                    {/* Username Input */}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username / Email:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            required
                            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>

                    {/* Extra Links */}
                    <div className="mt-4 text-center">
                        <Link to="/forgot" className="text-blue-500 text-sm hover:underline">Forgot Password?</Link><br />
                        <span className="text-sm text-gray-600">Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link></span>
                    </div>
                </form>
            </div>
        </section>
    );
}
