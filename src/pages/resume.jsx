import React from 'react';
import AnimatedPage from "./AnimatedPage";
import Ononoki from '/src/components/Ononoki';
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";

import bgimgdark from '/src/components/Background/bg_lame_dark.png'

import resumePDF from '/assets/Lev_Jason_Resume.pdf'

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

const Resume = () => {
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

        <Header>Jason Lev</Header>
        <h1 style={{color:"white", fontSize:"4vw"}}>Links: <a href="/portfolio">Portfolio</a>, <a href="https://www.linkedin.com/in/jason-lev/">Linkedin</a>, <a href="https://www.github.com/Cheezepin">GitHub</a>, <a href="https://cheezepin.itch.io/">itch.io</a></h1>
        <a href={resumePDF}><p>Download Resume</p></a>
        <embed src={resumePDF} width="70%" height="800vh" 
        type="application/pdf"></embed>
        </div>
    </>
  );
};

export default Resume;