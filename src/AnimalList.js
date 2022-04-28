import React from 'react';
import AnimalItem from './AnimalItem';

export default function AnimalList({ animals }) {
  return (
    <div className="animals-list">
      <h2>Animals</h2>
      {animals.map((animal) => (
        <AnimalItem key={animal.id} {...animal} />
      ))}
    </div>
  );
}
