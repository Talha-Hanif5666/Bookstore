import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    title: 'The sun and flute',
    author: 'Shangay',
  },
  {
    id: uuidv4(),
    title: 'The flood and water',
    author: 'Ergenclop',
  },
  {
    id: uuidv4(),
    title: 'The dive and conqure',
    author: 'Hafiz',
  },
];

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const bookReducer = (state = initialState, action) => {
  let updatedBooks;
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      updatedBooks = state.books.filter((book) => book.id !== action.payload.id);
      return {
        ...state,
        books: updatedBooks,
      };
    default:
      return state;
  }
};

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: {
    id: uuidv4(),
    title: book.title,
    author: book.author,
  },
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: {
    id: book.id,
  },
});

export { addBook, removeBook };
export default bookReducer;
