import './App.css';
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/catagories';
import Books from './components/books';
import Navbar from './components/navbar';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Books />} />
              <Route path="/Categories" element={<Categories />} />
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
