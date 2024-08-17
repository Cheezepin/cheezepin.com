import React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
} from "./navbarElements";

import {
    useLocation
} from "react-router-dom";

const Navbar = () => {
    return (
        <>
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