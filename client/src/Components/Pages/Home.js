import React, { Component } from "react";
import Footer from "../Layout/Footer/Footer";
import Section from "../Layout/Section/Section";
import About from "../Layout/About/About";
import EnquiryForm from "../Layout/EnquiryForm/EnquiryForm";
import ServicesWeProvide from "../Layout/ServicesWeProvide/ServicesWeProvide";

class Home extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = { scrollTop: 0 };
  }

  onScroll = () => {
    const scrollTop = this.myRef.current.scrollTop;
    console.log(scrollTop);
    this.setState({
      scrollTop: scrollTop,
    });
  };

  render() {
    return (
      <div>
        <Section />
        <ServicesWeProvide />
        <EnquiryForm />
        <About />
        <Footer />
      </div>
    );
  }
}

export default Home;
