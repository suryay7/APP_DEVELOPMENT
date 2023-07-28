import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './fb.css';

const FeedForm = () => {

const[formdata,setFormdata]= useState({
    email: '',
    name: '',
    subject: '',
    message: ''
   
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    axios
      .post('http://localhost:1234/addfed', formdata)
      .then((response) => {
        console.log(response);
        navigate("/feedh")
      })
      .catch((error) => {


        console.log(error);
      });

    console.log(formdata);
  }
  
  
 
  return (
    <div className="down">
      <div className="login-form">
        <h2>FEEDBACK</h2>
        <form onSubmit={handleSubmit} >
          <input
            type="email"
            placeholder="Email"
            id='email'
            onChange={handleChange}
            required
          />
          <input
            type="name"
            placeholder="Name"
            id='name'
            onChange={handleChange}
            required
          />
             <input
            type="name"
            placeholder="Subject"
            id='subject'
            onChange={handleChange}
            required
          />
            <input
            type="name"
            placeholder="Message"
            id='message'
            onChange={handleChange}
            required
          />
          <nav>
            
          <button type='submit' onChange={handleSubmit}>Submit</button>
          </nav>
         
        </form>
      </div>
    </div>

  );
};

export default FeedForm;