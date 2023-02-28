import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/bookSlice';

const AddnewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="add-new-book">
      <h1>Add New Book</h1>
      <form onSubmit={submitBookToStore}>
        <input type="text" placeholder="Title" onChange={handleTitle} value={title} required />
        <input type="text" placeholder="Author" onChange={handleAuthor} value={author} required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddnewBook;
