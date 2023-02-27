const initialState = {
  books: [],
};

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
      updatedBooks = state.books.filter((book) => book.id !== action.payload);
      return {
        ...state,
        books: updatedBooks,
      };
    default:
      return state;
  }
};

export default bookReducer;
