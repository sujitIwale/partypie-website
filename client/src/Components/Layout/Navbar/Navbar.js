import React from "react";
import logo from "./logo.png";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({ title }) => {
  return (
    <div className='navbar'>
      <nav className='dt-l w-100 ph5-l h7'>
        <div className='w-100 pt2 tc'>
          <a className='tc' href='/'>
            <img src={logo} alt={title} width='150px' height='55px' />
          </a>
        </div>
        <div className='db dtc-l v-mid w-100 w-75-l tc tr-l'>
          <a
            className='link br-pill hover-white hover-bg-black dark-gray pa3 f5 f4-l dib mr4 mr5-l'
            href='/'
          >
            Home
          </a>
          {/* <a
            className='link dim dark-gray f5 f4-l dib mr3 mr4-l'
            href='/'
            title='How it Works'
          >
            How it Works
          </a>
          <a
            className='link dim dark-gray f5 f4-l dib mr3 mr4-l'
            href='/'
            title='Blog'
          >
            Blog
          </a>
          <a
            className='link dim dark-gray f5 f4-l dib mr3 mr4-l'
            href='/'
            title='contactUs'
          >
            Contact Us
          </a> */}
          <a
            className='link br-pill hover-white hover-bg-black pa3 mb2 mt2 dark-gray f5 f4-l dib'
            href='/about'
          >
            About Us
          </a>
        </div>
      </nav>
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
