import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav-wrapper purple darken-3'>
      <div className='container'>
        <Link to='/' className='left brand-logo'>
          K-Crt
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
