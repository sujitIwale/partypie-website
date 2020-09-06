import React from "react";
import logo from "./logo.gif";
import "./Header.css";
const Header = () => {
  return (
    <div className='fixed-header bg-light-green'>
      <header id='header'>
        <div className='inner'>
          <p className='logo'>
            <img src={logo} alt='' width='60px' height='60px' />
          </p>
          <nav id='nav' className='nav'>
            <a href='/' className='link'>
              Home
            </a>
            <a href='/' className='link'>
              Book Online
            </a>
            <a href='/' className='link'>
              About Us
            </a>
          </nav>
          <a href='/' className='navPanelToggle'>
            <span className='fa fa-bars'>
              <a href='/'></a>
            </span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
