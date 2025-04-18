import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login-container">
            <h2>Login to Your Account</h2>
            <form id="loginForm">
                <div className="input-group">
                    <label htmlFor="username">Username / Email:</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="extra-links">
                    <Link to="/forgot" className="forgot-password">Forgot Password?</Link><br/>
                    Don't have an account? <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    );
}
