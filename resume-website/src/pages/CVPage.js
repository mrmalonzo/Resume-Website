import React, {Component} from 'react';

import NavBar from "../@common/NavBar";
import Footer from "../@common/Footer";

import AboutBanner from "../@common/AboutBanner";

export default class CVPage extends Component{
    render(){
        return(
            <div className="cv">
                <NavBar />
                <AboutBanner />
                <Footer />
            </div>
        );
    }
}