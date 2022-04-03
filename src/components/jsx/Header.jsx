import React, {useState} from 'react'
import "../css/Header.css"
import { NavLink } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"

const Header = () => {
    const [open, setOpen] = useState(false)

   
    return (
        <header>
            <h1>GymGenie</h1>
            <FaBars className="bars" onClick={() => setOpen(!open)}/>
            <nav className={open ? "open" : "closed"}>
                <FaTimes className="times" onClick={() => setOpen(!open)}/>
                <ul>
                    <NavLink className="navlink" exact to="/" onClick={() => setOpen(!open)}><li>Home</li></NavLink>
                    <NavLink className="navlink" exact to="/about" onClick={() => setOpen(!open)}><li>About</li></NavLink>
                    <NavLink className="navlink" exact to="/services" onClick={() => setOpen(!open)}><li>Services</li></NavLink>
                </ul>
            </nav>
           
        </header>
    )
}

export default Header
