import React from 'react';
import './NavBar.css'; // Assume you have a corresponding CSS file for styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Explore</div>
      <div className="navbar-links">
        <a href="/home">Home</a>
        <a href="/search">Search</a>
        <a href="/my-books">My Books</a>
        <a href="/profile">Profile</a>
        <a href="/cart">Cart</a>
      </div>
      <div className="navbar-auth">
        <button className="login-btn">Log in</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;

//increase text size of these contents in the navbar

