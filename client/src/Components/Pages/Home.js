import React,{Component} from "react";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Navbar from "../Layout/Navbar/Navbar";
// import Navbar from "../Layout/Navbar";
import Section from "../Layout/Section";

class Home extends Component  {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {scrollTop: 0}
  }
  
  onScroll = () => {
    const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
    const scrollTop = this.myRef.current.scrollTop
    console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
    this.setState({
      scrollTop: scrollTop
    })
  }

  render(){
    const {
      scrollTop
    } = this.state
  return (
    <div ref={this.myRef}
    onScroll={this.onScroll}
    style={{
      border: '1px solid black',
      height: '1000px', 
      overflow: 'scroll',
    }}
   >
      <div>
      {
        this.state.scrollTop > 1 ?  <Header /> : <Navbar />
      }
        <Section />
        <Footer />
      </div>
    </div>
  );
};
}

export default Home;




 

