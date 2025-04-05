import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
    setCompanyName('');
    setIsAgency(null);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem('email');
    if (email && storedEmail === email) {
      toast.error('Email already exists');
      return;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('companyName', companyName);
    localStorage.setItem('isAgency', isAgency);

    toast.success('Account created successfully!');
    navigate('/profile');
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-10">
        <h1 className="text-3xl font-bold text-purple-700 mb-8">
          Create your <br /> PopX account
        </h1>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="relative mb-8">
            <label
              htmlFor="fullName"
              className="absolute left-6 -top-3 text-lg text-purple-600 bg-white px-3"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="block w-full px-4 py-3 border border-gray-400 rounded-md text-lg focus:outline-none focus:border-purple-700"
            />
          </div>

          <div className="relative mb-8">
            <label
              htmlFor="phoneNumber"
              className="absolute left-6 -top-3 text-lg text-purple-600 bg-white px-3"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="block w-full px-4 py-3 border border-gray-400 rounded-md text-lg focus:outline-none focus:border-purple-700"
            />
          </div>

          <div className="relative mb-8">
            <label
              htmlFor="email"
              className="absolute left-6 -top-3 text-lg text-purple-600 bg-white px-3"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-4 py-3 border border-gray-400 rounded-md text-lg focus:outline-none focus:border-purple-700"
            />
          </div>

          <div className="relative mb-8">
            <label
              htmlFor="password"
              className="absolute left-6 -top-3 text-lg text-purple-600 bg-white px-3"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full px-4 py-3 border border-gray-400 rounded-md text-lg focus:outline-none focus:border-purple-700"
            />
          </div>

          <div className="relative mb-8">
            <label
              htmlFor="companyName"
              className="absolute left-6 -top-3 text-lg text-purple-600 bg-white px-3"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              placeholder="Marry Doe"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-400 rounded-md text-lg focus:outline-none focus:border-purple-700"
            />
          </div>

          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-800 mb-2">
              Are you an Agency? <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-8">
              <label className="inline-flex items-center text-lg text-gray-800">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={isAgency === 'yes'}
                  onChange={(e) => setIsAgency(e.target.value)}
                  required
                  className="form-radio text-purple-700 mr-3"
                />
                Yes
              </label>
              <label className="inline-flex items-center text-lg text-gray-800">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={isAgency === 'no'}
                  onChange={(e) => setIsAgency(e.target.value)}
                  required
                  className="form-radio text-purple-700 mr-3"
                />
                No
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded-md text-lg font-semibold hover:bg-purple-800 transition-colors"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
