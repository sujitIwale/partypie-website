import React, { Component } from "react";
import Footer from "../Layout/Footer/Footer";
import Section from "../Layout/Section";
import About from "../Layout/About/About";
import EnquiryForm from "../Layout/EnquiryForm/EnquiryForm";

class Home extends Component {
  

  render() {
    return (
      <div >
        <div>
          
          <Section />
          <EnquiryForm />
          <About />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
