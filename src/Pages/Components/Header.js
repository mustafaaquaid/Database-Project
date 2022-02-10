import React from 'react';
import './Header.css';

function Header() {
  return <div className='Header'>
      <div className='Logo'>
        <a href='/'>
          <h1 className='Logo_h1'> DHA Suffa<span>Airways</span></h1>
        </a>
      </div>
      <div className='Links'>
        <a href='/..'> Explore </a>
        <a href='/..'> Book </a>
        <a href='/..'> Experience </a>
        <a href='/..'> Privilege Club </a>
      </div>
  </div>;
}

export default Header;
