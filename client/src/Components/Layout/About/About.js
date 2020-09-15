import React from "react";
import pic1 from "./1.png";
import pic2 from "./2.png";
import pic3 from "./3.png";
import pic4 from "./4.png";
// import bck from "./background.jpg";
import "./About.css";

const About = () => {
  return (
    <div>
      {" "}
      <h2 className='pa3 ma3 f1 tc'>How It Works..</h2>
      <div className='center container '>
        <div className='image center'>
          <img src={pic1} alt='' className='ma2-ns ma1 img' />
          <h2 className='tc pa2'>
            Book
            <br />
            Appointment
          </h2>
        </div>
        <div className='image center'>
          <img src={pic2} alt='' className='ma2-ns ma1 img' />
          <h2 className='tc pa2'>
            Fix
            <br />
            Meeting
          </h2>
        </div>
        <div className='image center'>
          <img src={pic3} alt='' className='ma2-ns ma1 img' />
          <h2 className='tc pa2'>
            Accept
            <br />
            Deal
          </h2>
        </div>
        <div className='image center'>
          <img src={pic4} alt='' className='ma2-ns ma1 img' />
          <h2 className='tc pa2'>
            Sit Back
            <br />
            And Enjoy.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
