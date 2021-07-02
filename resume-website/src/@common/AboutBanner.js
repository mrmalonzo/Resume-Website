import React, {Component} from 'react';

import "../stylesheets/components/AboutBanner.css"

import js from "../assets/images/javascript.png" ;
import py from "../assets/images/python.png" ;
import c from "../assets/images/c.png" ;
import java from "../assets/images/java.png" ;

import uplb from "../assets/images/UPLB.png";
import tnhs from "../assets/images/tnhs.png";

import formal_resume from "../assets/docs/MalonzoMarlon_Resume.pdf";
import formal_grades from "../assets/docs/MALONZO_AllSems.pdf";
import formal_gwa from "../assets/docs/MALONZO_GWA.pdf";

// const resume = "https://drive.google.com/file/d/1ADADCAMMhyrxe18lmbqAq9cIbUGsOLTH/view?usp=sharing";

export default class AboutBanner extends Component{


    render(){
        return(
            <div className="about-banner">
                <div className="title">
                    <h1 className="title-cv">CV</h1>
                    <div className="rectangle-title"></div>
                </div>

                <div className="summary">
                    <h2 className="summary-title">Summary</h2>
                    <p className="summary-para">
                    I am a 4th Year Computer Science Student in the University of the Philippines Los Banos with a GWA of 1.610. I have been a Dean’s Lister since my 1st year in the university, and on track to graduate in the University in 2022 with Latin Honors.<br/><br/>
                    While working on academic and extra-curricular projects and exercises, I have been exposed to mutliple programming languages, developed proven critical thinking, communication, and problem-solving skills, which I hope to leverage into the Software Engineer role at your company.
                    </p>
                </div>
                <div className="button-div">
                        {/* <button onClick={event =>  window.location.href=resume} type="button" className="resume-button">Download Resume</button> */}
                        <a href={formal_resume} download className="resume-a"><h2 className="resume-h">Download Resume</h2></a>
                </div>

                <div className="programming-languages">
                    <div className="pl">
                        <div className="pl-rect"></div>
                        <h2 className="pl-title">Programming Languages</h2>
                        
                    </div>
                    <div className="pl-icons">
                        <div className="pl-section">
                            <img src={js} className="pl-icon" alt="pl" id="pl-js"/>
                            <h2 className="rank">Advanced</h2>
                            <h2 className="rating">8/10</h2>
                        </div>
                        <div className="pl-section">
                            <img src={py} className="pl-icon" alt="pl"/>
                            <h2 className="rank">Advanced</h2>
                            <h2 className="rating">8.5/10</h2>
                        </div>
                        <div className="pl-section">
                            <img src={c} className="pl-icon" alt="pl"/>
                            <h2 className="rank">Advanced</h2>
                            <h2 className="rating">8.5/10</h2>
                        </div>
                        <div className="pl-section">
                            <img src={java} className="pl-icon" alt="pl"/>
                            <h2 className="rank">Intermediate</h2>
                            <h2 className="rating">6/10</h2>
                        </div>
                                           
                    </div>
                </div>

                <div className="skills">
                    <div className="skill-label">
                        <div className="skill-rect"></div>
                        <h2 className="skill-title">Skills</h2>
                    </div>
                    <div className="skills-list">
                        <div className="skill-all" id="skill-1">
                            <h2 className="skills-1">Web Development</h2>
                            <h2 className="skills-1">Software Engineering</h2>
                        </div>
                        <div className="skill-all" id="skill-2">
                            <h2 className="skills-2">Leadership</h2>
                            <h2 className="skills-2">Communication</h2>
                        </div>
                        <div className="skill-all" id="skill-3">
                            <h2 className="skills-3">Excellence</h2>           
                        </div>

                    </div>

                </div>

                <div className="education">
                    <div className="education-label">
                        <div className="education-rect"></div>
                        <h2 className="education-title">Education</h2>
                    </div>
                    <div className="education-icons">
                        <div className="education-section">
                            <img src={uplb} className="educ-icon" alt="educ"/>
                            <h2 className="ay-role">2018-2022</h2>
                            <h2 className="ay-role">Computer Science</h2>
                            <h2 className="grade">GWA: 1.610</h2>
                        </div>
                        <div className="education-section">
                            <img src={tnhs} className="educ-icon" alt="educ" id="tnhs"/>
                            <h2 className="ay-role">2012-2018</h2>
                            <h2 className="ay-role">SSC - STEM</h2>
                            <h2 className="grade">High Honors</h2>
                        </div>
                    </div>
                </div>

                <div className="certificates">
                    <h1 className="certificate-title">Certificates</h1>
                    <div className="certificate-sections">
                        <div className="certificate-div">
                            <h2 className="section-title">True Copy of Grades</h2>
                            <a href={formal_grades} download className="copy-a"><h2 className="copy-h">Download</h2></a>
                        </div>
                        <div className="certificate-div">
                            <h2 className="section-title">Certificate of GWA</h2>
                            <a href={formal_gwa} download className="copy-a"><h2 className="copy-h">Download</h2></a>
                        </div>


                    </div>
                    
                </div>

            </div>
        );
    }
        
}