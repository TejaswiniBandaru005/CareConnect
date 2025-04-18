import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    rating: 5
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
      await axios.post('http://localhost:5000/api/feedbacks', formData);
      alert('Feedback submitted!');
      setFormData({ name: '', message: '', rating: 5 });
    } catch (err) {
      console.error(err);
      alert('Error submitting feedback.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Leave Your Feedback</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none"
          required
        />
        <div>
          <label className="block mb-1 font-medium text-gray-700">Rating:</label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none"
          >
            <option value={5}>★★★★★ (5)</option>
            <option value={4}>★★★★☆ (4)</option>
            <option value={3}>★★★☆☆ (3)</option>
            <option value={2}>★★☆☆☆ (2)</option>
            <option value={1}>★☆☆☆☆ (1)</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
