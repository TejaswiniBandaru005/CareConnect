import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section 
        className="relative flex justify-center items-center flex-col text-center text-white z-10 bg-blue-900 bg-opacity-60 py-16 h-screen" 
        style={{ 
          backgroundImage: "url('images/doctorbg.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          color: 'black'
        }}
      >
        <h1 className="text-4xl font-extrabold mb-5">Welcome to Our Hospital</h1>
        <p className="text-xl mb-7">Your health is our priority. Book an appointment with specialized doctors.</p>
        <Link to="/appointment" className="bg-green-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition duration-300">
          Book Appointment
        </Link>
      </section>
    </>
  );
}
