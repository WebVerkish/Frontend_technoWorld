// src/Components/Navbar.jsx
import React from 'react';
import { Link , useLocation } from 'react-router-dom';
import Logo from '../images/logo1.jpg';
import '../css/navbar.css';
import arrowIcon from '../Icon/build-header-arrow.svg'

function Navbar() {
  const location = useLocation();
  const menu = [
    { name: 'How It Works', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Careers', path: '/careers' }
  ];

  return (
    <header className="header-section page-width" data-sectionid="header">
      <div className="header-wrapper">
        <div className="image-wrapper-outer">
          <img src={Logo} alt="Logo" />
        </div>
        <nav className="menu-wrapper">
        <ul>
            {menu.map((item, index) => (
              <li key={index} className={location.pathname === item.path ? 'active' : ''}>
                <Link to={item.path} className='p15'>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='button-wrapper-header'>
          <button className="button-primary">Build A Team  
            <img src={arrowIcon}  alt="Arrow Build" />
            </button>
          <Link to="/contact" className='p15'>Contact us</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
