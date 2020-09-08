import React, { Component } from "react";
import Footer from "../Layout/Footer/Footer";
import Section from "../Layout/Section/Section";
import About from "../Layout/About/About";
import EnquiryForm from "../Layout/EnquiryForm/EnquiryForm";

class Home extends Component {
  constructor(props) {
    super(props);
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
