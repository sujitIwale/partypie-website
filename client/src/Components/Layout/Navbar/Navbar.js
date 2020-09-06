import React from "react";
import logo from "./logo.gif";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <div className='navbar'>
      <header id='header'>
        <div className='inner'>
          <p className='logo'>
            <img src={logo} alt={title} width='70px' height='70px' />
          </p>
          <nav id='nav'>
            <a href='/'>Home</a>
            <a href='/'>Book Online</a>
            <a href='/'>About Us</a>
          </nav>
          <a href='#navPanel' className='navPanelToggle'>
            <span className='fa fa-bars'>
              <a href='/'>content</a>
            </span>
          </a>
        </div>
      </header>
    </div>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "PARTYPIE",
};

export default Navbar;
