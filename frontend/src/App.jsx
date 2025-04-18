import './assets/styles.css'
import Navbar from "./components/Navbar"
import { Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer"
import Home from './pages/Home';
import Cardiology from './pages/Cardiology';
import Dental from './pages/Dental';
import Dermatology from './pages/Dermatology';
import Forgot from './pages/Forgot';
import General from './pages/General';
import Register from './pages/Register';
import Departments from './pages/Departments';
import SpecializedForm from './pages/SpecializedForm';
import Specialized from './pages/Specialized';
import Shop from './pages/Shop';
import ReservedSlots from './pages/ReservedSlots';
import About from './pages/About';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Neurology from './pages/Neurology';
import Appointment from './pages/Appointment';
import Healthcare from './pages/Healthcare';
import Regular from './pages/Regular';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/reserved-slots" element={<ReservedSlots />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/register" element={<Register />} />
          <Route path="/regular" element={<Regular />} />
          <Route path="/specializedform" element={<SpecializedForm />} />
          <Route path="/specialized" element={<Specialized />} />
          <Route path="/neurology" element={<Neurology/>} />
          <Route path="/general" element={<General />} />
          <Route path="/dermatology" element={<Dermatology />} />
          <Route path="/dental" element={<Dental />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


export default App
