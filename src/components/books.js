import React from 'react';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';
import AddnewBook from './newBook';
import Book from './bookList';

const Books = () => {
  const book = [
    { id: uuidv4(), title: 'The sun', author: 'Shangay' },
    { id: uuidv4(), title: 'The flood and water', author: 'Ergenclop' },
  ];

  return (
    <div className="book-container">
      <Book book={book} />
      <AddnewBook />
    </div>
  );
};

export default Books;
