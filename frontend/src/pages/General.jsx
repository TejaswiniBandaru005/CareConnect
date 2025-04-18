import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function General() {
    const [doctorName, setDoctorName] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [disease, setDisease] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('9:00 AM');

    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setDoctorName(urlParams.get('doctorName') || '');
        setSpecialization(urlParams.get('specialization') || '');
    }, []);

    const handleDiseaseChange = (e) => {
        const selectedDisease = e.target.value;
        setDisease(selectedDisease);

        const specializationMap = {
            fever: 'General',
            cold: 'General',
            headache: 'General',
            toothache: 'Dental',
            skin: 'Dermatology',
        };

        setSpecialization(specializationMap[selectedDisease] || '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const queryParams = new URLSearchParams({
            doctorName,
            specialization,
            disease,
            ageGroup,
            gender,
            appointmentDate: date,
            timeSlot,
            fee: '100',
        });

        navigate(`/reservedslots?${queryParams.toString()}`);
    };

    return (
        <section
            className="relative flex justify-center items-center flex-col text-center text-white z-10 bg-blue-900 bg-opacity-60 py-16 h-screen overflow-auto"
            style={{
                backgroundImage: "url('images/generalbg.avif')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'black',
            }}
        >
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white bg-opacity-90 p-8 rounded-lg shadow-lg"
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Book an Appointment</h2>

                {/* Age Group */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Age Group:</label>
                    <div className="flex space-x-6">
                        {['kids', 'adults'].map((group) => (
                            <label key={group} className="flex items-center">
                                <input
                                    type="radio"
                                    name="ageGroup"
                                    value={group}
                                    checked={ageGroup === group}
                                    onChange={() => setAgeGroup(group)}
                                    className="mr-2"
                                />
                                {group.charAt(0).toUpperCase() + group.slice(1)}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Gender */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Gender:</label>
                    <div className="flex space-x-6">
                        {['male', 'female', 'other'].map((g) => (
                            <label key={g} className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value={g}
                                    checked={gender === g}
                                    onChange={() => setGender(g)}
                                    className="mr-2"
                                />
                                {g.charAt(0).toUpperCase() + g.slice(1)}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Doctor Name */}
                {doctorName && (
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Doctor's Name:</label>
                        <span className="block text-gray-600">{doctorName}</span>
                    </div>
                )}

                {/* Disease */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Select Disease/Symptoms:</label>
                    {['fever', 'cold', 'headache', 'toothache', 'skin'].map((dis) => (
                        <label key={dis} className="block">
                            <input
                                type="radio"
                                name="disease"
                                value={dis}
                                checked={disease === dis}
                                onChange={handleDiseaseChange}
                                className="mr-2"
                            />
                            {dis.charAt(0).toUpperCase() + dis.slice(1)}
                        </label>
                    ))}
                </div>

                {/* Specialization */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Specialization:</label>
                    <input
                        type="text"
                        value={specialization}
                        readOnly
                        className="w-full p-3 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Fee */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Consultation Fee:</label>
                    <input
                        type="text"
                        value="100"
                        readOnly
                        className="w-full p-3 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Date */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Select Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Time Slot */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Select Time Slot:</label>
                    <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md"
                    >
                        {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM'].map((slot) => (
                            <option key={slot} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition duration-300"
                    >
                        Book Now
                    </button>
                    <Link
                        to="/home"
                        className="w-full bg-red-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-red-700 transition duration-300 text-center"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </section>
    );
}
