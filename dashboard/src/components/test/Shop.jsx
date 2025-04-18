import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Shop = () => {
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/medicines');
        setMedicines(res.data);
      } catch (error) {
        console.error('Error fetching medicines:', error);
      }
    };

    fetchMedicines();
  }, []);

  const addToCart = (medicine) => {
    const exists = cart.find((item) => item._id === medicine._id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item._id === medicine._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...medicine, quantity: 1 }]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Shop Medicines</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {medicines.map((medicine) => (
          <div key={medicine._id} className="bg-white shadow-md rounded-md p-4">
            <img
              src={`http://localhost:5000${medicine.image}`}
              alt={medicine.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold">{medicine.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{medicine.description}</p>
            <p className="font-bold text-blue-700">₹{medicine.price}</p>
            <button
              onClick={() => addToCart(medicine)}
              className="mt-3 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Simple Inline Cart Preview */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-2">Cart</h3>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item) => (
              <li
                key={item._id}
                className="flex justify-between items-center border-b py-2"
              >
                <span>{item.name} x {item.quantity}</span>
                <span className="text-blue-600 font-bold">
                  ₹{item.price * item.quantity}
                </span>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Shop;
