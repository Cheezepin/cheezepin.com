import React from 'react';
import AnimatedPage from "./AnimatedPage";
import Ononoki from '/src/components/Ononoki';
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";

import bgimgdark from '/src/components/Background/bg_lame_dark.png'

import ImageBlurbPair from '../components/ImageBlurbPair';

import pitch from '/src/components/TAGD/pitch.png'

import dc from '/src/components/TAGD/dc.png'
import tufu from '/src/components/TAGD/tufu.png'
import calendar from '/src/components/TAGD/calendar.png'

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

const TAGDOP = () => {
  return (
    <>
        {/* <ResumeGlobalStyle/> */}
        <AnimatedPage>
        <div style={{
            justifyContent: 'centre',
            alignItems: 'centre',
            lineHeight: "3vw",
            fontSize:"30px",
        }}
        >

        <h1 style={{fontSize: "128px", textShadow:"gray 4px 4px 4px", lineHeight:"100px"}}>WHAT I'LL DO</h1>
        <ImageBlurbPair
          imgSide = {"l"}
          imgPath = {pitch}
          header = {"MEMBER-SUBMITTED CONTENT PRESERVATION"}
          blurb = {"Currently, there's no way to look back at what our members' games looked like during development other than what's posted on our social media. As an opt-in program for participants, I will preserve pitch, sprint, and summer and winter break recap presentations alongside our normal TAGD slides."}
        />
        <h1 style={{fontSize: "128px", textShadow:"gray 4px 4px 4px", lineHeight:"100px"}}>WHY I CAN DO IT</h1>
        <ImageBlurbPair
          imgSide = {"l"}
          imgPath = {dc}
          header = {"PROJECT MANAGEMENT EXPERIENCE"}
          blurb = {"Aside from leading my TAGD Game Jam team for three semesters, I've been the head of online projects, such as Dog Collab, a game featuring over ten participants all submitting their own levels!"}
        />
        <ImageBlurbPair
          imgSide = {"l"}
          imgPath = {tufu}
          header = {"TUFU DATA ANALYSIS"}
          blurb = {"I collect and analyze data for TAMU Urban Farm United, taking in demographic and interest information from volunteers to help our social media team effectively target interest groups."}
        />
        <ImageBlurbPair
          imgSide = {"l"}
          imgPath = {calendar}
          header = {"..."}
          blurb = {"This is on the lighter end of my calendar weeks. I know how to handle a lot of different things flying at me all at once."}
        />
        </div>
        </AnimatedPage>
    </>
  );
};

export default TAGDOP;