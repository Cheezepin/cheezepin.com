import React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
} from "./navbarElements";

import {
    useLocation
} from "react-router-dom";

import siteLogo from '/src/assets/header/logo.png'
import '/src/PageHeader.css'

import Background from '/src/components/Background'

const noNavbar = [
    "resume",
    "portfolio",
    "opas",
    "tagd",
    "recipes",
];

const hasNavbar = () => {
    let hasNavbar = true;
    noNavbar.forEach(element => {
        if(window.location.href.includes(element) || document.URL.includes(element)) {
            console.log(element);
            hasNavbar = false;
            return;
        }
    });
    return hasNavbar;
}

const Navbar = () => {
    if(!hasNavbar()) {return <></>;}
    console.log(hasNavbar());
    return (
        <>
            <img src={siteLogo} class="centerHeader"></img>
            <Background/>
            <Nav>
                <NavMenu>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                    <NavLink to="/projects" >
                        Projects
                    </NavLink>
                    <NavLink to="/contact" >
                        Contact
                    </NavLink>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;