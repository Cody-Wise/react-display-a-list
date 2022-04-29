import React from 'react';

export default function BookItem({ name, published, type, author }) {
  return (
    <div className="book-item">
      <h3>{name}</h3>
      <p>Edition: {type}</p>
      <p>Published in {published}</p>

      {/* <div key={author.name}> */}
      <h4>Author: {author.name}</h4>
      <p>Age: {author.age}</p>
      <p>Hometown: {author.hometown}</p>
      {/* </div> */}
    </div>
  );
}
