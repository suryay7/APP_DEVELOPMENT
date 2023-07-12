import React from 'react';
import './pets.css';

function Pet() {
  return (
    <div>
      <h1>Welcome to Pet Adoption!</h1>
      <p>Find your perfect  companion today.</p>

      <h2>Featured Pets</h2>
      <div className="featured-pets">
        {/* Display featured pets */}
        <div className="pet-card">
          <img src="Bella.jpg" alt="Cat" />
          <h3>Bella</h3>
          <p>Age: 2 years</p>
          <p>Gender: Female</p>
          <p>Breed: Ragdoll</p>
        </div>
        <div className="pet-card">
          <img src="Buddy.jpg" alt="Dog" />
          <h3>Buddy</h3>
          <p>Age: 4 years</p>
          <p>Gender: Male</p>
          <p>Breed: Pitbull</p>
        </div>
        <div className="pet-card">
          <img src="Romeo.jpg" alt="Bird" />
          <h3>Romeo</h3>
          <p>Age: 3 years</p>
          <p>Gender:MAle</p>
          <p>Breed: Companion Parrot</p>
        </div>
        <div className="pet-card">
          <img src="Lucy.jpg" alt="Cat" />
          <h3>Lucy</h3>
          <p>Age: 3 years</p>
          <p>Gender: Female</p>
          <p>Breed: british shorthair</p>
        </div>
        <div className="pet-card">
          <img src="Chan.jpg" alt="Dog" />
          <h3>Chan</h3>
          <p>Age: 2 years</p>
          <p>Gender: Male</p>
          <p>Breed: Pug</p>
        </div>
      </div>
    <center>

      <button>View All Pets</button>
    </center>
    </div>
  );
}

export default Pet;