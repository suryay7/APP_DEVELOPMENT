import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Cookies from 'js-cookie';
import {useDispatch} from 'react-redux';
import {setUsername} from './actions';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
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
      dispatch(setUsername(email));
      navigate('/home');
    } catch (e) {
      setError(e.message);
    }
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

// LoginPage.js
// import React, { useState } from 'react';
// import './Login.css';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Import Axios
// import Cookies from 'js-cookie';
// import { useDispatch } from 'react-redux';
// import { setUsername } from './actions';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const authData = { email, password }; // Create a data object with email and password
//       const response = await axios.post('http://localhost:1234/addfed', authData); // Make a POST request to the Spring Boot API

//       // Assuming your API returns a token or user data upon successful login
//       const { token, user } = response.data;
//       Cookies.set('Id', user.email);
//       dispatch(setUsername(user.email));
//       navigate('/home');
//     } catch (e) {
//       setError(e.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={handleEmailChange}
//           required
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={handlePasswordChange}
//           required
//         />

//         <div className="button-container">
//           <button type="submit">Login</button>
//         </div>
//       </form>
//       {error && <p className="error-message">{error}</p>}
//       <br />
//       <Link to="/forgot-password">Forgot Password?</Link>
//       <br />
//       <Link to="/reg">Sign Up</Link>
//     </div>
//   );
// };

// export default LoginPage;
