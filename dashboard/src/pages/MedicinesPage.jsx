import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MedicinesPage = () => {
  const [medicines, setMedicines] = useState([]);

  // Fetch medicines
  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/medicines', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setMedicines(response.data);
      } catch (error) {
        console.error('Error fetching medicines:', error);
      }
    };
    fetchMedicines();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/medicines/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMedicines(medicines.filter((medicine) => medicine._id !== id));
      alert('Medicine deleted successfully');
    } catch (error) {
      console.error('Error deleting medicine:', error);
      alert('Error deleting medicine');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold text-center">Medicines</h2>
      <div className="mt-6">
        <Link to="/upload-medicine" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
          Upload New Medicine
        </Link>
      </div>
      <div className="mt-6">
        <table className="min-w-full bg-white shadow-md rounded-md">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine) => (
              <tr key={medicine._id}>
                <td className="py-2 px-4 border-b">{medicine.name}</td>
                <td className="py-2 px-4 border-b">{medicine.price}</td>
                <td className="py-2 px-4 border-b">{medicine.description}</td>
                <td className="py-2 px-4 border-b">
                  <Link to={`/edit-medicine/${medicine._id}`} className="text-blue-600 hover:text-blue-800 mr-4">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(medicine._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicinesPage;
