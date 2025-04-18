import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import PrivateRoute from './utils/PrivateRoute';
import DoctorForm from './components/DoctorForm';
import DiseaseForm from './components/DiseaseForm';
import MedicineForm from './components/MedicineForm';
import UserRegisterForm from './components/test/UserRegisterForm';
import AppointmentForm from './components/test/AppointmentForm';
import FeedbackForm from './components/test/FeedbackForm';
import Shop from './components/test/Shop';
import CartPage from './components/test/CartPage';
import CheckoutPage from './components/test/CheckoutPage';
import OrdersPage from './components/test/OrdersPage';

const App = () => {


  
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/home' element={<Home/>}/>
          <Route path="/upload-doctor" element={<DoctorForm />} /> 
          <Route path="/upload-disease" element={<DiseaseForm />} />
          <Route path="/upload-medicine" element={<MedicineForm />} />
          <Route path="/test/user-register" element={<UserRegisterForm />} />
          <Route path="/test/appointment" element={<AppointmentForm />} />
          <Route path="/test/feedback" element={<FeedbackForm />} />
          <Route path="/test/shop" element={<Shop />} />
          <Route path="/test/cart" element={<CartPage />} />
          <Route path="/test/checkout" element={<CheckoutPage />} />
          <Route path="/test/orders" element={<OrdersPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
