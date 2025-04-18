import React from 'react'

export default function ReservedSlots() {
  return (
    <>
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Your Reserved Slot</h2>

            <div className="reserved-slot-details space-y-4">
                <p className="text-gray-700"><strong className="font-semibold">Doctor's Name:</strong> <span id="reservedDoctorName" className="text-gray-600"></span></p>
                <p className="text-gray-700"><strong className="font-semibold">Specialization:</strong> <span id="reservedSpecialization" className="text-gray-600"></span></p>
                <p className="text-gray-700"><strong className="font-semibold">Consultation Fee:</strong> <span id="reservedFee" className="text-gray-600"></span></p>
                <p className="text-gray-700"><strong className="font-semibold">Symptoms/Disease:</strong> <span id="reservedDisease" className="text-gray-600"></span></p>
                <p className="text-gray-700"><strong className="font-semibold">Age Group:</strong> <span id="reservedAgeGroup" className="text-gray-600"></span></p>
                <p className="text-gray-700"><strong className="font-semibold">Appointment Date:</strong> <span id="reservedAppointmentDate" className="text-gray-600"></span></p>
            </div>
        </div>
    </>
  )
}
