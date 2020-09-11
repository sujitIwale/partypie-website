import React from "react";
import logo from "./logo.png";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({ title }) => {
  return (
    <div className='navbar'>
      <nav class='dt-l w-100 ph5-l h7'>
        <div class='w-100 pt1 tc'>
          <a class='tc' href=''>
            <img src={logo} alt={title} width='150px' height='55px' />
          </a>
        </div>
        <div class='db dtc-l v-mid w-100 w-75-l tc tr-l'>
          <a
            class='link dim dark-gray f5 f4-l dib mr3 mr4-l'
            href='/'
            title='Home'
          >
            Home
          </a>
          <a
            class='link dim dark-gray f5 f4-l dib mr3 mr4-l'
            href='/'
            title='How it Works'
          >
            How it Works
          </a>
          <a
            class='link dim dark-gray f5 f4-l dib mr3 mr4-l'
            href='/'
            title='Blog'
          >
            Blog
          </a>
          <a
            class='link dim dark-gray f5 f4-l dib mr3 mr4-l'
            href='/'
            title='contactUs'
          >
            Contact Us
          </a>
          <a class='link dim dark-gray f5 f4-l dib' href='/' title='aboutUs'>
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
