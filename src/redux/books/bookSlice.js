/* eslint-disable camelcase */
import axios from 'axios';

const initialState = [];

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';
const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/d6Bp2N91qglaGzR3wQff/books';

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

const getBooks = () => async (dispatch) => {
  const allBook = [];
  const response = await axios.get(api);
  const books = Object.values(response.data);
  const keys = Object.keys(response.data);
  books.forEach((book, index) => {
    allBook.push({
      id: keys[index],
      title: book[0].title,
      author: book[0].author,
      category: book[0].category,
    });
  });
  dispatch({
    type: GET_BOOKS,
    payload: allBook,
  });
};

const addBook = (payload) => async (dispatch) => {
  const book = {
    item_id: `${payload.id}`,
    title: `${payload.title}`,
    author: `${payload.author}`,
    category: `${payload.category}`,
  };
  await axios.post(api, book);
  dispatch({
    type: ADD_BOOK,
    payload: book,
  });
};

const removeBook = (id) => async (dispatch) => {
  await axios.delete(`${api}/${id}`);
  dispatch({
    type: REMOVE_BOOK,
    id,
  });
};

export { addBook, removeBook, getBooks };
export default bookReducer;
