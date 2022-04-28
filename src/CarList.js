import React from 'react';
import CarItem from './CarItem';

export default function CarList({ cars }) {
  return (
    <div className="car-list">
      <h2>Cars</h2>
      {cars.map((car) => (
        <CarItem key={car} car={car} />
      ))}
    </div>
  );
}
