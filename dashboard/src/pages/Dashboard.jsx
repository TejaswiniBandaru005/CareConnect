import { useNavigate , Link} from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (<>
  <li><Link to="/test/user-register">Test User Register</Link> </li>
  <li><Link to="/upload-doctor">Upload Doctor</Link></li>
  <li><Link to="/upload-disease">Test Disease Form</Link></li>
  <li><Link to="/upload-medicine">Upload Medicine</Link></li>
  <li><Link to="/test/appointment">Test Appointment Form</Link></li>
  <li><Link to="/test/feedback">Test Feedback Form</Link></li>
  <li><Link to="/test/shop">Test Shop</Link></li>
  <li><Link to="/test/orders">Orders</Link></li>
  </>);
};

export default Dashboard;
