import React from "react";
import PropTypes from "prop-types";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import "./Section.css";

const Section = ({ tagLine, service1, service2, service3, service4 }) => {
  return (
    <div>
      <section style={{ zIndex: "1" }}>
        <header class='bg-gold sans-serif'>
          <div class='mw9 center pa4 pt5-ns ph7-l'>
            <h3 class='f2 f1-m measure-narrow lh-title mv0'>
              <span class=' lh-copy white pa1 tracked-tight'>{tagLine}</span>
            </h3>
            <h4 class='f3 fw1 georgia i'>
              The definitive guide to the javascript tooling landscape in 2015.
            </h4>
            <h5 class='f6 ttu tracked black-80'>By Adam Morse</h5>
          </div>
        </header>
      </section>

      <section id='three' className='wrapper align-center'>
        <div className='inner'>
          <header>
            <h1 className='light-green f1'>Services We Provide.</h1>
          </header>
          <div className='flex flex-4'>
            <article>
              <div className='image'>
                <img src={pic1} alt='Pic 01' width='150px' height='150px' />
              </div>
              <header>
                <h3>{service1}</h3>
              </header>
              <p>
                Morbi in sem quis dui placerat ornare. Pellentesquenisi
                <br />
                euismod in, pharetra a, ultricies in diam sed arcu. Cras
                <br />
                consequat egestas augue vulputate.
              </p>
              <footer>
                <a href='/' className='button'>
                  Learn More
                </a>
              </footer>
            </article>

            <article>
              <div className='image round'>
                <img src={pic3} alt='Pic 03' width='150px' height='150px' />
              </div>
              <header>
                <h3>{service3}</h3>
              </header>
              <p>
                Pellentesque fermentum dolor. Aliquam quam lectus
                <br />
                facilisis auctor, ultrices ut, elementum vulputate, nunc
                <br /> blandit ellenste egestagus commodo.
              </p>
              <footer>
                <a href='/' className='button'>
                  Learn More
                </a>
              </footer>
            </article>
            <article>
              <div className='image round'>
                <img src={pic3} alt='Pic 03' width='150px' height='150px' />
              </div>
              <header>
                <h3>{service4}</h3>
              </header>
              <p>
                Pellentesque fermentum dolor. Aliquam quam lectus
                <br />
                facilisis auctor, ultrices ut, elementum vulputate, nunc
                <br /> blandit ellenste egestagus commodo.
              </p>
              <footer>
                <a href='/' className='button'>
                  Learn More
                </a>
              </footer>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

Section.propTypes = {
  tagLine: PropTypes.string.isRequired,
  service1: PropTypes.string.isRequired,
  service2: PropTypes.string.isRequired,
  service3: PropTypes.string.isRequired,
  service4: PropTypes.string.isRequired,
};

Section.defaultProps = {
  tagLine: "Make Your Memory Sweet...",
  service1: "Venue Setup",
  service3: "Special Arrangement",
  service4: "Chef At Home",
};

export default Section;
