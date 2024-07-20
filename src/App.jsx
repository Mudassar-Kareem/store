import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Trend from "./components/trend/Trend";
import Ban from "./components/ban/Ban";
import New from "./components/new/New";
import Footer from "./components/footer/Footer";
const App = () =>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <Services/>
        <Trend/>
        <Ban/>
        <New/>
        <Footer/>
        </>
    )
}
export default App;