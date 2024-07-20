import React  from "react";
import "./Ban.css";
import ban1 from "../../img/ban1.png";
import ban2 from "../../img/ban2.png";

const Ban = () =>{
    return(
        <>
        <div className="b-container">
            <div className="b-left">
                <div className="l-l">
                    <span>Sales 20% off all store</span>
                    <span> Iphone </span>
                    <span> 15 pro max 2023</span>
                    <button>Shope Now</button>
                </div>
                <img src={ban1} alt="" />
            </div>
            <div className="b-right">
                <img src={ban2} alt="" />
            </div>
        </div>
        </>
    )
}
export default Ban;