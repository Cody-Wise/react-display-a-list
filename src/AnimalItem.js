import React from 'react';

export default function AnimalItem({ name, age, type, favoritetoys }) {
  return (
    <div className="animal-item">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Type: {type}</p>
      <p>Favorite Toys</p>
      <ul className="toys">
        {favoritetoys.map((favoritetoy) => (
          <li key={favoritetoy}>
            <span>{favoritetoy}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
