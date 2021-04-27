import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';

const Navbar=()=>{
    return(
        <div id="Nav_main">
            <div id="fl_left"><li>Medicab</li></div>
            <label for="toggle">&#9776;</label>
            <input type="checkbox" id="toggle"/>
            <div id="fl_center">
                
                <li><a>Home</a></li>
                <li>
                    <a>Shop</a>
                    <ul id="Nav_dropdown">
                        <li>Pharmacy</li>
                        <li>Equipment</li>
                        <li>Diagnostic sets</li>
                    </ul>           
                </li>                
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/contactus">Contact Us</a></li>
            </div>
            <div id="fl_right">
                <li><a href="/Login">Login/SignUp</a></li>
            </div>
        </div>
    );
}

export default Navbar;