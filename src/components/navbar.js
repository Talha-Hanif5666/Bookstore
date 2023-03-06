import { Link, Outlet } from 'react-router-dom';
import { GoPerson } from 'react-icons/go';
import '../index.css';

const Navbar = () => (
  <header className="container">
    <nav className="nave-bar">
      <div className="nav-item">
        <Link style={{ textDecoration: 'none' }} to="/">
          <h1>Bookstore CMS</h1>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/">
          <span className="nav-link">Books</span>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="categories">
          <span className="nav-link">Categories</span>
        </Link>
      </div>
      <button type="button" className="user">
        <GoPerson />
      </button>
    </nav>
    <Outlet />
  </header>
);

export default Navbar;
