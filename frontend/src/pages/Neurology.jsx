import React from 'react';

export default function Neurology() {
  return (
    <>
      <header style={{ background: 'linear-gradient(135deg, #ff9800, #ff5722)' }}>
        <h1>Meet Dr. John Smith</h1>
        <p>Your Trusted Neurologist</p>
      </header>
      <div className="container">
        <div className="doctor-info">
          <img src="../images/neurology.jpg" alt="Dr. John Smith" className="doctor-image"/>
          <h2>Dr. John Smith</h2>
          <p>Expert in brain disorders, epilepsy, and neurodegenerative diseases with over 20 years of experience.</p>
          <p className="specialization">Epilepsy, Alzheimer's, Parkinson's, Stroke Recovery</p>
          <p>Provides personalized care plans to address a wide range of neurological conditions.</p>
        </div>
        <div className="contact-form">
          <h3>Contact Dr. John Smith</h3>
          <form id="contactForm">
            <input type="text" placeholder="Your Name" required/>
            <input type="email" placeholder="Your Email" required/>
            <textarea rows="4" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div id="confirmationMessage" style={{ display: 'none', marginTop: '15px', color: 'green' }}>
            Thank you for reaching out! Dr. John will contact you shortly.
          </div>
        </div>
      </div>
    </>
  );
}
