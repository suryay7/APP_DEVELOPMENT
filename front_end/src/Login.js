import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Cookies from 'js-cookie';
// import {useDispatch} from 'react';
// import {setUsername} from './actions';

const LoginPage = () => {
  const navigate = useNavigate();
  // const dispatch=useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      Cookies.set('Id', user.email);
      navigate('/home');
    } catch (e) {
      setError(e.message);
    }
    // dispatch(setUsername(username));
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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

        <div className="button-container">
          <button type="submit">Login</button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
      <br />
      <Link to="/forgot-password">Forgot Password?</Link>
      <br />
      <Link to="/reg">Sign Up</Link>
    </div>
  );
};

export default LoginPage;
