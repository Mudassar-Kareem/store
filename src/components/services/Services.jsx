import React from "react";
import "./Services.css";
import {TbTruckDelivery} from "react-icons/tb";
import {RiExchangeDollarLine} from "react-icons/ri";
import {CiDiscount1} from "react-icons/ci";
import {FcOnlineSupport} from "react-icons/fc";

const Services = () =>{
    return(
        <>
        <div className="s-container">
            <div className="s-card">
                <div className="lo"><TbTruckDelivery/></div>
                <div className="text">
                    <span> Free Delivery</span>
                    <span> Orders from all items</span>
                </div>
            </div>

            <div className="s-card">
                <div className="lo"><RiExchangeDollarLine/></div>
                <div className="text">
                    <span> Return & Refund</span>
                    <span> Money back guarantee</span>
                </div>
            </div>

            <div className="s-card">
                <div className="lo"><CiDiscount1/></div>
                <div className="text">
                    <span> Member Discount</span>
                    <span> On order over $99.00</span>
                </div>
            </div>

            <div className="s-card">
                <div className="lo"><FcOnlineSupport/></div>
                <div className="text">
                    <span> Support 24/7</span>
                    <span> Contact us 24 hours a day</span>
                </div>
            </div>
        </div>
        </>
    )
}
export default Services;