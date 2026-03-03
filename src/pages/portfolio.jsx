import React, {useState} from 'react';
import AnimatedPage from './AnimatedPage';
import ProjectButton from '../components/ProjectButton';
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";

import {
    Routes,
    Route,
    useLocation,
    Link,
    Outlet,
  } from "react-router-dom";
  
  import { AnimatePresence } from 'framer-motion';

  import OvYctf from '../components/portfolio_overlays/OvYctf';
  import OvDc from '../components/portfolio_overlays/OvDc';
  import OvRm from '../components/portfolio_overlays/OvRm';
  import OvGs from '../components/portfolio_overlays/OvGs';
  import OvHth from '../components/portfolio_overlays/OvHth';
  import OvDr from '../components/portfolio_overlays/OvDr';
  import OvJm from '../components/portfolio_overlays/OvJm';
  import OvBk from '../components/portfolio_overlays/OvBk';
  import OvCm from '../components/portfolio_overlays/OvCm';
  import OvCh from '../components/portfolio_overlays/OvCh';
  import OvPm from '../components/portfolio_overlays/OvPm';
  import OvHaw from '../components/portfolio_overlays/OvHaw';
  
  import "../components/portfolio_overlays/overlays.css"

  import bgimgdark from '/src/components/Background/bg_lame_dark.png'

const PortfolioGlobalStyle = createGlobalStyle`
  body {
    background: rgb(30,30,30);
    background-image: url(${bgimgdark});
    margin = 0;
    padding = 0;
    overflow-x:clip;
    width:100%;
  }`

const Portfolio = () => {
    const [activeOverlay, setOverlay] = useState("empy");
  return (
    <>
    <PortfolioGlobalStyle/>
    <div style={{lineHeight: "2vw"}}>
    <h1 style={{color: "white", fontSize: "10vw"}}>Jason Lev</h1>
    <h1 style={{color: "white", fontSize: "6vw"}}>Gameplay Programmer</h1>
    </div>
    <br></br>
    <h1 style={{color:"white", fontSize:"4vw"}}>Links: <a href="/resume">Resume</a>, <a href="https://www.linkedin.com/in/jason-lev/">Linkedin</a>, <a href="https://www.github.com/Cheezepin">GitHub</a>, <a href="https://cheezepin.itch.io/">itch.io</a></h1>
    <br></br>
        <div
        style={{
            justifyContent: 'centre',
            alignItems: 'centre',
            minHeight: "24vw",
        }}
        >
        <h1 style={{color: "white"}}>Highlighted Projects:</h1>
        <ProjectButton
            imgPath = "ch/ch_bttn"
            bgPath = "ch/ch_bg"
            setOverlay={() => setOverlay("ch")}
        />
        <ProjectButton
            imgPath = "f3/f3_bttn"
            bgPath = "f3/f3_bg"
            setOverlay={() => setOverlay("f3")}
        />
        <ProjectButton
            imgPath = "dc/dog_bttn"
            bgPath = "dc/dog_bg"
            setOverlay={() => setOverlay("dc")}
        />
        </div>

        <h1 style={{color: "white"}}>Other Projects:</h1>

        <div style={{alignItems: "center"}}>
        <div style={{alignItems: "center", minHeight:"24vw"}}>
        <ProjectButton
            imgPath = "haw/haw_bttn"
            bgPath = "haw/haw_bg"
            setOverlay={() => setOverlay("haw")}
        />
        <ProjectButton
            imgPath = "yctf/yctf_bttn"
            bgPath = "yctf/yctf_bg"
            setOverlay={() => setOverlay("yctf")}
        />
        <ProjectButton
            imgPath = "pm/pm_bttn"
            bgPath = "pm/pm_bttn"
            setOverlay={() => setOverlay("pm")}
        />
        <ProjectButton
            imgPath = "cm/cm_bttn"
            bgPath = "cm/cm_bg"
            setOverlay={() => setOverlay("cm")}
        />
        <ProjectButton
            imgPath = "bk/bk_bttn"
            bgPath = "bk/bk_bg"
            setOverlay={() => setOverlay("bk")}
        />
        <ProjectButton
            imgPath = "rm/rm_bttn"
            bgPath = "rm/rm_bg"
            setOverlay={() => setOverlay("rm")}
        />
        <ProjectButton
            imgPath = "gs/gs64_bttn"
            bgPath = "gs/gs64_bg"
            setOverlay={() => setOverlay("gs")}
        />
        <ProjectButton
            imgPath = "hth/hth_bttn"
            bgPath = "hth/hth_bg"
            setOverlay={() => setOverlay("hth")}
        />
        <ProjectButton
            imgPath = "dr/dr64_bttn"
            bgPath = "dr/dr64_bg"
            setOverlay={() => setOverlay("dr")}
        />
        {/* <ProjectButton
            imgPath = "jm/jm64_bttn"
            bgPath = "jm/jm64_bg"
            setOverlay={() => setOverlay("jm")}
        /> */}
        </div>


          {/* <OverlayHandler/> */}

          <ProjectOverlay overlay = {activeOverlay} setOverlay={setOverlay}/>

        </div>
    </>
  );
};

function ProjectOverlay({overlay, setOverlay}) {
    var displayedOverlay = null;
    switch(overlay) {
        case "yctf": displayedOverlay = <OvYctf setOverlay={setOverlay}/>; break;
        case "dc":   displayedOverlay = <OvDc   setOverlay={setOverlay}/>; break;
        case "rm":   displayedOverlay = <OvRm   setOverlay={setOverlay}/>; break;
        case "gs":   displayedOverlay = <OvGs   setOverlay={setOverlay}/>; break;
        case "hth":  displayedOverlay = <OvHth  setOverlay={setOverlay}/>; break;
        case "dr":   displayedOverlay = <OvDr   setOverlay={setOverlay}/>; break;
        case "jm":   displayedOverlay = <OvJm   setOverlay={setOverlay}/>; break;
        case "cm":   displayedOverlay = <OvCm   setOverlay={setOverlay}/>; break;
        case "bk":   displayedOverlay = <OvBk   setOverlay={setOverlay}/>; break;
        case "ch":   displayedOverlay = <OvCh   setOverlay={setOverlay}/>; break;
        case "pm":   displayedOverlay = <OvPm   setOverlay={setOverlay}/>; break;
        case "haw":  displayedOverlay = <OvHaw  setOverlay={setOverlay}/>; break;
    }
    if(displayedOverlay == null) {return;}
    return (
        <div class="overlayParentDiv">
            {displayedOverlay}
            <img src="/assets/controls/close.png" class="closeButton"></img>
        </div>
    )
  }

export default Portfolio;