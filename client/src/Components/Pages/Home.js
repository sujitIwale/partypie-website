import React, { Component } from "react";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Navbar from "../Layout/Navbar/Navbar";
import Section from "../Layout/Section";
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
    this.setState({
      scrollTop: scrollTop,
    });
  };

  render() {
    return (
      <div
        ref={this.myRef}
        onScroll={this.onScroll}
        style={{
          height: "48rem",
          overflow: "scroll",
        }}
      >
        <div>
          {this.state.scrollTop > 1 ? <Header /> : <Navbar />}
          <Section />
          <About />
          <EnquiryForm />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
