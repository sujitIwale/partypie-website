import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer id='footer'>
        <div class='inner'>
          <h3>Get in touch</h3>

          <form action='#' method='post'>
            <div class='field half first'>
              <label for='name'>Name</label>
              <input name='name' id='name' type='text' placeholder='Name' />
            </div>
            <div class='field half'>
              <label for='email'>Email</label>
              <input name='email' id='email' type='email' placeholder='Email' />
            </div>
            <div class='field'>
              <label for='message'>Message</label>
              <textarea
                name='message'
                id='message'
                rows='6'
                placeholder='Message'
              ></textarea>
            </div>
            <ul class='actions'>
              <li>
                <input value='Send Message' class='button alt' type='submit' />
              </li>
            </ul>
          </form>

          <div class='copyright'>
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
