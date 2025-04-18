import React from 'react'

export default function Dermatology() {
  return (
    <>
      <header style={{ background: 'linear-gradient(135deg, #ff9800, #ff5722)', color: 'white', padding: '2rem 1rem', textAlign: 'center' }}>
        <h1>Meet Dr. Emma Williams</h1>
        <p>Your Trusted Dermatologist</p>
      </header>

      <div className="container" style={{ padding: '2rem' }}>
        <div className="doctor-info" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img src="/images/Dermatology2.jpeg" alt="Dr. Emma Williams" className="doctor-image" style={{ width: '300px', borderRadius: '1rem', marginBottom: '1rem' }} />
          <h2>Dr. Emma Williams</h2>
          <p>Expert in acne, eczema, and skin cancer prevention with over 15 years of experience.</p>
          <p className="specialization" style={{ fontWeight: 'bold' }}>Acne, Skin Cancer, Eczema, Laser Skin Therapy</p>
          <p>Provides customized treatment plans to address each patient's skin health.</p>
        </div>

        <div className="contact-form" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3>Contact Dr. Emma Williams</h3>
          <form id="contactForm">
            <input type="text" placeholder="Your Name" required style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
            <input type="email" placeholder="Your Email" required style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
            <textarea rows="4" placeholder="Your Message" required style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.5rem' }}></textarea>
            <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#ff5722', color: 'white', border: 'none', borderRadius: '0.5rem' }}>
              Send Message
            </button>
          </form>
          <div id="confirmationMessage" style={{ display: 'none', marginTop: '15px', color: 'green' }}>
            Thank you for reaching out! Dr. Emma will contact you shortly.
          </div>
        </div>
      </div>
    </>
  )
}
