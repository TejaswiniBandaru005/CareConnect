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
      <header style={{ background: 'linear-gradient(135deg, #ff9800, #ff5722)' }}>
        <h1>Meet Dr. Sarah Sreya</h1>
        <p>Your Trusted Dental Care Expert</p>
      </header>
      <div className="container">
        <div className="doctor-info">
          <img
            src="/images/dentaldoctor.jpeg"
            alt="Dr. Sarah Sreya"
            className="doctor-image"
          />
          <h2>Dr. Sarah Sreya</h2>
          <p>Experienced in general and cosmetic dentistry with a focus on comfort and care.</p>
          <p className="specialization">General Dentistry, Cosmetic Dentistry, Implants</p>
          <p>Committed to helping patients achieve confident, healthy smiles.</p>
        </div>
        <div className="contact-form">
          <h3>Contact Dr. Sarah Sreya</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
          {confirmationMessage && (
            <div
              style={{
                marginTop: '15px',
                color: 'green',
              }}
            >
              {confirmationMessage}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
