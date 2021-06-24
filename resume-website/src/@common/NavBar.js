import React, {Component} from 'react';
import "../stylesheets/components/NavBar.css"

import {Link} from 'react-router-dom'; //for react router

export default class NavBar extends Component{



    render(){
        return(
            <div className="Navbar">
                <a className="website-name" href="https://facebook.com"><h1 className="mr">MR</h1><h1 className="malonzo">MALONZO</h1></a>
                <div className="navbar-buttons">
                    <h2 className="navbar-ref" ><Link to="/" className="navbar-button-text">HOME</Link></h2>
                    <h2 className="navbar-ref"><Link  to="/cvpage" className="navbar-button-text" >CV</Link></h2>
                    <h2 className="navbar-ref" ><Link  to="/contact" className="navbar-button-text">Contact</Link></h2>
                </div>
            </div>
        );
    }
}