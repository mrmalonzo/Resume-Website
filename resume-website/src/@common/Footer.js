import React, {Component} from 'react';

import "../stylesheets/components/Footer.css";

import github from "../assets/images/github.png" 
import facebook from "../assets/images/facebook.png" 
import twitter from "../assets/images/twitter.png" 

export default class Footer extends Component{

    render(){
        return(
            <div className="footer">
                <div className="left-footer">
                    <h1>Contact Me</h1>
                    <div className="left-footer-content">
                        <div className="footer-contact-address">
                            <h2>37 Sitio Paroba Bngy. Carangian</h2>
                            <h2>2300 Tarlac City, Philippines</h2>
                        </div>
                        <div className="footer-contact-details">
                            <h2>mrmalonzo1@up.edu.ph</h2>
                            <h2>Globe +63 956-910-0953</h2>
                            <h2>Smart +63 908-746-3547</h2>
                        </div>
                    </div>
                </div>
                <div className="right-footer">
                    <h2>This website is fully designed and made by Mr. Malonzo. Made from ReactJs and powered by Firebase Hosting. Thanks to my love, Pamela Reyes for giving me the idea for this website.</h2>
                    <div className="footer-last">
                        <h2>© 2021 Malonzo Resume Website</h2>
                        <div className="footer-links">
                            <a className="a-github" href="https://github.com/mrmalonzo"><img src={github} alt="github" className="footer-logo"/></a>
                            <a className="a-facebook" href="https://www.facebook.com/mrmalonzo1/"><img src={facebook} alt="facebook" className="footer-logo"/></a>
                            <a className="a-twitter" href="https://twitter.com/mrmalonzo"><img src={twitter} alt="twitter" className="footer-logo"/></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}