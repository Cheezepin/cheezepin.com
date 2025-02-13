import React from 'react';
import AnimatedPage from "./AnimatedPage";
import Ononoki from '/src/components/Ononoki';
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";

import resumePDF from '/assets/Lev_Jason_Resume.pdf'

const ResumeGlobalStyle = createGlobalStyle`
  body {
    background-image: none;
    background: rgb(30,30,30);
    margin = 0;
    padding = 0;
    overflow-x:clip;
    width:100%;
  }`

const Header = styled.h1`
    color: white;
`;

const Resume = () => {
  return (
    <>
        <ResumeGlobalStyle/>
        <div style={{
            justifyContent: 'centre',
            alignItems: 'centre',
            fontSize:"30px",
        }}
        >

        <Header>Jason Lev</Header>
        <a href={resumePDF}><p>Download Resume</p></a>
        <embed src={resumePDF} width="70%" height="800vh" 
        type="application/pdf"></embed>
        </div>
    </>
  );
};

export default Resume;