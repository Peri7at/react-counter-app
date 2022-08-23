import React, { Component } from 'react';

// Stateless Functional Component
const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar{' '} <span className="badge-pill badge-secondary">
          {totalCounters}</span></a>
      </div>
    </nav>
  );
};
 
export default NavBar;