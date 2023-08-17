import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = ({ movieTitle, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
            Movie Details
        </div>
        <Link to="/" className="home-link">
            <FaHome />
          </Link>
      </div>
    </div>
  );
};

export default Navbar;
