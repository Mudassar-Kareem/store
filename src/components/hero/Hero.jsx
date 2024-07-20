import React from "react";
import "./Hero.css";
import hero from "../../img/hero.png";

const Hero = () =>{
    return(
        <>
        <div className="h-container">
            <div className="h-left">
            <span> Starting at  <span style={{fontWeight: 'bold'}}>$999.00</span> </span>
            <span> The best note book</span>
            <span> collection 2023</span>
            <span> Exclusive offer -10% off this week</span>
            <button> Shop Now</button>
                
            </div>
            <div className="h-right">
                <img src={hero} alt="" />
            </div>
        </div>
        </>
    )}
export default Hero;