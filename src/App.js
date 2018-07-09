import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import './style.css';

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Signin} />
      <Route path="/auth/sign-up" component={Signup} />
	  //<Route path="/auth/sign-up" component={Signin} /> I also tried this as workaround, but that didn't work sadly.
      
    </div>
  </Router>
);



export default BasicExample;