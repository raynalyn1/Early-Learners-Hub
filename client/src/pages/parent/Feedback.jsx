import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending feedback
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
    setFeedback('');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-600">Parent Feedback</h1>

      {submitted ? (
        <p className="text-green-600 font-semibold">Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-lg font-semibold mb-2">Your Feedback</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              rows="4"
              placeholder="Share your thoughts or concerns..."
            ></textarea>
          </div>
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500">
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
