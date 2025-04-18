import React, { useState } from 'react';

export default function Feedback() {
    const [rating, setRating] = useState(null); // State to track the rating
    const [message, setMessage] = useState(""); // State for thank you message

    const handleStarClick = (value) => {
        setRating(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("Thank you for your feedback!");
        setTimeout(() => setMessage(""), 3000); // Hide the message after 3 seconds
    };

    return (
        <section
            className="relative flex justify-center items-center flex-col text-center z-10 bg-blue-900 bg-opacity-60 py-16 h-screen"
            style={{
                backgroundImage: "url('images/feedbackbg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="feedback-form max-w-xl w-full mx-auto p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Rate Your Experience</h3>
                <form onSubmit={handleSubmit}>
                    {/* Star Rating */}
                    <div className="stars flex justify-center mb-4">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <span
                                key={value}
                                className={`cursor-pointer text-3xl mx-1 ${
                                    rating >= value ? 'text-yellow-500' : 'text-gray-300'
                                }`}
                                onClick={() => handleStarClick(value)}
                                style={{
                                    backgroundColor: rating >= value ? '#ddd' : 'transparent',
                                    padding: '0.5rem',
                                    borderRadius: '50%',
                                }}
                            >
                                &#9733;
                            </span>
                        ))}
                    </div>
                    {/* Feedback Textarea */}
                    <textarea
                        placeholder="Write your feedback..."
                        required
                        className="w-full p-3 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                    ></textarea>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Submit Feedback
                    </button>
                </form>
                {/* Thank You Message */}
                {message && (
                    <div
                        id="feedbackMessage"
                        className="mt-4 text-green-500 text-center font-semibold"
                    >
                        {message}
                    </div>
                )}
            </div>
        </section>
    );
}
