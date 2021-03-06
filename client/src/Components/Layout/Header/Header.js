import React from "react";
import logo from "./logo.png";
import "./Header.css";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div className='fixed-header shadow-4'>
      {" "}
      <nav className='dt-l w-100 ph5-l '>
        <div className='w-100 pt1 tc'>
          <a className='tc' href='/'>
            <img src={logo} alt={title} width='150px' height='55px' />
          </a>
        </div>
        <div className='db dtc-l v-mid w-100 w-75-l tc tr-l pt0 '>
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
            title='Contact Us'
          >
            Contact Us
          </a>
           */}
          <a
            className='link br-pill hover-white hover-bg-black dark-gray pa3 mb2 mt2 f5 f4-l dib'
            href='/about'
          >
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
