import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {

    const handleLogout = () => {
        localStorage.removeItem('token'); 
        navigate('/login'); 
      };

  const cartCount = useSelector((state) => state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0));

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">CareConnect</h1>
      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/login" className="hover:text-gray-200">Login</Link>
        <Link to="/register" className="hover:text-gray-200">Register</Link>
        <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
        <Link to="/test/cart" className="relative hover:text-gray-200">
          <FaShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
        <button onClick={handleLogout} className="hover:text-gray-200">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
