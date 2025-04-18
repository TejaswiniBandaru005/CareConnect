import React, { useState } from 'react';


const medicines = [
  {
    id: 1,
    name: "Thyroxine Sodium Tablets",
    price: 170,
    image: "images/tablets/1.jpeg",
    description: "Thyroxine sodium tablets",
  },
  {
    id: 2,
    name: "Nerocare Tablet",
    price: 170,
    image: "images/tablets/2.jpeg",
    description: "Nerocare Tablet",
  },
  {
    id: 3,
    name: "Pcos Tablets",
    price: 325,
    image: "images/tablets/3.jpeg",
    description: "Pcos Tablets",
  },
  {
    id: 4,
    name: "Pilex Forte",
    price: 289,
    image: "images/tablets/4.jpeg",
    description: "Pilex forte for piles",
  },
  {
    id: 5,
    name: "Losartan",
    price: 0,
    image: "images/tablets/5.jpeg",
    description: "Losartan",
  },
  {
    id: 6,
    name: "Norethindrone Acetate Tablets",
    price: 45,
    image: "images/tablets/6.jpeg",
    description: "Norethindrone Acetate Tablets",
  },
  {
    id: 7,
    name: "Bosutinib Tablets 500mg",
    price: 880,
    image: "images/tablets/7.jpeg",
    description: "Bosutinib Tablets 500mg",
  },
  {
    id: 8,
    name: "Cofsils",
    price: 35,
    image: "images/tablets/8.jpeg",
    description: "Cofsils For Throat Pain",
  },
  {
    id: 9,
    name: "Mecobol Forte",
    price: 250,
    image: "images/tablets/9.jpeg",
    description: "Mecobol Forte for Peripheral Neuropathy",
  },
  {
    id: 10,
    name: "Levofloxacin & Omidazole",
    price: 120,
    image: "images/tablets/10.jpeg",
    description: "Levofloxacin & Omidazole for Antibiotics",
  },
  {
    id: 11,
    name: "Salbutamol 100 mcg Inhaler",
    price: 189,
    image: "images/tablets/11.jpeg",
    description: "Salbutamol 100 mcg inhaler for Asthma",
  },
  {
    id: 12,
    name: "Atenolol Tablets",
    price: 100,
    image: "images/tablets/12.jpeg",
    description: "Atenolol for Hypertension",
  },
];


export default function MedicineShop() {
  const [quantities, setQuantities] = useState({});
  const [orderDetails, setOrderDetails] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const adjustQuantity = (id, change) => {
    setQuantities((prev) => {
      const newQty = Math.max(1, (prev[id] || 1) + change);
      return { ...prev, [id]: newQty };
    });
  };

  const orderItem = (medicine) => {
    const quantity = quantities[medicine.id] || 1;
    const totalPrice = medicine.price * quantity;

    const newItem = {
      item: medicine.name,
      quantity,
      totalPrice
    };

    setOrderDetails((prev) => [...prev, newItem]);
    setShowMessage(true);
  };

  const generateBill = () => {
    const totalAmount = orderDetails.reduce((sum, item) => sum + item.totalPrice, 0);
    return (
      <div className="bg-white p-4 rounded shadow mt-6">
        <h3 className="text-lg font-semibold mb-2">Bill Summary</h3>
        <ul className="space-y-1">
          {orderDetails.map((item, idx) => (
            <li key={idx}>{`${item.item} - Quantity: ${item.quantity} - Rs.${item.totalPrice}`}</li>
          ))}
          <li className="font-bold">Total Amount: Rs.{totalAmount}</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">MEDICINES</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {medicines.map((medicine) => (
            <div key={medicine.id} className="bg-white p-4 rounded shadow text-center">
              <a href={medicine.image} target="_blank" rel="noreferrer">
                <img src={medicine.image} alt={medicine.name} className="w-full h-40 object-contain mb-2" />
              </a>
              <h3 className="font-semibold text-lg">{medicine.name}</h3>
              <h3 className="text-green-600">Rs.{medicine.price}/-</h3>
              <p className="text-sm text-gray-600 mb-2">{medicine.description}</p>
              <div className="flex justify-center items-center space-x-2">
                <button onClick={() => adjustQuantity(medicine.id, -1)} className="px-2 py-1 bg-gray-300 rounded">-</button>
                <span>{quantities[medicine.id] || 1}</span>
                <button onClick={() => adjustQuantity(medicine.id, 1)} className="px-2 py-1 bg-gray-300 rounded">+</button>
              </div>
              <button
                onClick={() => orderItem(medicine)}
                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>

        {showMessage && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded text-center">
            Order Placed Successfully!
          </div>
        )}

        {orderDetails.length > 0 && generateBill()}
      </div>
    </div>
  );
}