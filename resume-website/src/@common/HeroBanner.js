import React, {Component} from 'react';
import "../stylesheets/components/HeroBanner.css";

import image1 from "../assets/images/marlon.png"
import image2 from "../assets/images/marlon-outline.png"

export default class HeroBanner extends Component{

        render(){
            return(
                <div className="herobanner">
                    <div className="herobanner-text">
                        <h1 id="herobanner-name">MARLON MALONZO</h1>
                        <h2 id="herobanner-title">Software Engineer</h2>
                        <h2 id="herobanner-quote">Developing Software to make a  <br/> difference in the world...</h2>
                    </div>
                    <div className="herobanner-image">
                        <img src={image1} alt="marlon" id="marlon-photo"/>
                        <img src={image2} alt="marlon-outline" id="marlon-outline"/>
                    </div>
                </div>
            );
        }
}