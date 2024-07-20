import React from "react";
import "./Navbar.css";
import {BsSearch} from "react-icons/bs";
import {RiAccountCircleFill} from "react-icons/ri";
import {BsCart4} from "react-icons/bs";

const Navbar = () =>{
    return(
        <>
        <div className="container">
                <h1>MK</h1>
            <div className="input">
                <input type="text" placeholder="Search Items here" />
                <div className="im"><BsSearch/></div>
                
            </div>
            
            <div className="acc">
                <div className="sign">
               <div className="account"><RiAccountCircleFill/></div> 
                <div className="sp">
                <span>Hello,Sign in</span>
                <span> Your Account</span>
                </div>
               
                </div>
                <div className="cart"><BsCart4/></div>

            </div>
        </div>
        
        </>
    )
}
export default Navbar;

