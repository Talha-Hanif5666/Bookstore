import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddnewBook from './Form';
import Book from './booklist';
import { getBooks } from '../redux/books/bookSlice';

const Books = () => {
  const book = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="book-container">
      <Book book={book} />
      <AddnewBook />
    </div>
  );
};

export default Books;
