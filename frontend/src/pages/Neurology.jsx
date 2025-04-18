import React from 'react';

export default function Neurology() {
  return (
    <>
      <header className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-12">
        <h1 className="text-4xl font-semibold">Meet Dr. John Smith</h1>
        <p className="text-xl mt-2">Your Trusted Neurologist</p>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="doctor-info mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Doctor Image */}
          <img
            src="../images/neurology.jpg"
            alt="Dr. John Smith"
            className="w-3/4 md:w-1/2 rounded-lg shadow-lg mx-auto"
          />
          
          {/* Doctor Information */}
          <div>
            <h2 className="text-2xl font-semibold mt-4">Dr. John Smith</h2>
            <p className="mt-2">
              Expert in brain disorders, epilepsy, and neurodegenerative diseases with over 20 years of experience.
            </p>
            <p className="specialization text-lg mt-2">
              <strong>Specialization:</strong> Epilepsy, Alzheimer's, Parkinson's, Stroke Recovery
            </p>
            <p className="mt-4">
              Provides personalized care plans to address a wide range of neurological conditions.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Contact Dr. John Smith</h3>
          <form id="contactForm">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
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

          <div
            id="confirmationMessage"
            style={{ marginTop: '15px', color: 'green' }}
            className="hidden"
          >
            Thank you for reaching out! Dr. John will contact you shortly.
          </div>
        </div>
      </div>
    </>
  );
}
