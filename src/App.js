import React from "react";
import {Route, Switch} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import './style.css';

/**
 *In order for the SPA to work correctly the routes need to be wrapped 
 in Switch component .
 */

const BasicExample = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Signin}/>
			<Route path="/auth/sign-in" component={Signin}/>

            <Route path="/auth/sign-up" component={Signup}/>
        </Switch>
    </div>

);

export default BasicExample;