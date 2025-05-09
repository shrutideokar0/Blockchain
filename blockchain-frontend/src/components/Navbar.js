import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // assuming scoped or global CSS

const Navbar = () => {
  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" to="/">
            <span>Certify</span>
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home </Link>
                {/* <span className="sr-only"></span> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/why">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">Why Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/loginlanding">
                  <i className="fa fa-user" aria-hidden="true"></i> Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signuplanding">
                  <i className="fa fa-user" aria-hidden="true"></i> Sign Up
                </Link>
              </li>
              <form className="form-inline">
                <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
