import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import AddnewBook from './Form';
import Book from './booklist';

const Books = () => {
  const book = useSelector((state) => state.books);

  return (
    <div className="book-container">
      <Book book={book} />
      <AddnewBook />
    </div>
  );
};

export default Books;
