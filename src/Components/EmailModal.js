import React, { useState } from 'react';

const EmailModal = () => {
  const [isOpen, setIsOpen] = useState(false); // To handle modal visibility

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="text-indigo-600">
        Join Our Waitlist
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 z-10">
            <h2 className="text-lg font-semibold mb-4">Join Our Waitlist!</h2>
            <p>Be the first to experience our new shopping experience.</p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="mt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white bg-indigo-600 p-2 rounded"
              >
                Join Now
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-indigo-600 p-2 rounded ml-2"
              >
                Close
              </button>
            </div>
          </div>
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50 z-0"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
};

export default EmailModal;
