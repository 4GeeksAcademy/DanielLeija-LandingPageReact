import React from "react";
import { Navbar } from "../Navbar/Navbar.jsx"
import Home from "../../Views/Home/Home.jsx" 
import { Footer } from "../Footer/Footer.jsx"


function Layout() {
    return (
        <>
            <Navbar />
            <div className="container">
               <Home />
            </div> 
            <Footer/>
        </> 
        
    )
}

export default Layout