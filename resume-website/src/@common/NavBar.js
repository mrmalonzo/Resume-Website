import React, {Component} from 'react';
import "../stylesheets/components/NavBar.css"

export default class NavBar extends Component{



    render(){
        return(
            <div className="Navbar">
                <a className="website-name" href="https://facebook.com"><h1 className="mr">MR</h1><h1 className="malonzo">MALONZO</h1></a>
                <div className="navbar-buttons">
                    <a className="navbar-ref"  href="https://facebook.com"><h1 className="navbar-button-text">HOME</h1></a>
                    <a className="navbar-ref"  href="https://facebook.com"><h1 className="navbar-button-text">CV</h1></a>
                    <a className="navbar-ref"  href="https://facebook.com"><h1 className="navbar-button-text">Contact</h1></a>
                </div>
            </div>
        );
    }
}