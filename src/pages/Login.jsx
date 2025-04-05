import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    navigate('/profile');
    console.log(email, password);
  };

  return (
    <div className="flex justify-center min-h-screen bg-[#ece9ff] p-5">
      <div className="bg-white rounded-lg shadow-lg p-12 max-w-[420px] w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
          Sign in to your<br />PopX account
        </h1>
        <p className="text-base text-gray-600 mb-6">
          Welcome back! Please enter your details to continue.
        </p>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="relative mb-6">
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full py-3 px-4 border border-gray-300 rounded-lg text-base text-gray-800 focus:outline-none focus:border-[#6a5bc1]"
            />
            <label
              htmlFor="email"
              className="absolute left-4 -top-3 text-sm text-[#6a5bc1] bg-white px-1 font-medium"
            >
              Email Address
            </label>
          </div>

          <div className="relative mb-6">
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="new-password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full py-3 px-4 border border-gray-300 rounded-lg text-base text-gray-800 focus:outline-none focus:border-[#6a5bc1]"
            />
            <label
              htmlFor="password"
              className="absolute left-4 -top-3 text-sm text-[#6a5bc1] bg-white px-1 font-medium"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-3 bg-[#6a5bc1] text-white rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 hover:bg-[#5a4ba1] hover:scale-105 shadow-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
