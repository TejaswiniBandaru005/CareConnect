import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    // Simulating order confirmation, normally you would send data to the server here
    alert('Order confirmed!');
    setCart([]); // Clear cart after checkout
    navigate('/test/orders');
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Checkout</h2>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item._id} className="flex justify-between items-center border-b py-4">
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

        <div className="mt-6 flex justify-between items-center">
          <span className="text-lg font-semibold">Total Price:</span>
          <span className="text-xl font-bold">₹{totalPrice}</span>
        </div>

        <button
          onClick={handleConfirmOrder}
          className="mt-8 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
