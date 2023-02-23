import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Categories from './components/catagories';
import Books from './components/books';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Books</Link>
      <Link to="/Categories">Categories</Link>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/Categories" element={<Categories />} />
          </Routes>
    </BrowserRouter>
  );
}


export default App;
