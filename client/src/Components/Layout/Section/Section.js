import React from "react";
import PropTypes from "prop-types";
// import background from "./background.png";
import { ReactComponent as Reactsvg } from "./logo.svg";
import "./Section.css";

const Section = ({ tagLine }) => {
  return (
    <div>
      <div className='mt5' />
      <section style={{ zIndex: "1" }}>
        <article className='pa4 ba b--black-10 shadow-5 article'>
          <div className='flex flex-column flex-row-ns'>
            <div className='w-100 w-40-ns pa0 order-1 order-1-ns tc'>
              <h1 className='f1 ma4-ns tc'>{tagLine}</h1>
              <br />
              <h4 className='tc ttc'>
                <strong>
                  <b>PartyPie</b>
                </strong>{" "}
                is Specialized in Event Planning and Working hard for each of
                Our clients.
              </h4>
              <br />
              <p className='f4 link pt3 bg-animate hover-bg-black hover-white w-30 br-pill ba bw1 ph3 pv2 mb2 dib near-black tc'>
                Learn More.
              </p>
            </div>
            <div className=' order-2 order-2-ns mb4 mb0-ns w-100 w-60-ns'>
              {/* <img src={background} alt='background illustration' /> */}
              <Reactsvg />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

Section.propTypes = {
  tagLine: PropTypes.string.isRequired,
};

Section.defaultProps = {
  tagLine: "Make Your Memory Sweet...",
};

export default Section;
