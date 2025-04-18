import React, { useState } from 'react';

export default function Dental() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    setConfirmationMessage("Thank you! Dr. Sarah will contact you shortly.");
    // Clear form data after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <header className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-12">
        <h1 className="text-4xl font-semibold">Meet Dr. Sarah Sreya</h1>
        <p className="text-xl mt-2">Your Trusted Dental Care Expert</p>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="doctor-info mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Doctor Image */}
          <img
            src="/images/dentaldoctor.jpeg"
            alt="Dr. Sarah Sreya"
            className="w-3/4 md:w-1/2 rounded-lg shadow-lg mx-auto"
          />
          
          {/* Doctor Information */}
          <div>
            <h2 className="text-2xl font-semibold mt-4">Dr. Sarah Sreya</h2>
            <p className="mt-2">
              Experienced in general and cosmetic dentistry with a focus on comfort and care.
            </p>
            <p className="specialization text-lg mt-2">
              <strong>Specialization:</strong> General Dentistry, Cosmetic Dentistry, Implants
            </p>
            <p className="mt-4">
              Committed to helping patients achieve confident, healthy smiles.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Contact Dr. Sarah Sreya</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
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
