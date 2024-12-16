'use client'
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Data:', formData);
    // Add sign-up logic here (e.g., API call to register user)
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 text-orange-400 focus:ring-orange-400 border-gray-300 rounded"
            />
            <label htmlFor="rememberMe" className="ml-2 text-gray-700">
              Remember me?
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Sign Up
          </button>
        </form>

        {/* Forget Password */}
        <div className="text-right mt-2 text-sm text-gray-500">
          <a href="#" className="hover:underline">Forget password?</a>
        </div>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Logins */}
        <button
          onClick={() => signIn('google')}
          className="w-full flex items-center justify-center mb-2 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50"
        >
          <img
            src="/google-icon.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign up with Google
        </button>

        <button
          onClick={() => signIn('apple')}
          className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50"
        >
          <img
            src="/apple-icon.svg"
            alt="Apple"
            className="w-5 h-5 mr-2"
          />
          Sign up with Apple
        </button>
      </div>
    </div>
  );
};

export default SignUp;
