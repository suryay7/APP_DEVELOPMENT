import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom' 


const HomePage = () => {
  return (
    <div className="home-container">
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
            <button>Learn More</button>
          </div>
          <div className="info-card">
            <h3>Volunteer Opportunities</h3>
            <p>Discover how you can make a difference by volunteering.</p>
            <button>Get Involved</button>
          </div>
          <div className="info-card">
            <h3>Donate</h3>
            <p>Support our mission by making a donation to help animals in need.</p>
            <button>Donate Now</button>
          </div>
        </section>

        
      </main>

      
    </div>
  );
};

export default HomePage;
