import '../stylesheets/pages/App.css';
import LandingPage from "../pages/LandingPage";

import React, {Component} from 'react';

import {Switch, Route} from "react-router-dom"; // to use multiple pages. Put the BrowserRouter in the index.js

import CVPage from '../pages/CVPage';
import Contact from '../pages/Contact';

export default class App extends Component{



  render(){ //used switch and Route to route the page and put it in the specified path
    return (
      <div className="App">
        <Switch> 
        <Route exact path="/"><LandingPage /></Route>
        <Route exact path="/cvpage"><CVPage/></Route>
        <Route exact path="/contact"><Contact/></Route>
        </Switch>
      
      </div>
    );
  }
 
}

