import React from "react";
import "./Footer.css";
import {AiOutlineCopyrightCircle} from "react-icons/ai";

const Footer = () =>{
    return(
        <>
        <div className="f-container">
        <span style={{gap:"0.5rem", alignItems:"center"}}><AiOutlineCopyrightCircle/> Copyright| All Right Reserved</span><span> Mudassar Kareem</span>
        </div>
        </>
    )
}
export default Footer;