import React from 'react';
import { Link } from 'react-router-dom';

export default function Forgot() {
  return (
    <div className="forgot-password-container" style={{ maxWidth: '400px', margin: '2rem auto', padding: '1rem' }}>
      <h2>Forgot Password</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        // logic to handle password reset can be added here
        window.location.href = 'https://mail.google.com/';
      }}>
        <div className="input-group" style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Enter your registered email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
        </div>
        <button type="submit" className="btn" style={{ padding: '0.5rem 1rem', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px' }}>
          Request Password Reset
        </button>
        <div className="extra-links" style={{ marginTop: '1rem' }}>
          <Link to="/login">Remember your password? Login</Link>
        </div>
      </form>
    </div>
  );
}
