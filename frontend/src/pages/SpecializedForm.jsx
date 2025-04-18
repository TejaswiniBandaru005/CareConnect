import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

function SpecializedForm() {
  const location = useLocation();

  const [doctorName, setDoctorName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [fee, setFee] = useState('');
  const [doctorImage, setDoctorImage] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const state = location.state || {};

    setDoctorName(state.doctorName || params.get('doctorName') || '');
    setSpecialization(state.specialization || params.get('specialization') || '');
    setFee(state.fee || params.get('fee') || '');
    setDoctorImage(state.doctorImage || params.get('doctorImage') || 'images/default-doctor.png');
  }, [location]);

  const handleAgeGroupChange = (event) => {
    setAgeGroup(event.target.value);
  };

  const handleDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAppointmentConfirmed(true);
  };

  if (appointmentConfirmed) {
    return (
      <section className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Appointment Confirmed</h2>
          <p><strong>Doctor:</strong> {doctorName}</p>
          <p><strong>Specialization:</strong> {specialization}</p>
          <p><strong>Consultation Fee:</strong> {fee}</p>
          <p><strong>Age Group:</strong> {ageGroup}</p>
          <p><strong>Appointment Date:</strong> {appointmentDate}</p>

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
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left Column: Age Group Selection */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Age Group</h3>
          <div className="flex flex-col gap-6">
            {['kids', 'younger', 'adults'].map((group) => (
              <label
                key={group}
                className={`flex items-center gap-4 p-3 border rounded-md cursor-pointer hover:bg-blue-50 ${
                  ageGroup === group ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="ageGroup"
                  value={group}
                  onChange={handleAgeGroupChange}
                  checked={ageGroup === group}
                  className="accent-blue-600"
                />
                <img
                  src={`images/${group}.png`}
                  alt={group}
                  className="w-16 h-16 object-cover rounded"
                />
                <span className="capitalize font-medium text-gray-700">{group}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Right Column: Doctor Info + Form */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Doctor's Information</h3>
          <div className="flex items-center gap-4 mb-4">
            <div>
              <p><strong>Doctor:</strong> {doctorName}</p>
              <p><strong>Specialization:</strong> {specialization}</p>
              <p><strong>Fee:</strong> {fee}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="appointmentDate" className="block text-sm font-semibold text-gray-700 mb-1">Appointment Date</label>
              <input
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                required
                value={appointmentDate}
                onChange={handleDateChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Book Appointment
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default SpecializedForm;
