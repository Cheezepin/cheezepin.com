import React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
} from "./navbarElements";

import {
    useLocation
} from "react-router-dom";

import tagdLogo from '/src/components/TAGD/votewith.png'
import tagdLogoBase from '/src/components/TAGD/votewith_base.png'
import tagdLogoSpin from '/src/components/TAGD/votewith_spin.png'
import '/src/PageHeader.css'

import Background from '/src/components/Background'

const NavbarTAGD = () => {
    if(!(window.location.href.includes("tagd") || document.URL.includes("tagd"))) {return <></>;}
    return (
        <>
            <div style={{overflow:"hidden", width:"100%"}}>
            <img src={tagdLogoBase} class="tagdLogoBase"></img>
                <div>
                <img src={tagdLogoSpin} style={{overflow:"hidden"}} class="tagdLogoSpin"></img>
                </div>
            </div>
            <Background/>
            <Nav>
                <NavMenu>
                    <NavLink to="/tagdpr" >
                        Public Relations
                    </NavLink>
                    <NavLink to="/tagdop" >
                        Operations
                    </NavLink>
                    <NavLink to="/tagdec" >
                        Event Coordinator
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default NavbarTAGD;