import React, { useState } from 'react';

export default function Cardiology() {
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setConfirmationMessage('Thank you for reaching out! Dr. Ramadevi will get back to you soon.');
  };

  return (
    <>
      <header className="bg-gradient-to-r from-red-500 to-orange-400 text-white text-center py-12">
        <h1 className="text-4xl font-semibold">Meet Dr. Ramadevi</h1>
        <p className="text-xl mt-2">Your Trusted Cardiologist</p>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="doctor-info mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Doctor Image */}
          <img 
            src="images/ramadevi.jpg" 
            alt="Cardiology Doctor" 
            className="w-3/4 md:w-1/2 rounded-lg shadow-lg mx-auto" 
          />
          
          {/* Doctor Information */}
          <div>
            <h2 className="text-2xl font-semibold mt-4">Dr. Ramadevi</h2>
            <p className="mt-2">
              Dr. Ramadevi is a board-certified cardiologist with over 15 years of experience in treating various heart conditions. She is passionate about providing personalized care and working with patients to improve their heart health.
            </p>
            <p className="specialization text-lg mt-2">
              <strong>Specialization:</strong> Cardiology, Heart Disease Treatment, Preventive Care
            </p>
            <p className="mt-4">
              Dr. Ramadevi believes in a holistic approach to treating heart diseases and has helped numerous patients lead healthier, happier lives. She is committed to using the latest medical technologies and staying up-to-date with the most current advancements in cardiovascular care.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Contact Dr. Ramadevi for an Appointment</h3>
          <form id="contactForm" onSubmit={handleSubmit}>
            <input 
              type="text" 
              id="name" 
              placeholder="Your Name" 
              required 
              className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="email" 
              id="email" 
              placeholder="Your Email" 
              required 
              className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea 
              id="message" 
              rows="4" 
              placeholder="Your Message" 
              required 
              className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>

          {confirmationMessage && (
            <div className="mt-4 text-green-500">
              {confirmationMessage}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
