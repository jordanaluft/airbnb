import React from "react";
import image from "../images/images.png"

function Hero() {
    return (
        <section className="hero">
            <img src={image} className="hero--foto"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--body">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero