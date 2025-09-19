import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
    
      <div className="w-full max-w-md bg-white p-8 shadow-md min-h-[600px] flex flex-col justify-end">
       
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Welcome to PopX</h1>
          <p className="text-sm text-gray-500 mt-1">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit,
          </p>

          <div className="mt-6 space-y-3">
            <button
              onClick={() => navigate("/signup")}
              className="w-full py-2.5 rounded-md bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
            >
              Create Account
            </button>
            <button
              onClick={() => navigate("/login")}
              className="w-full py-2.5 rounded-md bg-purple-200 text-purple-900 font-medium hover:bg-purple-300 transition"
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
