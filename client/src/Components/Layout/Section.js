import React from "react";
import PropTypes from "prop-types";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import "./Section.css";

const Section = ({ tagLine, service1, service2, service3 }) => {
  return (
    <div>
      <section id='banner' style={{ zIndex: "1" }}>
        <div className='inner'>
          <header>
            <h1>{tagLine}</h1>
          </header>

          <div className='flex '>
            <div>
              <span className='icon fa-stopwatch'></span>
              <h3>Aliquam</h3>
              <p>Suspendisse amet ullamco</p>
            </div>

            <div>
              <span className='icon fa-camera'></span>
              <h3>Elementum</h3>
              <p>ClassNameclassName aptent taciti ad litora</p>
            </div>

            <div>
              <span className='icon fa-bug'></span>
              <h3>Ultrices</h3>
              <p>Nulla vitae mauris non felis</p>
            </div>
          </div>

          <footer>
            <a
              href='/'
              className='button f6 dim br-pill bg-white ba bw1 ph3 pv2 mb2 dib dark-green'
            >
              <strong>
                <strong>Get Started With Our Services..</strong>{" "}
              </strong>
            </a>
          </footer>
        </div>
      </section>

      <section id='three' className='wrapper align-center'>
        <div className='inner'>
          <header>
            <h1 className='light-green f1'>Services We Provide.</h1>
          </header>
          <div className='flex flex-3'>
            <article>
              <div className='image round'>
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
                <img src={pic2} alt='Pic 02' width='150px' height='150px' />
              </div>
              <header>
                <h3>{service2}</h3>
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
};

Section.defaultProps = {
  tagLine: "Make Your Special Memories Sweetest With Us...",
  service1: "Venue Setup",
  service2: "Menu Design",
  service3: "Special Arrangement",
};

export default Section;
