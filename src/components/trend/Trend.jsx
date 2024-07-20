import React, { useState } from "react";
import "./Trend.css";
import {BsCartDash} from "react-icons/bs";
import head1 from "../../img/headphone-1.png";
import head2 from "../../img/headphone-2.png";
import head3 from "../../img/headphone-3.png";
import mobile1 from "../../img/mobile-1.png";
import mobile2 from "../../img/mobile-2.png";
import ipad1 from "../../img/ipad-1.png";
import cpu1 from "../../img/cpu-1.png";
import cpu2 from "../../img/cpu-2.png";

const Trend = () =>{
    const [products] = useState([
        {
            img: head1,
             nam: "Headphones",
             details: "Gaming Headphone",
             price:"$109.00",   
      },
     {
         img: head2,
         nam: "Headphones",
         details: "Gaming Headphone",
         price:"$109.00",    
     },
     {
         img: head3,
         nam: "Headphones",
         details: "Gaming Headphone",
         price:"$109.00",    
     },
     {
         img: mobile1,
         nam: "Mobile Phone",
         details: "Mobile",
         price:"$1090.00",    
     },
     {
         img: mobile2,
         nam: "Mobile Phone",
         details: "Apple Iphone",
         price:"$1900.00",    
     },
     {
         img: ipad1,
         nam: "Mobile Phone",
         details: "Mobile",
         price:"$1090.00",    
     },
     {
         img: cpu1,
         nam: "CPU",
         details: "CPU",
         price:"$109.00",    
     },
     {
         img: cpu2,
         nam: "CPU",
         details: "CPU",
         price:"$109.00",    
     },
    ])
    const Alert = () =>{
        alert("Added to Cart");
    };
    return(
        <>
        <div className="t-container">
            <h1> Tranding Products</h1>
            <div className="s">
                <span> New</span>
                <span> Features</span>
                <span> Top Seller</span>
            </div>
        </div>
        <div className="cards">
            {products.map((product, i) =>{
                return(
                    <div className="card" key={i}>
                    <img src={product.img} alt="" />
                    <span> {product.nam} </span>
                    <span> {product.details} </span>
                    <div className="b">
                    <span> {product.price}  </span>
                    <button onClick={Alert}> <BsCartDash/> Add to Cart </button>
                    </div>
                    
                </div>

                )
           
            })}
        </div>
        </>
    )
}
export default Trend;