import React from 'react';

const Results = ({ resultImageUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <img src={resultImageUrl} alt="Result" className="rounded-lg" />
      </div>
      <div className="flex space-x-4">
        <button
          className="text-white bg-indigo-600 p-2 rounded"
          onClick={() => {
            // Logic for sharing on Facebook
          }}
        >
          Share on Facebook
        </button>
        <button
          className="text-white bg-blue-500 p-2 rounded"
          onClick={() => {
            // Logic for sharing on Twitter
          }}
        >
          Share on Twitter
        </button>
        <button
          className="text-white bg-red-600 p-2 rounded"
          onClick={() => {
            // Logic for sharing on Instagram
          }}
        >
          Share on Instagram
        </button>
      </div>
    </div>
  );
};

export default Results;
