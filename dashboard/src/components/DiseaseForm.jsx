// src/components/Admin/DiseaseForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const DiseaseForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: null, // Changed to null as we will store the image file
    symptoms: '',
    preventive_measures: '',
    complication_prevention: '',
    tips: ''
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      // Handle file input for image
      setFormData((prev) => ({
        ...prev,
        image: e.target.files[0] // Store the file object
      }));
    } else {
      setFormData((prev) => ({
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
    form.append('symptoms', formData.symptoms);
    form.append('preventive_measures', formData.preventive_measures);
    form.append('complication_prevention', formData.complication_prevention);
    form.append('tips', formData.tips);

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/diseases', form, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', // This is necessary for file uploads
        },
      });

      alert('Disease uploaded successfully!');
      setFormData({
        name: '',
        image: null,
        symptoms: '',
        preventive_measures: '',
        complication_prevention: '',
        tips: ''
      });
    } catch (error) {
      console.error('Error uploading disease:', error);
      alert('Error uploading disease');
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Upload Disease</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Disease Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <textarea
          name="symptoms"
          placeholder="Symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <textarea
          name="preventive_measures"
          placeholder="Preventive Measures"
          value={formData.preventive_measures}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <textarea
          name="complication_prevention"
          placeholder="Complication Prevention"
          value={formData.complication_prevention}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <textarea
          name="tips"
          placeholder="Health Tips"
          value={formData.tips}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DiseaseForm;
