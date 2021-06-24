import React, {Component} from 'react';

import NavBar from "../@common/NavBar";
import Footer from "../@common/Footer";

export default class Contact extends Component{

    render(){
        return(
            <div className="contact">
                <NavBar />
                <Footer />
            </div>
        );
    }
}