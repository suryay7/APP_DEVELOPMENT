import React from 'react';
import './pets.css';
import { Link } from 'react-router-dom';

function Pet() {
  return (
    <div>
      <h1>Adoption can change their life!</h1>
      <p>Find your perfect  companion today,,,</p>

      <h2>Suggested For you</h2>
      <div className="featured-pets">
        {/* Display featured pets */}
        <div className="pet-card">
          <img src="Bella.jpg" alt="Cat" />
          <h3>Bella</h3>
          <p>Age: 2 years</p>
          <p>Gender: Female</p>
          <p>Breed: Ragdoll</p>
          <p>Owner: Surya</p>
          <p>Contact No: 9489193306</p> 
        </div>
        <div className="pet-card">
          <img src="Buddy.jpg" alt="Dog" />
          <h3>Buddy</h3>
          <p>Age: 4 years</p>
          <p>Gender: Male</p>
          <p>Breed: Pitbull</p>
          <p>Owner: sanjay</p>
          <p>Contact No: 9489193306</p>

        </div>
        <div className="pet-card">
          <img src="Romeo.jpg" alt="Bird" />
          <h3>Romeo</h3>
          <p>Age: 3 years</p>
          <p>Gender:Male</p>
          <p>Breed: Companion Parrot</p>
          <p>Owner: taran</p>
          <p>Contact No: 9489193306</p>

        </div>
        <div className="pet-card">
          <img src="Lucy.jpg" alt="Cat" />
          <h3>Lucy</h3>
          <p>Age: 3 years</p>
          <p>Gender: Female</p>
          <p>Breed: British Shorthair</p>
          <p>Owner: sanjay</p>
          <p>Contact No: 9489654940</p>

        </div>
        <div className="pet-card">
          <img src="Chan.jpg" alt="Dog" />
          <h3>Chan</h3>
          <p>Age: 2 years</p>
          <p>Gender: Male</p>
          <p>Breed: Pug</p>
          <p>Owner: prakash</p>

          <p>Contact No: 7010646869</p>

        </div>
      </div>
    <center>
<nav>
  <Link to='/mo'>
      {/* <button>View More Pets</button> */}
  </Link>
</nav>
    </center>
    </div>
  );
}

export default Pet;