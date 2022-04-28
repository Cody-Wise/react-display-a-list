import React from 'react';

export default function BookItem({ name, published, type, author }) {
  return (
    <div>
      <div className="book-item">
        <h3>{name}</h3>
        <p>Published in {published}</p>
      </div>
      <div key={author.name}>
        <h4>Author: {author.name}</h4>
        <p>Age: {author.age}</p>
        <p>Hometown: {author.hometown}</p>
      </div>
    </div>
  );
}
