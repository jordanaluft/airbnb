import React from "react"
import image from "../images/airbnb-logo.png"

function Navbar(){
    return(
        <nav>
            <img src={image} className="nav--logo"/>
        </nav>
    )
}

export default Navbar