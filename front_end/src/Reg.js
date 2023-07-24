import React, { useState } from 'react';
import './Reg.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Here you can perform registration logic with the provided data
    // For simplicity, let's just log the values to the console
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    createAccount(); // Call the createAccount function to handle registration
  };

  const createAccount = async () => {
    try {
      if (password !== confirmPassword) {
        setError('Password and Confirm Password do not match');
        return;
      }
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="registration-container">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={handleFullNameChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />

        <div className="button-container">
          <button type="submit">Register</button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default RegistrationPage;
