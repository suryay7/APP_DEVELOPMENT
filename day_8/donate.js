import React, { useState } from 'react';
import './donate.css';
import Contact from './contact';

const PetDonationPage = () => {
  const [petName, setPetName] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petAge, setPetAge] = useState('');
  const [ContactNo, setContactNo]=useState('');

  const handlePetNameChange = (e) => {
    setPetName(e.target.value);
  };

  const handlePetBreedChange = (e) => {
    setPetBreed(e.target.value);
  };

  const handlePetAgeChange = (e) => {
    setPetAge(e.target.value);
  };
  const handleContactChange = (e) => {
    setContactNo(e.target.value);
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    // Here you can perform donation logic with the provided petName, petBreed, and petAge
    // For simplicity, let's just log the values to the console
    console.log('Pet Name:', petName);
    console.log('Pet Breed:', petBreed);
    console.log('Pet Age:', petAge);
    console.log('Contact No:', ContactNo);
  };

  return (
    <div className="donation-container">
      <h2>Donate a Pet</h2>
      <form onSubmit={handleDonationSubmit}>
        <label htmlFor="petName">Pet Name:</label>
        <input
          type="text"
          id="petName"
          value={petName}
          onChange={handlePetNameChange}
          required
        />

        <label htmlFor="petBreed">Pet Breed:</label>
        <input
          type="text"
          id="petBreed"
          value={petBreed}
          onChange={handlePetBreedChange}
          required
        />

        <label htmlFor="petAge">Pet Age:</label>
        <input
          type="number"
          id="petAge"
          value={petAge}
          onChange={handlePetAgeChange}
          required
        />
        <label htmlFor="ContactNo">Contact No:</label>
        <input
          type="text"
          id="ContactNo"
          value={ContactNo}
          onChange={handleContactChange}
          required
        />

        <button type="submit">Donate Pet</button>
      </form>
    </div>
  );
};

export default PetDonationPage;