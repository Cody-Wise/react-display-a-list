import React from 'react';

export default function CustomerItem({ firstname, lastname, city, country, countryCode }) {
  return (
    <div className="customer-item">
      <div>
        <h3>
          {firstname} {lastname}
        </h3>
        <p>City: {city}</p>
        <p>Country: {country}</p>
        <p>Country Code: {countryCode}</p>
      </div>
    </div>
  );
}
