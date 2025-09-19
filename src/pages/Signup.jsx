import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "Yes",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation or API request here
    navigate("/account"); // Redirect to account page after signup
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
      {/* Card wrapper with fixed height (same as Login) */}
      <div className="bg-white p-6 shadow-md w-full max-w-md min-h-[560px] flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            Create your <br /> PopX account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-purple-600 mb-1">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-sm"
                placeholder="Marry Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-600 mb-1">
                Phone number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-sm"
                placeholder="1234567890"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-600 mb-1">
                Email address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-sm"
                placeholder="marry@gmail.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-600 mb-1">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-sm"
                placeholder="********"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-600 mb-1">
                Company name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-sm"
                placeholder="My Company"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Are you an Agency?<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="isAgency"
                    value="Yes"
                    checked={formData.isAgency === "Yes"}
                    onChange={handleChange}
                    className="accent-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-1 text-sm text-purple-600">Yes</span>
                </label>

                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="isAgency"
                    value="No"
                    checked={formData.isAgency === "No"}
                    onChange={handleChange}
                    className="accent-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-1 text-sm text-purple-600">No</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-purple-600 text-white py-2 rounded-md text-sm hover:bg-purple-700 transition"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
