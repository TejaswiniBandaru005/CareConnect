import React, { useState } from 'react';

export default function Cardiology() {
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setConfirmationMessage('Thank you for reaching out! Dr. Ramadevi will get back to you soon.');
  };

  return (
    <>
      <header style={{ background: 'linear-gradient(135deg, #ff6347, #ff8c00)' }}>
        <h1 className="text-white text-4xl font-semibold">Meet Dr. Ramadevi</h1>
        <p className="text-white text-xl">Your Trusted Cardiologist</p>
      </header>

      <div className="container mx-auto p-6">
        <div className="doctor-info mb-8">
          <img src="images/ramadevi.jpg" alt="Cardiology Doctor" className="doctor-image w-full md:w-1/2 rounded-lg shadow-lg mx-auto" />
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

        <div className="contact-form bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Contact Dr. Ramadevi for an Appointment</h3>
          <form id="contactForm" onSubmit={handleSubmit}>
            <input 
              type="text" 
              id="name" 
              placeholder="Your Name" 
              required 
              className="w-full p-2 mb-4 border rounded" 
            />
            <input 
              type="email" 
              id="email" 
              placeholder="Your Email" 
              required 
              className="w-full p-2 mb-4 border rounded" 
            />
            <textarea 
              id="message" 
              rows="4" 
              placeholder="Your Message" 
              required 
              className="w-full p-2 mb-4 border rounded"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>

          {confirmationMessage && (
            <div style={{ marginTop: '15px', color: 'green' }}>
              {confirmationMessage}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
