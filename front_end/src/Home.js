import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom' 
// import {useSelector} from 'react';

const HomePage = () => {
  // const username=useSelector((state)=>state.user.username);
  return (
    <div className="home-container">
      {/* <h>Welcome,{username}</h> */}
      <header>
        <h1>Welcome to Pet Adoption Center</h1>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-image">
            {/* Add an image related to pet adoption */}
          </div>
          <div className="hero-content">
            <h2>Find Your Perfect Companion</h2>
            <p>Explore our selection of adorable pets waiting for a loving home.</p>

            <nav>
                <Link to="/pet">
                    <button>View Available Pets</button>

                </Link>
            </nav>
          </div>
        </section>

        <section className="info-section">
          <div className="info-card">
            <h3>Adoption Process</h3>
            <p>Learn about our simple and caring adoption process.</p>
            <nav>
              <Link to="/learn">
                    <button>Learn More</button>
              
              </Link>
            </nav>
          </div>
          <div className="info-card">
            <h3>Volunteer Opportunities</h3>
            <p>Discover how you can make a difference by volunteering.</p>
            <nav>
              <Link to='/vol'>
                  <button>Get Involved</button>
              </Link>
            </nav>
          </div>
          <div className="info-card">
            <h3>Donate Pet Animals</h3>
            <p>Support our mission by making a donation to help animals in need.</p>
            <nav>
              <Link to='/donate'>
                  <button>Donate Now</button>
              </Link>
            </nav>
          </div>
        </section>

        
      </main>
      <footer>Copyright 2023 ©️ PET SPACE. All rights reserved</footer>

    </div>
  );
};

export default HomePage;
