import React from 'react'
import "../css/Services.css"
import boxing from  "../../images/boxing.jpg"


const Services = () => {
    return (
        <div id="services">
            {/* <img src={boxing} alt=""/> */}
            <ul>
                <li>fitness</li>
                <li>body building</li>
                <li>weight loss</li>
                <li>personal trainer</li>
                <li>diet</li>
                <li>self-defence</li>
            </ul>
        </div>
    )
}

export default Services
