import React, { useState } from "react";
import "./New.css";
import {BsCartDash} from "react-icons/bs";
import head1 from "../../img/headphone-1.png";
import mobile from "../../img/mobile-1.png";
import iphone from "../../img/mobile-2.png";
import cpu from "../../img/cpu-2.png";
const New = () =>{
    const [products] = useState([
        {
            img: head1,
             nam: "Headphones",
             details: "Gaming Headphone",
             price:"$109.00",   
      },
     {
         img: mobile,
         nam: "Mobile Phone",
         details: "Mobile",
         price:"$1090.00",    
     },
     {
         img: iphone,
         nam: "Mobile Phone",
         details: "iphone",
         price:"$1900.00",    
     },
     {
         img: cpu,
         nam: "CPU",
         details: "CPU",
         price:"$1000.00",    
     },
    ])
    return(
        <>
        <div className="n-container">
            <h2>New Arrivals</h2>
            <div className="n-cards">
                {products.map((product,i) =>{
                  return(
                    <div className="n-card" key={i}>
                    <img src={product.img} alt="" />
                    <span> {product.nam} </span>
                    <span> {product.details} </span>
                    <div className="price">
                        <span> {product.price} </span>
                        <button> <BsCartDash/>   Shop Now</button>
                    </div>
                </div>
                  )
                })}
            </div>
        </div>
        
        </>
    )
}
export default New;