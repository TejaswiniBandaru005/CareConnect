import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="home">
        <h1>Welcome to Our Hospital</h1>
        <p>Your health is our priority. Book an appointment with specialized doctors.</p>
        <Link to="/appointment" className="btn">Book Appointment</Link>
      </section>
    </>
  );
}
