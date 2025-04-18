import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="content">
                <h2 className="section-title">Contact Us</h2>
                <p>If you have any questions or need assistance, feel free to reach out to us. We're here to help!</p>

                <h3 className="section-title">Send Us a Message</h3>
                <div className="contact-form">
                    <form action="submit_form.php" method="POST">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" rows="6" require ></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <h3 className="section-title">Our Contact Information</h3>
                <div className="contact-info">
                    <div>Email: <a href="mailto:contact@careconnect.com">contact@careconnect.com</a></div>
                    <div>Phone: <a href="tel:+18001234567">1-800-123-4567</a></div>
                </div>

                <div className="map-container">
                    <h3 className="section-title">Our Location</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.080440097043!2d-73.98454748501468!3d40.74881737932794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599b7d97845d%3A0x2396e64abf1653cc!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1683879398792!5m2!1sen!2sus"
                        allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>

        </>
    )
}
