import React, { useState } from 'react';
import axios from 'axios';

const UserRegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
    aadhaarNumber: '',
    location: ''
  });

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const age = calculateAge(formData.dob);

    const userPayload = {
      ...formData,
      age,
      location: formData.location // keep as string for simplicity
    };

    try {
      await axios.post('http://localhost:5000/api/users', userPayload);
      alert('User registered successfully!');
      setFormData({
        username: '',
        email: '',
        password: '',
        dob: '',
        gender: '',
        aadhaarNumber: '',
        location: ''
      });
    } catch (error) {
      console.error('Registration error:', error);
      alert('Failed to register user');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">User Registration</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required className="input" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="input" />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="input" />
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="input" />
        <select name="gender" value={formData.gender} onChange={handleChange} required className="input">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="text" name="aadhaarNumber" placeholder="Aadhaar Number" value={formData.aadhaarNumber} onChange={handleChange} required className="input" />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required className="input" />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold">
          Register
        </button>
      </form>
    </div>
  );
};

export default UserRegisterForm;
