import React from 'react';
import BookItem from './BookItem.js';

export default function BookList({ books }) {
  return (
    <div>
      <h2>Books</h2>
      <div className="book-list">
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
}
