import React, {Component} from 'react';
import "../stylesheets/pages/LandingPage.css";

import NavBar from "../@common/NavBar";

export default class LandingPage extends Component{


    render(){
        return(
            <div className="landing-page">
                <NavBar/>


            </div>

        );
    }

}