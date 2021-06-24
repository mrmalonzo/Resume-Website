import React, {Component} from 'react';

import NavBar from "../@common/NavBar";
import Footer from "../@common/Footer";

export default class CVPage extends Component{
    render(){
        return(
            <div className="cv">
                <NavBar />
                <Footer />
            </div>
        );
    }
}