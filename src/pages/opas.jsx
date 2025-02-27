import React from 'react';
import AnimatedPage from "./AnimatedPage";
import Ononoki from '/src/components/Ononoki';
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";

import bgimgdark from '/src/components/Background/bg_lame_dark.png'

// import opasLogo from "/assets/a.gif"

const ResumeGlobalStyle = createGlobalStyle`
  body {
    background: rgb(30,30,30);
    background-image: url(${bgimgdark});
    margin = 0;
    padding = 0;
    overflow-x:clip;
    width:100%;
  }`

const Header = styled.h1`
    color: white;
    font-size: 10vw;
`;

const OPAS = () => {
  return (
    <>
        <ResumeGlobalStyle/>
        <div style={{
            justifyContent: 'centre',
            alignItems: 'centre',
            lineHeight: "3vw",
            fontSize:"30px",
        }}
        >

        <img style={{width: "80vw", marginBottom: "-5vw", marginTop: "-5vw"}} src="/assets/b.gif"></img>
        <br></br>
        <img style={{width: "80vw", marginBottom: "-5vw", marginTop: "-5vw"}} src="/assets/c.gif"></img>
        <br></br>
        <img style={{width: "100vw"}} src="/assets/s.png"></img>


        <h1 style={{color:"white", lineHeight:"15vw"}}>hi thanks for checking out my exec app :)</h1>
        </div>
    </>
  );
};

export default OPAS;