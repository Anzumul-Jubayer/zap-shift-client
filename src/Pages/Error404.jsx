import React from "react";
import errorImg from '../../src/assets/404.jpeg'
export default function Error404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-md flex flex-col items-center py-16 px-6">
        
        
        <img
          src={errorImg} 
          alt="404 Illustration"
          className="w-40 mb-6"
        />

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Error 404
        </h1>

       
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-2 bg-lime-400 text-gray-800 px-6 py-2 rounded-lg hover:bg-lime-500 transition"
        >
          Go Home
        </button>

      </div>
    </div>
  );
}
