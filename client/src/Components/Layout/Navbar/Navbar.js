import React from "react";
import PropTypes from "prop-types";
import './Navbar.css'

const Navbar = ({title}) => {
  return(
   <div className='navbar'>
    <header id='header'>
        <div class='inner'>
          <a class='logo'>
            <strong>{title}</strong>
          </a>
          <nav id='nav'>
            <a>Home</a>
            <a>Book Online</a>
            <a>About Us</a>
          </nav>
          <a href='#navPanel' class='navPanelToggle'>
            <span class='fa fa-bars'>
              <a></a>
            </span>
          </a>
        </div>
      </header>
   </div>
  )
  };
  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
  };
  
  Navbar.defaultProps = {
    title: "PARTYPIE",
  };
  

export default Navbar;
