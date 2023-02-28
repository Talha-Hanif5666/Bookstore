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

  const submitBookToStore = (title, author) => {
    if (!title || !author) return;
    const Newbook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(Newbook));
    setTitle('');
    setAuthor('');
  };
  return (
    <div className="add-new-book">
      <h1>Add New Book</h1>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={handleTitle}
          value={title}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          onChange={handleAuthor}
          value={author}
          required
        />
        <button
          type="submit"
          onClick={() => submitBookToStore(title, author)}
        >
          Add Book

        </button>
      </form>
    </div>
  );
};

export default AddnewBook;
