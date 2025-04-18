import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-center text-sm text-gray-600 py-6 shadow-inner mt-auto">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-2">
        <p>&copy; 2025 Hospital Care. All rights reserved.</p>
        <p>
          Phone: 123-456-7890 | Email:{" "}
          <a
            href="mailto:info@hospitalcare.com"
            className="text-blue-600 hover:underline"
          >
            info@hospitalcare.com
          </a>
        </p>
        <div className="flex space-x-4 mt-2 text-gray-500 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
