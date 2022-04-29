import React from 'react';
import AnimalItem from './AnimalItem';

export default function AnimalList({ animals }) {
  return (
    <div>
      <h2>Animals</h2>
      <div className="animals-list">
        {animals.map((animal) => (
          <AnimalItem key={animal.id} {...animal} />
        ))}
      </div>
    </div>
  );
}
