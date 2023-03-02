import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/d6Bp2N91qglaGzR3wQff/books';

const getBooks = createAsyncThunk('books/fetch', async () => {
  const response = await axios.get(api);
  const books = Object.values(response.data);
  const keys = Object.keys(response.data);
  return books.map((book, index) => ({
    id: keys[index],
    title: book[0].title,
    author: book[0].author,
    category: book[0].category,
    complete: Math.floor(Math.random() * 100),
    chapter: Math.floor(Math.random() * 10),
  }));
});

const addBook = createAsyncThunk('books/add', async (book, { dispatch }) => {
  const bookData = {
    item_id: `${book.id}`,
    title: `${book.title}`,
    author: `${book.author}`,
    category: `${book.category}`,
  };
  await axios.post(api, bookData);
  dispatch(getBooks()); // Fetch the updated list of books from the API
  return bookData;
});

const removeBook = createAsyncThunk('books/remove', async (id, { dispatch }) => {
  await axios.delete(`${api}/${id}`);
  dispatch(getBooks()); // Fetch the updated list of books from the API
  return id;
});

const bookReducer = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => action.payload)
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const bookIdToRemove = action.payload;
        return state.filter((book) => book.id !== bookIdToRemove);
      });
  },
});

export { addBook, removeBook, getBooks };
export default bookReducer.reducer;
