import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/bookSlice';
import '../index.css';

const categories = ['Category', 'Action', 'Science Fiction', 'Economy', 'Software Enginering'];

const AddnewBook = () => {
  const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  const [category, setcategory] = useState('');

  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  // const handleAuthor = (e) => {
  //   setAuthor(e.target.value);
  // };

  const handleCategory = (e) => {
    setcategory(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (!title || !category) return;
    const newBook = {
      id: uuidv4(),
      title,
      // author,
      category,
      complete: false,
      chapter: 0,
    };
    dispatch(addBook(newBook));
    setTitle('');
    // setAuthor('');
    setcategory('Action');
  };

  return (
    <div className="add-new-book">
      <hr />
      <h1>Add New Book</h1>
      <form onSubmit={submitBookToStore}>
        <input type="text" placeholder="Title" onChange={handleTitle} value={title} required />
        {/* <input type="text" placeholder="Author" onChange={handleAuthor}
        value={author} required /> */}
        <select name="category" id="category" value={category} onChange={handleCategory}>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button type="submit" onClick={() => submitBookToStore(title, category)}>Add Book</button>
      </form>
    </div>
  );
};

export default AddnewBook;
