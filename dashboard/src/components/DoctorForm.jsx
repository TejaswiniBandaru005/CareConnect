// src/components/Admin/DoctorForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const DoctorForm = () => {
  const [formData, setFormData] = useState({
    image: null, // image is now a file
    name: '',
    email: '',
    dob: '',
    gender: '',
    aadhaarNumber: '',
    location: '',
    department: '',
    specialization: '',
    available_to: '',
    bio: '',
    description: ''
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData(prev => ({
        ...prev,
        image: e.target.files[0] // Capture the file object
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('name', formData.name);
    form.append('image', formData.image); // Append the image file
    form.append('email', formData.email);
    form.append('dob', formData.dob);
    form.append('gender', formData.gender);
    form.append('aadhaarNumber', formData.aadhaarNumber);
    form.append('location', formData.location);
    form.append('department', formData.department);
    form.append('specialization', formData.specialization);
    form.append('available_to', formData.available_to);
    form.append('bio', formData.bio);
    form.append('description', formData.description);

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/doctors', form, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', // Important for file uploads
        }
      });

      alert('Doctor uploaded successfully!');
      setFormData({
        image: null,
        name: '',
        email: '',
        dob: '',
        gender: '',
        aadhaarNumber: '',
        location: '',
        department: '',
        specialization: '',
        available_to: '',
        bio: '',
        description: ''
      });
    } catch (error) {
      console.error('Error uploading doctor:', error);
      alert('Error uploading doctor');
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Upload Doctor</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="file"
          name="image"
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          className="input"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="input"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="aadhaarNumber"
          placeholder="Aadhaar Number"
          value={formData.aadhaarNumber}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={formData.specialization}
          onChange={handleChange}
          required
          className="input"
        />
        <select
          name="available_to"
          value={formData.available_to}
          onChange={handleChange}
          required
          className="input"
        >
          <option value="">Available To</option>
          <option value="general">General</option>
          <option value="specialized">Specialized</option>
          <option value="both">Both</option>
        </select>
        <textarea
          name="bio"
          placeholder="Short Bio"
          value={formData.bio}
          onChange={handleChange}
          className="textarea col-span-2"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="textarea col-span-2"
        />
        <button
          type="submit"
          className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold"
        >
          Upload Doctor
        </button>
      </form>
    </div>
  );
};

export default DoctorForm;
