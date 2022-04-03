import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare} from "react-icons/fa"
import "../css/Footer.css"


const Footer = () => {
    return (
        <footer>
            
            <div className="details">
                <div className="desc">
                    contact us today for more info on pricing and availability
                </div>
                <div className="contact">
                    <span>123 basic street NY</span>
                    <span>+87 34 3455 357</span>
                    <span>someone@gmail.com</span>
                </div>
               
            </div>
            <div className="icon-container">
                <FaFacebookSquare className="icon"/>
                <FaTwitterSquare className="icon"/>
                <FaInstagramSquare className="icon"/>
                <FaYoutubeSquare className="icon"/>
            </div>
            <div className="copyright">
                <h2>
                    GymGenie
                </h2>
                <h5>
                    copyright &copy; gymgenie ltd
                </h5>
            </div>
        </footer>
    )
}

export default Footer
