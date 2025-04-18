import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function ReservedSlots() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const doctorName = queryParams.get('doctorName') || 'Dr. Smith';
  const specialization = queryParams.get('specialization') || 'Cardiology';
  const disease = queryParams.get('disease') || 'Heart Disease';
  const ageGroup = queryParams.get('ageGroup') || 'Adults';
  const gender = queryParams.get('gender') || 'Male';
  const appointmentDate = queryParams.get('appointmentDate') || '2025-04-20';
  const timeSlot = queryParams.get('timeSlot') || '10:00 AM';
  const fee = queryParams.get('fee') || '100';

  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setAppointmentConfirmed(true);
  };

  if (appointmentConfirmed) {
    return (
      <section className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Appointment Confirmed</h2>
          <p><strong>Doctor:</strong> {doctorName}</p>
          <p><strong>Specialization:</strong> {specialization}</p>
          <p><strong>Disease:</strong> {disease}</p>
          <p><strong>Age Group:</strong> {ageGroup}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Date:</strong> {appointmentDate}</p>
          <p><strong>Time:</strong> {timeSlot}</p>
          <p><strong>Consultation Fee:</strong> ₹{fee}</p>

          <Link
            to="/home"
            className="inline-block mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Appointment Confirmation</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4">
        <p><strong>Doctor:</strong> Dr. {doctorName}</p>
        <p><strong>Specialization:</strong> {specialization}</p>
        <p><strong>Disease:</strong> {disease}</p>
        <p><strong>Age Group:</strong> {ageGroup}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Date:</strong> {appointmentDate}</p>
        <p><strong>Time Slot:</strong> {timeSlot}</p>
        <p><strong>Consultation Fee:</strong> ₹{fee}</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md mt-6">
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Confirm Appointment
        </button>
      </form>

      <button
        onClick={() => navigate('/home')}
        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
      >
        Go Back to Home
      </button>

      <Link
        to="/home"
        className="mt-2 text-blue-600 hover:underline"
      >
        Back
      </Link>
    </section>
  );
}
