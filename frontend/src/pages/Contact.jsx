import React from 'react';

export default function Contact() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto p-6">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="mb-6 text-lg text-gray-600">
                    If you have any questions or need assistance, feel free to reach out to us. We're here to help!
                </p>

                <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
                <div className="contact-form bg-white p-6 rounded-lg shadow-lg">
                    <form action="submit_form.php" method="POST">
                        <div className="mb-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="6"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Our Contact Information</h3>
                <div className="contact-info text-lg text-gray-600">
                    <div>Email: <a href="mailto:contact@careconnect.com" className="text-blue-600">contact@careconnect.com</a></div>
                    <div>Phone: <a href="tel:+18001234567" className="text-blue-600">1-800-123-4567</a></div>
                </div>

                <div className="map-container mt-8">
                    <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.080440097043!2d-73.98454748501468!3d40.74881737932794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599b7d97845d%3A0x2396e64abf1653cc!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1683879398792!5m2!1sen!2sus"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-72 rounded-md shadow-lg"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
