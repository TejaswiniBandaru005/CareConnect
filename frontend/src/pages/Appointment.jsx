import React from 'react';
import { Link } from 'react-router-dom';

export default function Appointment() {
    return (
        <section
            className="relative flex justify-center items-center flex-col text-center text-white z-10 bg-blue-900 bg-opacity-60 py-16 h-screen"
            style={{
                backgroundImage: "url('images/appointbg.avif')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'black',
            }}
        >
            <section className="p-8 bg-gray-100">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Book Your Appointment</h1>
                <p className="text-center text-lg text-gray-600 mb-8">Choose your appointment type by clicking on one of the images below.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Link to="/general" className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <div className="relative">
                            <img src="images/generalbg.avif" alt="General Appointment" className="w-full h-56 object-cover" />
                            <div className="absolute inset-0 bg-black opacity-30"></div>
                            <h2 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">General Doctor Appointment</h2>
                        </div>
                    </Link>

                    <Link to="/specialized" className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <div className="relative">
                            <img src="images/specializedbg.avif" alt="Specialized Appointment" className="w-full h-56 object-cover" />
                            <div className="absolute inset-0 bg-black opacity-30"></div>
                            <h2 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">Specialized Doctor's Appointment</h2>
                        </div>
                    </Link>

                    <Link to="/regular" className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <div className="relative">
                            <img src="images/regular.jpg" alt="Regular Appointment" className="w-full h-56 object-cover" />
                            <div className="absolute inset-0 bg-black opacity-30"></div>
                            <h2 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">Available Doctors Appointment</h2>
                        </div>
                    </Link>
                </div>
            </section>
        </section>
    );
}
