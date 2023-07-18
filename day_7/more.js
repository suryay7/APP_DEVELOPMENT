import React from 'react';
import './more.css';

const MoreDet = () => {
  const pets = [
    {
      id: 1,
      name: 'Bella',
      age: 2,
      gender: 'Female',
      breed: 'Rag Doll',
      image: 'Bella.jpg',
    },
    {
      id:2 ,
      name: 'Buddy',
      age: 4,
      gender:'Male',
      breed: 'Bulldog',
      image: 'Buddy.jpg',
    },
    {
        id:3 ,
        name: 'Romeo',
        age: 3,
        gender:'Male',
        breed: 'Companion Parrot',
        image: 'Romeo.jpg',
      },
      {
        id:4 ,
        name: 'Lucy',
        age: 3,
        gender:'Female',
        breed: 'British Shorthair',
        image: 'Lucy.jpg',
      },
      {
        id:5 ,
        name: 'Chan',
        age: 2,
        gender:'Male',
        breed: 'Pug',
        image: 'Chan.jpg',
      },
      {
        id:6 ,
        name: 'Scooby',
        age: 2,
        gender:'Male',
        breed: 'Labrador',
        image: 'Scooby.jpeg',
      },
      {
        id:7 ,
        name: 'Spike',
        age: 4,
        gender:'Male',
        breed: 'Bulldog',
        image: 'Spike.jpeg',
      },
      {
        id:8 ,
        name: 'Maine ',
        age: 1,
        gender:'Male',
        breed: 'Maine Coon',
        image: 'Maine.jpeg',
      },
      
    
  ];

  return (
    <div>
      <h1>Pets Available</h1>
      <div className="pet-list">
        {pets.map(pet => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} className="pet-image" />
            <h2>{pet.name}</h2>
            <p>Age: {pet.age}</p>
            <p>Gender: {pet.gender}</p>
            <p>Breed: {pet.breed}</p>
            
            <button>Adopt</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreDet;