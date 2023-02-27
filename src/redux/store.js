import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoryReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer:
    {
      books: bookReducer,
      catagories: categoryReducer,
    },
});

export default store;
