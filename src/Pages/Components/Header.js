import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
  return <div className='Header'>
      <div className='Logo'>
        <Link to='/'>
          <h1 className='Logo_h1'> DHA Suffa<span>Airways</span></h1>
        </Link>
      </div>
      <div className='Links'>
        <Link to='/..'> Explore </Link>
        <Link to='/BookNow'> Book </Link>
        <Link to='/..'> Experience </Link>
        <Link to='/..'> Privilege Club </Link>
      </div>
  </div>;
}

export default Header;
