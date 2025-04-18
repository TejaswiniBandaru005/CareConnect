import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function General() {
    const [doctorName, setDoctorName] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [disease, setDisease] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('9:00 AM');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setDoctorName(urlParams.get('doctorName') || '');
        setSpecialization(urlParams.get('specialization') || '');
    }, []);

    const handleDiseaseChange = (e) => {
        const selectedDisease = e.target.value;
        setDisease(selectedDisease);

        switch (selectedDisease) {
            case 'fever':
            case 'cold':
            case 'headache':
                setSpecialization('General');
                break;
            case 'toothache':
                setSpecialization('Dental');
                break;
            case 'skin':
                setSpecialization('Dermatology');
                break;
            default:
                setSpecialization('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can integrate API submission here
        alert(`Appointment booked with Dr. ${doctorName} for ${disease} on ${date} at ${timeSlot}`);
    };

    return (
        <form id="generalForm" className="registration-form" onSubmit={handleSubmit}>
            <h2>Book an Appointment</h2>

            <div className="input-group">
                <label>Age Group:</label>
                <label><input type="radio" name="ageGroup" value="kids" checked={ageGroup === 'kids'} onChange={() => setAgeGroup('kids')} /> Kids</label>
                <label><input type="radio" name="ageGroup" value="adults" checked={ageGroup === 'adults'} onChange={() => setAgeGroup('adults')} /> Adults</label>
            </div>

            <div className="input-group">
                <label>Gender:</label>
                <label><input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={() => setGender('male')} /> Male</label>
                <label><input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={() => setGender('female')} /> Female</label>
                <label><input type="radio" name="gender" value="other" checked={gender === 'other'} onChange={() => setGender('other')} /> Other</label>
            </div>

            <div className="input-group">
                <label>Doctor's Name:</label>
                <span>{doctorName}</span>
            </div>

            <div className="input-group">
                <label>Select Disease/Symptoms:</label>
                {['fever', 'cold', 'headache', 'toothache', 'skin'].map((dis) => (
                    <label key={dis}>
                        <input
                            type="radio"
                            name="disease"
                            value={dis}
                            checked={disease === dis}
                            onChange={handleDiseaseChange}
                        /> {dis.charAt(0).toUpperCase() + dis.slice(1)}
                    </label>
                ))}
            </div>

            <div className="input-group">
                <label>Specialization:</label>
                <input type="text" value={specialization} readOnly />
            </div>

            <div className="input-group">
                <label>Consultation Fee:</label>
                <input type="text" value="100" readOnly />
            </div>

            <div className="input-group">
                <label>Select Date:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>

            <div className="input-group">
                <label>Select Time Slot:</label>
                <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} required>
                    {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM'].map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                    ))}
                </select>
            </div>

            <button type="submit" className="btn">Book Now</button>
            <Link to="/home" className="btn cancel-btn">Cancel</Link>
        </form>
    );
}
