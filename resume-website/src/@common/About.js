import React, {Component} from 'react';

import "../stylesheets/components/About.css"

import logo1 from "../assets/images/ics.png"
import logo2 from "../assets/images/UPLB.png"

export default class About extends Component{

    render(){
        return(
            <div className="about">
                <div className="about-square-top">
                </div>
                <div className="about-text">
                    <div className="about-title-logo">
                        <h2 className="about-title">ABOUT ME</h2>
                        <div className="about-logo">
                            <img src={logo1} alt="ics" className="ics-logo"/>
                            <img src={logo2} alt="uplb" className="uplb-logo"/>
                        </div>
                    </div>
                    <p className="about-p"> My name is Marlon Malonzo, a 3rd year Computer Science Student at the University of the Philippines Los Baños. I am an enthusiastic, cheerful and persistent software developer that has been trained in multiple programming languages. I am efficient both when working alone or working with a team, having good communication and leadership skills, and experienced in doing time constrained projects that requires commitment and excellence from me.<br/> <br/>After reviewing this website, I hope you will agree that I am the type of competent and competitive candidate for the developer that you are looking for. I look forward to learning and growing together with this company, as a capable Software Engineer. Please contact me through email or contact number to arrange for a convenient meeting time.</p>
                </div>
                <div className="about-square-bottom">
                </div>
            </div>
        );
    }
}