import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Orders</h2>
      {orders.length === 0 ? (
        <p className="text-gray-500 text-center">You have no orders yet.</p>
      ) : (
        <div>
          {orders.map((order) => (
            <div key={order._id} className="border-b py-4 mb-6">
              <h3 className="text-xl font-semibold">Order #{order._id}</h3>
              <div className="mt-4">
                <ul className="space-y-4">
                  {order.items.map((item) => (
                    <li key={item._id} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md mr-4"
                        />
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-gray-600">₹{item.price} each</p>
                          <p className="text-gray-600">x {item.quantity}</p>
                        </div>
                      </div>
                      <div className="font-bold">₹{item.price * item.quantity}</div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Price:</span>
                  <span className="text-xl font-bold">₹{order.totalPrice}</span>
                </div>
              </div>
              <div className="mt-4 text-gray-600">
                <p>Status: <span className="font-bold">{order.status}</span></p>
                <p>Ordered on: {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
