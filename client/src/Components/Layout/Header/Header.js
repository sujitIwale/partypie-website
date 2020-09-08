import React from "react";
import logo from "./logo.png";
import "./Header.css";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div className='fixed-header'>
      {" "}
      <nav class='dt-l w-100 ph5-l '>
        <div class='w-100 pt1 tc'>
          <a class='tc' href=''>
            <img src={logo} alt={title} width='150px' height='55px' />
          </a>
        </div>
        <div class='db dtc-l v-mid w-100 w-75-l tc tr-l pt0 '>
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
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "PARTYPIE",
};

export default Header;
