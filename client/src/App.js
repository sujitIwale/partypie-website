import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Home from "./Components/Pages/Home";

const App = () => {
  return (
    <Router>
      <div className='ma0 pa0' >
        <Fragment>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Fragment>
      </div>
    </Router>
  );
};

export default App;
