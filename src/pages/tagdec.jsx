import React from 'react';
import AnimatedPage from "./AnimatedPage";
import Ononoki from '/src/components/Ononoki';
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";

import bgimgdark from '/src/components/Background/bg_lame_dark.png'

import ImageBlurbPair from '../components/ImageBlurbPair';

import social from '/src/components/TAGD/social.png'
import profit from '/src/components/TAGD/profit.png'

import ps from '/src/components/TAGD/ps.png'
import fc from '/src/components/TAGD/fc.png'

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

const TAGDEC = () => {
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
          imgPath = {social}
          header = {"MORE FREQUENT SOCIALS"}
          blurb = {"I will host more events outside of our Halloween and end-of-semester socials, not just to give us more flexibility in timing and location (as we can expect to not have everyone show up due to the sheer number), but also so that they don't exclusively happen during midterms and finals!"}
        />
        <ImageBlurbPair
          imgSide = {"l"}
          imgPath = {profit}
          header = {"MORE FREQUENT PROFIT SHARES"}
          blurb = {"Under my direction, we will have more than one a semester. Profit shares are a great excuse to get together outside of a meeting context, as well as a great way to give back to our funds!"}
        />
        <h1 style={{fontSize: "128px", textShadow:"gray 4px 4px 4px", lineHeight:"100px"}}>WHY I CAN DO IT</h1>
        <ImageBlurbPair
          imgSide = {"l"}
          imgPath = {fc}
          header = {"FISH CAMP EVENTS"}
          blurb = {"I led tens of freshmen to both rock climbing and bowling socials, even well into the school year after camp interest had dwindled."}
        />
        <ImageBlurbPair
          imgSide = {"l"}
          imgPath = {ps}
          header = {"OPAS EVENTS"}
          blurb = {"I am an outreach manager at OPAS' socials and profits shares, taking member attendance and reconfiguring tables and seating arrangements to make sure everyone is able to participate."}
        />
        </div>
        </AnimatedPage>
    </>
  );
};

export default TAGDEC;