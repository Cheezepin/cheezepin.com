import React from 'react';
import AnimatedPage from "./AnimatedPage";
import Ononoki from '/src/components/Ononoki';
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";

import bgimgdark from '/src/components/Background/bg_lame_dark.png'

import ImageBlurbPair from '../components/ImageBlurbPair';

import website from '/src/components/TAGD/website.png'
import sms from '/src/components/TAGD/sms.png'
import tabling from '/src/components/TAGD/tabling.png'

import opast from '/src/components/TAGD/opast.png'
import prevsm from '/src/components/TAGD/prevsm.png'
import choir from '/src/components/TAGD/choir.png'
import hands from '/src/components/TAGD/hands.png'

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

const TAGDPR = () => {
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
          imgPath = {website}
          header = {"NEW WEBSITE"}
          blurb = {"\nOur current website is hosted on Wix, a free website builder with a watermark, and it also has outdated assets from years before we were even here. Not only will I migrate what we currently have to a custom domain, but I will add new features and widgets--like how I have it on this site!"}
        />
        <p><b>click on this widget here :)</b></p>
        <Ononoki/>
        <ImageBlurbPair
          imgSide = {"l"}
          imgPath = {sms}
          header = {"SHORT-FORM SOCIAL MEDIA CONTENT"}
          blurb = {"\nPlatforms like Instagram and TikTok are crucial for expanding a student organization's reach. Together, using the members of TAGD as actors and idea providers, I intend to post frequent videos to our social media pages to promote what we do."}
        />
        <ImageBlurbPair
          imgSide = {"l"}
          imgPath = {tabling}
          header = {"MORE TABLING & BANNERING"}
          blurb = {"\nCurrently, we only table in the MSC a few times a semester, excluding MSC Open House. Under my direction, we could not only promote ourselves at more times and at more locations than the MSC, but also allow members to join in at the tables and promote TAGD."}
        />
        <h1 style={{fontSize: "128px", textShadow:"gray 4px 4px 4px", lineHeight:"100px"}}>WHY I CAN DO IT</h1>
        <ImageBlurbPair
          imgSide = {"l"}
          imgPath = {opast}
          header = {"MSC OPAS OUTREACH"}
          blurb = {"I currently serve on the MSC OPAS Student Committee, promoting upcoming national tours coming to A&M. I advertise at the MSC, around the B/CS area, and even at special events (like Aggie basketball games!)"}
        />
        <ImageBlurbPair
          imgSide = {"l"}
          imgPath = {prevsm}
          header = {"PERSONAL SOCIAL MEDIA"}
          blurb = {"I've managed my own social media pages for over a decade to promote my projects, amassing over 2.5k subscribers on YouTube and over 600 followers on Twitter."}
        />
        <ImageBlurbPair
          imgSide = {"l"}
          imgPath = {choir}
          header = {"REDMOND CHOIR"}
          blurb = {"\nI ran my high school choir's Instagram page, creating custom graphics to promote our performances and even promotional videos to share to neighboring districts."}
        />
        <ImageBlurbPair
          imgSide = {"l"}
          imgPath = {hands}
          header = {"I LOVE OUTREACH!"}
          blurb = {"Like theatre and choir, game development is a creative medium with so much room for self-expression. Being able to promote the art of game dev to as many people as possible gives me a window to show people the great things they could make by joining TAGD."}
        />
        </div>
        </AnimatedPage>
    </>
  );
};

export default TAGDPR;