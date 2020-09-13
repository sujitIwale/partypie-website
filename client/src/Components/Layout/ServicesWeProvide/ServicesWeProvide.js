import React from "react";
import PropTypes from "prop-types";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import "./Services.css";

const ServicesWeProvide = ({ service1, service2, service3 }) => {
  return (
    <div
      className='pa5-ns pt5 mt5 ma5-ns br4'
      style={{ backgroundColor: "whitesmoke" }}
    >
      <div>
        <h1
          className='ttc tc f1 f1-ns b pa1 ma1'
          style={{ fontFamily: "Dancing Script" }}
        >
          <strong>Services we Provide.</strong>
        </h1>
      </div>
      <div
        className='flex flex-row flex-wrap'
        style={{ fontFamily: "Dancing Script" }}
      >
        <article className='br3 ba dark-gray b--black-10 mv4 w-80 w-50-m w-25-l center'>
          <h1 className='f2 f2-ns mv0 pa4 tc i'>{service1}</h1>
          <div className='content_img'>
            <img src={pic1} className='db image br3' alt='#' />
            <div className='pa2 ph3-ns pb3-ns'>
              <p className='f4 black' style={{ fontFamily: "Dancing Script" }}>
                If it fits, i sits burrow under covers. Destroy couch leave hair
                everywhere, and touch water with paw then recoil in horror.
              </p>
            </div>
          </div>
        </article>
        <article className='br3 ba dark-gray b--black-10 mv4 w-80 w-50-m w-25-l center'>
          <h1 className='f2 f2-ns mv0 pt2 pr4 pl4 pb tc i'>{service2}</h1>
          <div className='content_img'>
            <img src={pic2} className='db image br3' alt='#' />
            <div className='pa2 ph3-ns pb3-ns'>
              <p className='f4 black' style={{ fontFamily: "Dancing Script" }}>
                If it fits, i sits burrow under covers. Destroy couch leave hair
                everywhere, and touch water with paw then recoil in horror.
              </p>
            </div>
          </div>
        </article>
        <article className='br3 ba dark-gray b--black-10 mv4 w-80 w-50-m w-25-l center'>
          <h1 className='f2 f2-ns mv0 pa4 tc i'>{service3}</h1>
          <div className='content_img'>
            <img src={pic3} className='db image br3' alt='#' />
            <div className='pa2 ph3-ns pb3-ns'>
              <p className='f4 black' style={{ fontFamily: "Dancing Script" }}>
                If it fits, i sits burrow under covers. Destroy couch leave hair
                everywhere, and touch water with paw then recoil in horror.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
ServicesWeProvide.propTypes = {
  service1: PropTypes.string.isRequired,
  service2: PropTypes.string.isRequired,
  service3: PropTypes.string.isRequired,
};

ServicesWeProvide.defaultProps = {
  service1: "Venue Setup",
  service2: "Special Arrangement",
  service3: "Chef At Home",
};

export default ServicesWeProvide;
