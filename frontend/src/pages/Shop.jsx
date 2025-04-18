import React, { useState } from 'react';

export default function Shop() {
  // State to manage the quantities and the order details
  const [quantities, setQuantities] = useState({
    8: 1,
    9: 1,
    10: 1,
    11: 1,
    12: 1,
    13: 1,
    14: 1,
    15: 1,
    16: 1
  });

  const [orderDetails, setOrderDetails] = useState([]);
  const [showBill, setShowBill] = useState(false);

  const prices = {
    8: 170,
    9: 289,
    10: 325,
    11: 289,
    12: 450,
    13: 120,
    14: 300,
    15: 300,
    16: 300
  };

  // Adjust the quantity of an item
  const adjustQuantity = (itemId, change) => {
    setQuantities(prevQuantities => {
      const newQuantity = prevQuantities[itemId] + change;
      return {
        ...prevQuantities,
        [itemId]: newQuantity > 0 ? newQuantity : 1 // Prevent quantities from going below 1
      };
    });
  };

  // Handle the ordering of an item
  const orderItem = (itemId) => {
    const quantity = quantities[itemId];
    const totalPrice = prices[itemId] * quantity;
    const newOrder = {
      item: `Item ${itemId}`,
      quantity: quantity,
      totalPrice: totalPrice
    };

    setOrderDetails(prevOrderDetails => [...prevOrderDetails, newOrder]);

    // Show the order confirmation message and the bill
    setShowBill(true);
  };

  // Generate the bill summary
  const generateBill = () => {
    let totalAmount = 0;
    const billContent = orderDetails.map(item => {
      totalAmount += item.totalPrice;
      return (
        <li key={item.item} className="text-gray-700 mb-2">
          {item.item} - Quantity: {item.quantity} - Rs.{item.totalPrice}
        </li>
      );
    });

    return (
      <>
        {billContent}
        <li className="font-semibold text-lg text-gray-900">
          <strong>Total Amount: Rs.{totalAmount}</strong>
        </li>
      </>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Medicines</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[8, 9, 10, 11, 12, 13, 14, 15, 16].map(itemId => (
          <div key={itemId} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            <a href={`/images/tablets/${itemId}.jpeg`} className="mb-4">
              <img src={`/images/tablets/${itemId}.jpeg`} alt={`Item ${itemId}`} className="h-40 w-40 object-contain"/>
            </a>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{`Item ${itemId}`}</h3>
            <h3 className="text-lg text-gray-600 mb-2">Rs.{prices[itemId]} /-</h3>
            <p className="text-sm text-gray-500 mb-4">{`Item ${itemId} description`}</p>

            <div className="flex items-center mb-4">
              <button 
                className="bg-gray-200 text-gray-800 p-2 rounded-l-lg hover:bg-gray-300" 
                onClick={() => adjustQuantity(itemId, -1)}>-</button>
              <span className="px-4">{quantities[itemId]}</span>
              <button 
                className="bg-gray-200 text-gray-800 p-2 rounded-r-lg hover:bg-gray-300" 
                onClick={() => adjustQuantity(itemId, 1)}>+</button>
            </div>
            <button 
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" 
              onClick={() => orderItem(itemId)}>
              Order Now
            </button>
          </div>
        ))}
      </div>

      {showBill && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Bill Summary</h3>
          <ul className="list-none">
            {generateBill()}
          </ul>
        </div>
      )}

      {orderDetails.length > 0 && (
        <div className="mt-6 text-center text-green-600 font-semibold">
          <p>Order Successfully Placed!</p>
        </div>
      )}
    </div>
  );
}
