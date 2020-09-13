import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Layout/Header/Header";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Auth from "./Components/Pages/Admin/Auth";
import Home from "./Components/Pages/Home";
import AdminState from "./context/Admin/AdminState";
import EnquiryState from "./context/Enquiry/EnquiryState";
import AdminPage from "./Components/Pages/Admin/AdminPage/AdminPage";

const App = () => {
  const myRef = React.createRef();
  const [state, setState] = useState({ scrollTop: 0 });

  const onScroll = () => {
    const scrollTop = myRef.current.scrollTop;
    setState({
      scrollTop: scrollTop,
    });
  };

  return (
    <AdminState>
      <EnquiryState>
        <Router>
          <div
            ref={myRef}
            onScroll={onScroll}
            className='height'
            style={{
              height: "46rem",
              overflow: "scroll",
            }}
          >
            {state.scrollTop > 1 ? <Header /> : <Navbar />}
            <div style={{ marginTop: "56px" }}></div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/admin' component={Auth} />
              <Route exact path='/admin/page' component={AdminPage} />
            </Switch>
          </div>
        </Router>
      </EnquiryState>
    </AdminState>
  );
};

export default App;
