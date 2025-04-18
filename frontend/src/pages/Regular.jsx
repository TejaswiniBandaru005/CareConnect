import React from 'react'

export default function Regular() {
  return (
    <>
      <main id="home" className="bg-gray-50 py-12">
        <section className="appointment max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Book an Appointment</h2>
            <p className="text-center text-gray-600 mb-8">Fill in the details below to schedule your visit.</p>
            
            <form id="appointment-form" className="appointment-form">
                <div className="input-group mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Enter your full name" 
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
        
                <div className="input-group mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="Enter your phone number" 
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
        
                <div className="input-group mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder="Enter your email" 
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
        
                <div className="input-group mb-4">
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700">Select Department</label>
                    <select 
                      id="department" 
                      name="department" 
                      required 
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">--Choose Department--</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="neurology">Neurology</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="pediatrics">Pediatrics</option>
                        <option value="general">General Medicine</option>
                    </select>
                </div>
        
                <div className="input-group mb-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date" 
                      required 
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
        
                <div className="input-group mb-4">
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700">Preferred Time</label>
                    <input 
                      type="time" 
                      id="time" 
                      name="time" 
                      required 
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
        
                <div className="input-group mb-4">
                    <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700">Symptoms / Reason for Visit</label>
                    <textarea 
                      id="symptoms" 
                      name="symptoms" 
                      rows="4" 
                      placeholder="Briefly describe your symptoms or reason for visit" 
                      required 
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                </div>
        
                <button 
                  type="submit" 
                  className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  Book Appointment
                </button>
            </form>
        
            <div id="appointment-message" className="message mt-6 text-center text-green-500"></div>
        </section>
    </main>
    </>
  )
}
