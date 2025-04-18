import React, { useState } from 'react';

export default function SpecializedForm() {
  // State for managing age group selection
  const [ageGroup, setAgeGroup] = useState('');
  
  // State for doctor information
  const [doctorInfo, setDoctorInfo] = useState({
    name: 'Dr. John Doe',
    specialization: 'Pediatrics',
    fee: '₹500'
  });

  // State for the appointment date
  const [appointmentDate, setAppointmentDate] = useState('');

  // Handle age group selection
  const handleAgeGroupChange = (event) => {
    setAgeGroup(event.target.value);
  };

  // Handle date selection
  const handleDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Appointment booked for ${ageGroup} on ${appointmentDate} with Dr. ${doctorInfo.name}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section: Age Group Selection */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Select Age Group</h3>
          <div className="flex gap-6">
            <label className="flex flex-col items-center cursor-pointer">
              <input
                type="radio"
                name="ageGroup"
                value="kids"
                onChange={handleAgeGroupChange}
                checked={ageGroup === 'kids'}
                className="hidden"
              />
              <img src="images/kids.png" alt="Kids" className="w-20 h-20 mb-2" />
              <span className="text-gray-700">Kids</span>
            </label>
            <label className="flex flex-col items-center cursor-pointer">
              <input
                type="radio"
                name="ageGroup"
                value="younger"
                onChange={handleAgeGroupChange}
                checked={ageGroup === 'younger'}
                className="hidden"
              />
              <img src="images/younger.png" alt="Younger" className="w-20 h-20 mb-2" />
              <span className="text-gray-700">Younger</span>
            </label>
            <label className="flex flex-col items-center cursor-pointer">
              <input
                type="radio"
                name="ageGroup"
                value="adults"
                onChange={handleAgeGroupChange}
                checked={ageGroup === 'adults'}
                className="hidden"
              />
              <img src="images/adults.png" alt="Adults" className="w-20 h-20 mb-2" />
              <span className="text-gray-700">Adults</span>
            </label>
          </div>
        </div>

        {/* Right Section: Doctor's Information and Form */}
        <div className="w-full md:w-1/2">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Doctor's Information</h3>
            <p><strong className="text-gray-700">Doctor:</strong> {doctorInfo.name}</p>
            <p><strong className="text-gray-700">Specialization:</strong> {doctorInfo.specialization}</p>
            <p><strong className="text-gray-700">Consultation Fee:</strong> {doctorInfo.fee}</p>
          </div>

          <form id="appointmentForm" onSubmit={handleSubmit} className="space-y-4">
            {/* Select Date */}
            <div className="input-group">
              <label htmlFor="appointmentDate" className="block text-gray-700 font-semibold">Appointment Date:</label>
              <input
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                required
                value={appointmentDate}
                onChange={handleDateChange}
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
