import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    ageGroup: '',
    gender: '',
    disease: '',
    specialization: '',
    fee: '',
    date: '',
    time: '',
    availability: '',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/appointments', formData);
      alert('Appointment booked successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        department: '',
        ageGroup: '',
        gender: '',
        disease: '',
        specialization: '',
        fee: '',
        date: '',
        time: '',
        availability: '',
        reason: ''
      });
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Error booking appointment');
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Book Appointment</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="input" />
        <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="input" />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="input" />
        <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} className="input" />
        <select name="ageGroup" value={formData.ageGroup} onChange={handleChange} required className="input">
          <option value="">Select Age Group</option>
          <option value="Child">Child</option>
          <option value="Teen">Teen</option>
          <option value="Adult">Adult</option>
          <option value="Senior">Senior</option>
        </select>
        <select name="gender" value={formData.gender} onChange={handleChange} required className="input">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input name="disease" placeholder="Disease / Symptoms" value={formData.disease} onChange={handleChange} className="input" />
        <input name="specialization" placeholder="Specialization" value={formData.specialization} onChange={handleChange} className="input" />
        <input name="fee" placeholder="Consultation Fee" type="number" value={formData.fee} onChange={handleChange} className="input" />
        <input name="date" type="date" value={formData.date} onChange={handleChange} required className="input" />
        <input name="time" type="time" value={formData.time} onChange={handleChange} required className="input" />
        <select name="availability" value={formData.availability} onChange={handleChange} required className="input">
          <option value="">Select Availability</option>
          <option value="general">General</option>
          <option value="specialized">Specialized</option>
        </select>
        <textarea name="reason" placeholder="Symptoms / Reason for Visit" value={formData.reason} onChange={handleChange} className="textarea" />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
