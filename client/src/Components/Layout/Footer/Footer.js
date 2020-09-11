import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer id='footer'>
        <div className='inner'>
          <div className='copyright'>
            <span className='icon pointer fa-instagram f2 ma3 instagram'></span>
            <span className='icon pointer fa-facebook f2 ma3 facebook'></span>
            <span className='icon pointer fa-twitter f2 ma3 twitter'></span>
            <span className='icon pointer fa-envelope f2 ma3 envelope'></span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
