import React from "react";
import PropTypes from "prop-types";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
// import background from "./background.png";
import { ReactComponent as Reactsvg } from "./logo.svg";
import "./Section.css";

const Section = ({ tagLine, service1, service2, service3, service4 }) => {
  return (
    <div>
      <div class='mt5' />
      <section style={{ zIndex: "1" }}>
        <article class='pa4 ba b--black-10 shadow-5 article'>
          <div class='flex flex-column flex-row-ns'>
            <div class='w-100 w-40-ns pa0 order-1 order-1-ns tc'>
              <h1 className='f1 ma4-ns tc'>{tagLine}</h1>
              <br />
              <h4 className='tc'>
                <strong>
                  <b>PartyPie</b>
                </strong>{" "}
                is Specialized in Event Planning and Working hard for each of my
                clients.
              </h4>
              <br />
              <p className='f6 link pt3 bg-animate hover-bg-black hover-white w-30 br-pill ba bw1 ph3 pv2 mb2 dib near-black tc'>
                Learn More.
              </p>
            </div>
            <div class=' order-2 order-2-ns mb4 mb0-ns w-100 w-60-ns'>
              {/* <img src={background} alt='background illustration' /> */}
              <Reactsvg />
            </div>
          </div>
        </article>
      </section>

      <section id='three' className='wrapper align-center'></section>
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
