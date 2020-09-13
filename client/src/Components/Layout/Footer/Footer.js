import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className='tc ma4 footer'>
        <div>
          <a
            style={{ textDecoration: "none" }}
            href='https://www.instagram.com/partypie_crew/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='icon pointer fa-instagram f2 ma3 black link instagram'></span>{" "}
          </a>
          <a
            style={{ textDecoration: "none" }}
            href='https://www.facebook.com/Partypiecrew/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='icon pointer fa-facebook f2  ma3 black facebook'></span>{" "}
          </a>
          <a
            style={{ textDecoration: "none" }}
            href=' https://twitter.com/Partypie_Crew'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='icon pointer fa-twitter f2  ma3 black twitter'></span>{" "}
          </a>
          <a
            style={{ textDecoration: "none" }}
            href='mailto:partypiecrew@gmail.com ?subject=subject Text'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='icon pointer fa-envelope f2  ma3 black envelope'></span>{" "}
          </a>
          <hr className='w-70 center bg-black' />
          <span className='icon pointer fa-copyright f6 ma3 black ttc '>
            {" "}
            PARTYPIE , all rights are reserved .{" "}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
