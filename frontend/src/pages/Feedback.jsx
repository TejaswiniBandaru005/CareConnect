import React from 'react';

export default function Feedback() {
  return (
    <>
      <div className="feedback-form" style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
        <h3>Rate Your Experience</h3>
        <form>
          <div className="stars" style={{ fontSize: '2rem', color: '#ffa500', marginBottom: '1rem' }}>
            <span className="star" data-value="1" style={{ cursor: 'pointer' }}>&#9733;</span>
            <span className="star" data-value="2" style={{ cursor: 'pointer' }}>&#9733;</span>
            <span className="star" data-value="3" style={{ cursor: 'pointer' }}>&#9733;</span>
            <span className="star" data-value="4" style={{ cursor: 'pointer' }}>&#9733;</span>
            <span className="star" data-value="5" style={{ cursor: 'pointer' }}>&#9733;</span>
          </div>
          <textarea
            placeholder="Write your feedback..."
            required
            style={{
              width: '100%',
              height: '100px',
              padding: '0.5rem',
              marginBottom: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              resize: 'vertical'
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: '0.5rem 1.5rem',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Submit Feedback
          </button>
        </form>
        <div
          id="feedbackMessage"
          style={{ display: 'none', marginTop: '10px', color: 'green' }}
        >
          Thank you for your feedback!
        </div>
      </div>
    </>
  );
}
