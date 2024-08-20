import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: rgba(0, 0, 0, 0.375);
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    height: fit-content;
    border: 4px solid rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    // padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;

    @media screen and (max-width: 768px) {
        width: 95%;
    }
`;

export const NavLink = styled(Link)`
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    // padding: 0 1rem;
    width:200px;
    height: 100%;
    cursor: pointer;
    background: none;
    &:hover {
        background: rgba(0, 0, 0, 0.25); !important
        color:red; !important
    }
    &.active {
        background: rgba(0, 0, 0, 0.5); !important
        color:green; !important
    }
    font-family: 'Acme';
    font-size: 36pt;
    z-index: 12;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    width:auto;
    color:green;
   z-index: 12;

   @media screen and (max-width: 768px) {
        display:block;
        width:100%;
    }
`;