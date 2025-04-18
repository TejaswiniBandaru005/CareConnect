import { useDispatch, useSelector } from 'react-redux';
import { incrementQty, decrementQty, removeItem } from '../../redux/cartRedux';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/test/checkout');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b py-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">₹{item.price} each</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => dispatch(decrementQty(item.id))} className="text-gray-600 hover:text-blue-600">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQty(item.id))} className="text-gray-600 hover:text-blue-600">+</button>
                  <button onClick={() => dispatch(removeItem(item.id))} className="ml-4 text-red-600 hover:text-red-800">Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <span className="text-lg font-semibold">Total Price:</span>
            <span className="text-xl font-bold">₹{totalPrice}</span>
          </div>

          <button onClick={handleCheckout} className="mt-8 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
