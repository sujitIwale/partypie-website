import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ title }) => {
  const [color, setcolor] = useState("");
  const colorChange = () => {
    setcolor("blue");
  };
  return (
    <div onScroll={colorChange}>
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

      <section id='banner'>
        <div class='inner'>
          <header>
            <h1>Welcome to Projection</h1>
          </header>

          <div class='flex '>
            <div>
              <span class='icon fa-car'></span>
              <h3>Aliquam</h3>
              <p>Suspendisse amet ullamco</p>
            </div>

            <div>
              <span class='icon fa-camera'></span>
              <h3>Elementum</h3>
              <p>Class aptent taciti ad litora</p>
            </div>

            <div>
              <span class='icon fa-bug'></span>
              <h3>Ultrices</h3>
              <p>Nulla vitae mauris non felis</p>
            </div>
          </div>

          <footer>
            <a href='#' class='button'>
              Get Started
            </a>
          </footer>
        </div>
      </section>

      <section id='three' class='wrapper align-center'>
        <div class='inner'>
          <div class='flex flex-2'>
            <article>
              <div class='image round'>
                <img src='images/pic01.jpg' alt='Pic 01' />
              </div>
              <header>
                <h3>
                  Lorem ipsum
                  <br /> dolor amet nullam
                </h3>
              </header>
              <p>
                Morbi in sem quis dui placerat ornare. Pellentesquenisi
                <br />
                euismod in, pharetra a, ultricies in diam sed arcu. Cras
                <br />
                consequat egestas augue vulputate.
              </p>
              <footer>
                <a href='#' class='button'>
                  Learn More
                </a>
              </footer>
            </article>
            <article>
              <div class='image round'>
                <img src='images/pic02.jpg' alt='Pic 02' />
              </div>
              <header>
                <h3>
                  Sed feugiat
                  <br /> tempus adipicsing
                </h3>
              </header>
              <p>
                Pellentesque fermentum dolor. Aliquam quam lectus
                <br />
                facilisis auctor, ultrices ut, elementum vulputate, nunc
                <br /> blandit ellenste egestagus commodo.
              </p>
              <footer>
                <a href='#' class='button'>
                  Learn More
                </a>
              </footer>
            </article>
          </div>
        </div>
      </section>

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
            &copy; Untitled. Design:{" "}
            <a href='https://templated.co'>TEMPLATED</a>. Images:{" "}
            <a href='https://unsplash.com'>Unsplash</a>.
          </div>
        </div>
      </footer>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

Section.defaultProps = {
  title: "PARTYPIE",
};

export default Section;
