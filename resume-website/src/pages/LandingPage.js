import React, {Component} from 'react';
import "../stylesheets/pages/LandingPage.css";

import NavBar from "../@common/NavBar";
import HeroBanner from "../@common/HeroBanner";
import About from "../@common/About";
import Footer from "../@common/Footer";

export default class LandingPage extends Component{


    render(){
        return(
            <div className="landing-page">
                <NavBar/>
                <HeroBanner/>
                <About />
                <Footer />
            </div>

        );
    }

}