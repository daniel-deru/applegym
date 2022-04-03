import React from 'react'
import cycle from "../../images/cycle.jpg"
import "../css/About.css"

const About = () => {
    return (
        <div id="about">
            <img src={cycle} alt=""/>
            <p>
                Here at GymGenie we believe with the right motivation you can push yourself to be the best version of yourself that you can be. Our goal is to motivate you to pursue your dream body with an internal drive. That means you won't just quit be see this journey through to the end.
            </p>
        </div>
    )
}

export default About
