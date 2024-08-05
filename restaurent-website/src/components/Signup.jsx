import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import axios from 'axios';

const SignUp = ({ onClose, setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', { name, email, password });
      setUser(response.data.user);
      onClose();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg w-full max-w-sm p-6">
      <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
        &times;
      </button>
      <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
      {error && <p className="text-red-600 text-center">{error}</p>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-lg">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-lg">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Register
        </button>
      </form>
      <div className="flex justify-around mt-4">
        <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors">
          <FaGoogle size={24} />
        </button>
        <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
          <FaFacebook size={24} />
        </button>
      </div>
    </div>
  );
};

export default SignUp;