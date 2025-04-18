import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">🏥Care Connect</div>
      <ul className="flex flex-wrap gap-4 text-sm font-medium text-gray-700">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/healthcare">Healthcare</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/reserved-slots">Reserved Slots</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
