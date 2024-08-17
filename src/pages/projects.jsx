import React, {useState} from 'react';
import AnimatedPage from './AnimatedPage';
import ProjectButton from '../components/ProjectButton';

import {
    Routes,
    Route,
    useLocation,
    Link,
    Outlet,
  } from "react-router-dom";
  
  import { AnimatePresence } from 'framer-motion';

  import OvYctf from '../components/overlays/OvYctf';
  import OvDc from '../components/overlays/OvDc';
  import OvRm from '../components/overlays/OvRm';
  import OvGs from '../components/overlays/OvGs';
  import OvHth from '../components/overlays/OvHth';
  import OvDr from '../components/overlays/OvDr';
  import OvJm from '../components/overlays/OvJm';
  
  import "../components/overlays/overlays.css"

const Projects = () => {
    const [activeOverlay, setOverlay] = useState("empy");
  return (
    <AnimatedPage>
        <div
        style={{
            justifyContent: 'centre',
            alignItems: 'centre',
        }}
        >
        <h1>Current Projects:</h1>

        <div style={{alignItems: "center", minHeight:"24vw"}}>
        <ProjectButton
            imgPath = "yctf/yctf_bttn"
            bgPath = "yctf/yctf_bg"
            setOverlay={() => setOverlay("yctf")}
        />
        </div>

        <h1>Highlighted Completed Projects:</h1>

        <div style={{alignItems: "center"}}>
        <ProjectButton
            imgPath = "dc/dog_bttn"
            bgPath = "dc/dog_bg"
            setOverlay={() => setOverlay("dc")}
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
        <ProjectButton
            imgPath = "jm/jm64_bttn"
            bgPath = "jm/jm64_bg"
            setOverlay={() => setOverlay("jm")}
        />
        </div>

        <p>You can find <i>all</i> of my ROM hacks <a href="https://romhacking.com/user/Cheezepin">here</a>.</p>


          {/* <OverlayHandler/> */}

          <ProjectOverlay overlay = {activeOverlay} setOverlay={setOverlay}/>

        </div>
    </AnimatedPage>
  );
};

const activePages = [
    "yctf",
    "dc",
    "rm",
    "gs",
    "hth",
    "dr",
    "jm",
];

function ProjectOverlay({overlay, setOverlay}) {
    console.log(overlay);
    var displayedOverlay = null;
    switch(overlay) {
        case "yctf": displayedOverlay = <OvYctf setOverlay={setOverlay}/>; break;
        case "dc":   displayedOverlay = <OvDc   setOverlay={setOverlay}/>; break;
        case "rm":   displayedOverlay = <OvRm   setOverlay={setOverlay}/>; break;
        case "gs":   displayedOverlay = <OvGs   setOverlay={setOverlay}/>; break;
        case "hth":  displayedOverlay = <OvHth  setOverlay={setOverlay}/>; break;
        case "dr":   displayedOverlay = <OvDr   setOverlay={setOverlay}/>; break;
        case "jm":   displayedOverlay = <OvJm   setOverlay={setOverlay}/>; break;
    }
    if(displayedOverlay == null) {return;}
    return (
        <div class="overlayParentDiv">
            {displayedOverlay}
        </div>
    )
  }

export default Projects;