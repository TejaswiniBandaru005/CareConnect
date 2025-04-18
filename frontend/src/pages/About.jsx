import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <section
            className="relative flex justify-center items-center flex-col text-center text-white z-10 bg-blue-900 bg-opacity-60 py-16 h-auto max-h-screen overflow-y-auto"
            style={{
                backgroundImage: "url('images/health.avif')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'black'
            }}
        >
            <div className="content p-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Welcome to Care Connect</h2>
                <p className="mb-6">
                    At Care Connect, we are committed to providing quality healthcare through seamless, digital
                    management of your medical journey. With our online hospital management system, we aim to
                    redefine the way healthcare is delivered—making it accessible, efficient, and
                    patient-focused.
                </p>

                <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
                <p className="mb-6">
                    To create a healthier world through technology-driven, patient-centric healthcare solutions
                    that connect individuals with the right care, at the right time.
                </p>

                <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                <p className="mb-6">
                    We strive to provide an exceptional healthcare experience by using innovative digital tools
                    that streamline hospital operations and enhance the quality of care. Our mission is to make
                    healthcare more accessible, transparent, and efficient, enabling patients and medical
                    professionals to focus on what matters most—well-being.
                </p>

                <h3 className="text-2xl font-semibold mb-2">What We Do</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>
                        <strong>Digital Appointment Scheduling:</strong> Book and manage your appointments with
                        ease.
                    </li>
                    <li>
                        <strong>Patient Records Management:</strong> Secure, easy-to-access, and up-to-date health
                        records.
                    </li>
                    <li>
                        <strong>Online Consultation:</strong> Connect with top medical professionals from the
                        comfort of your home.
                    </li>
                    <li>
                        <strong>24/7 Support:</strong> Our team is available round-the-clock to assist you with
                        any queries.
                    </li>
                </ul>

                <h3 className="text-2xl font-semibold mb-2">Why Choose Us?</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>
                        <strong>User-Friendly Interface:</strong> Intuitive design that makes it easy for patients
                        and staff to navigate.
                    </li>
                    <li>
                        <strong>Comprehensive Solutions:</strong> From appointment booking to medical records and
                        billing, everything in one place.
                    </li>
                    <li>
                        <strong>Data Security:</strong> Your health information is protected with top-tier
                        encryption and privacy policies.
                    </li>
                    <li>
                        <strong>Seamless Communication:</strong> Patients can easily connect with doctors and
                        medical staff via our secure platform.
                    </li>
                </ul>

                <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                    Contact Us
                </Link>
            </div>
        </section>
    );
}
