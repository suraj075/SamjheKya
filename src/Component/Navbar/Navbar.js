import React from "react";
import './Navbar.css';
import logo from '../Assets/logo.png';

function Navbar(){
    return(
           <div className="Navbar">
                <div className="nav-logo">
                    <img src={logo} alt=""/>
                    
                </div>
                <ul className="nav-menu">
                    <li>Home</li>
                    <li>About Us</li>
                   
                    <li>Test</li>
                </ul>
                <div className="login">
                    <button><span>Login</span></button>
                </div>
           </div>
    )
}

export default Navbar;