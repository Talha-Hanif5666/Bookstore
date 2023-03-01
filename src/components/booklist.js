import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      {book.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <h4>{item.author}</h4>
          <p>{item.category}</p>
          <span>
            <button type="button">Comments</button>
            <button type="button" onClick={() => dispatch(removeBook(item.id))}>
              Remove
            </button>
            <button type="button">Edit</button>
          </span>
        </div>
      ))}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default Book;
