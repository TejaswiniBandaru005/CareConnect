import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', formData);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Admin Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
