// src/components/Admin/MedicineForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const MedicineForm = () => {
  const [formData, setFormData] = useState({
    image: null, // Change to handle file upload
    name: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData(prev => ({
        ...prev,
        image: e.target.files[0] // Capture the selected file
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
    form.append('image', formData.image); // Append the image file
    form.append('name', formData.name);
    form.append('price', formData.price);
    form.append('description', formData.description);

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/medicines', form, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', // Required for file uploads
        }
      });

      alert('Medicine uploaded successfully!');
      setFormData({
        image: null,
        name: '',
        price: '',
        description: ''
      });
    } catch (error) {
      console.error('Error uploading medicine:', error);
      alert('Error uploading medicine');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Upload Medicine</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
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
          placeholder="Medicine Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="input"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="textarea"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-semibold"
        >
          Upload Medicine
        </button>
      </form>
    </div>
  );
};

export default MedicineForm;
