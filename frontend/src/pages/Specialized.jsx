import React from 'react';
import { Link } from 'react-router-dom';

export default function Specialized() {
  return (
    <>
      <section className="p-8 bg-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Meet Our Doctors</h1>

        {/* Cardiologist Section */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Cardiologist Specialists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Dr. Seshi Vardhan Janjirala', specialization: 'Cardiologist', fee: '$150', img: 'images/doctors/Cardiologist/seshivardhanJanjirala.webp' },
            { name: 'Dr. Deependra Bhatnagar', specialization: 'Cardiologist', fee: '$150', img: 'images/doctors/Cardiologist/deependrabhatnagar.jpeg' },
            { name: 'Dr. Seema Shyam', specialization: 'Cardiologist', fee: '$150', img: 'images/doctors/Cardiologist/seemashyam.jpeg' },
            { name: 'Dr. Seema Rajan', specialization: 'Cardiologist', fee: '$150', img: 'images/doctors/Cardiologist/seemarajan.jpeg' },
          ].map((doctor, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <Link to="/specializedform">
                <img src={doctor.img} alt={doctor.name} className="w-full h-56 object-cover" />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                <p><strong>Specialization:</strong> {doctor.specialization}</p>
                <p><strong>Consultation Fee:</strong> {doctor.fee}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Neurologist Section */}
        <h2 className="text-2xl font-semibold text-gray-700 mt-12 mb-4">Neurologist Specialists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Dr. Prithvi Giri', specialization: 'Neurologist', fee: '$90', img: 'images/doctors/Neurologist/prithvigiri.png' },
            { name: 'Dr. Hima Bindhu Bolla', specialization: 'Neurologist', fee: '$90', img: 'images/doctors/Neurologist/himabindhubolla.avif' },
            { name: 'Dr. Soma Sundaram Kumaravelu', specialization: 'Neurologist', fee: '$90', img: 'images/doctors/Neurologist/somasundaramkumaravelu.jpg' },
            { name: 'Dr. Subha Katta', specialization: 'Neurologist', fee: '$90', img: 'images/doctors/Neurologist/subhkatta.jpeg' },
          ].map((doctor, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <Link to="/specializedform">
                <img src={doctor.img} alt={doctor.name} className="w-full h-56 object-cover" />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                <p><strong>Specialization:</strong> {doctor.specialization}</p>
                <p><strong>Consultation Fee:</strong> {doctor.fee}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Orthopedic Section */}
        <h2 className="text-2xl font-semibold text-gray-700 mt-12 mb-4">Orthopedic Specialists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Dr. Arindram Ganguly', specialization: 'Orthopedic', fee: '$120', img: 'images/doctors/Orthopedic/arindramganguly.png' },
            { name: 'Dr. Manisha Kotta', specialization: 'Orthopedic', fee: '$120', img: 'images/doctors/Orthopedic/Manishakotta.png' },
            { name: 'Dr. Minnesota', specialization: 'Orthopedic', fee: '$120', img: 'images/doctors/Orthopedic/Minnesota.jpg' },
            { name: 'Dr. Sarang Deshpande', specialization: 'Orthopedic', fee: '$120', img: 'images/doctors/Orthopedic/sarangdeshpande.png' },
          ].map((doctor, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <Link to="/specializedform">
                <img src={doctor.img} alt={doctor.name} className="w-full h-56 object-cover" />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                <p><strong>Specialization:</strong> {doctor.specialization}</p>
                <p><strong>Consultation Fee:</strong> {doctor.fee}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dentist Section */}
        <h2 className="text-2xl font-semibold text-gray-700 mt-12 mb-4">Dentist Specialists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Dr. Devesh Patel', specialization: 'Dentist', fee: '$100', img: 'images/doctors/Dentist/deveshpatel.webp' },
            { name: 'Dr. John Patel', specialization: 'Dentist', fee: '$100', img: 'images/doctors/Dentist/patel.webp' },
            { name: 'Dr. Vijayalakshmi P', specialization: 'Dentist', fee: '$100', img: 'images/doctors/Dentist/DrVijayalakshmiP.jpg' },
            { name: 'Dr. Krysta Sellers', specialization: 'Dentist', fee: '$100', img: 'images/doctors/Dentist/krystasellers.jpg' },
          ].map((doctor, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <Link to="/specializedform">
                <img src={doctor.img} alt={doctor.name} className="w-full h-56 object-cover" />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                <p><strong>Specialization:</strong> {doctor.specialization}</p>
                <p><strong>Consultation Fee:</strong> {doctor.fee}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dermatologist Section */}
        <h2 className="text-2xl font-semibold text-gray-700 mt-12 mb-4">Dermatologist Specialists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Dr. Aaithithya', specialization: 'Dermatologist', fee: '$130', img: 'images/doctors/Dermatologist/aaithithya.jpeg' },
            { name: 'Dr. Aruna Kumari', specialization: 'Dermatologist', fee: '$130', img: 'images/doctors/Dermatologist/arunakumari.jpg' },
            { name: 'Dr. Sunil Kumar', specialization: 'Dermatologist', fee: '$130', img: 'images/doctors/Dermatologist/sunilkumar.avif' },
            { name: 'Dr. Sunitha Kumari', specialization: 'Dermatologist', fee: '$130', img: 'images/doctors/Dermatologist/sunithakumari.jpeg' },
          ].map((doctor, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <Link to="/specializedform">
                <img src={doctor.img} alt={doctor.name} className="w-full h-56 object-cover" />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                <p><strong>Specialization:</strong> {doctor.specialization}</p>
                <p><strong>Consultation Fee:</strong> {doctor.fee}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
