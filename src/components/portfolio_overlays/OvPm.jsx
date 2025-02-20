import React from 'react';
import Ov from './Ov';
import "./overlays.css"

import bg from "/assets/projects/ch/bg.png"

class OvPm extends Ov {
  render() {
    return (
        <div class="overlayDiv invert" style={{background:` #000000`, backgroundSize:"100%", backgroundRepeat:"no-repeat"}}ref={this.wrapperRef}>
          <h1 class="centerheader">Pesky Marios</h1>
          <h2><a href="https://romhacking.com/hack/pesky-marios">DOWNLOAD (currently private)</a></h2>

          <h2>INFO</h2>
          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivP exMarg">
              <p>Completion Date: Feb. 11th, 2025 (public release TBA)</p>
              <p>Language Used: C</p>
              <p>Engine: Super Mario 64 Decompilation (ROM Hack)</p>
              <p>Gameplay, mario types, traps programmed by Jason Lev ("Cheezepin")</p>
              <p>Participant in the RHDC Chaos Competition</p>
            </div>
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/pm/render1.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>FEATURES PROGRAMMED</h2>

          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/pm/render2.png" style={{width:"300px"}}></img>
            </div>
            <div class="overlayBlurbDivP">
              <p>Asynchronous multi-Mario support with automatic inputs</p>
              <p>Grid-based tilemap to place and remove traps from</p>
              <p>In-game UI to display controls, upcoming challenges, stage results, and to switch between traps</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          {/* <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}> */}
            <img class="galleryImg" src="/assets/projects/pm/gallery/1.png"></img>
            <img class="galleryImg" src="/assets/projects/pm/gallery/2.png"></img>
            <img class="galleryImg" src="/assets/projects/pm/gallery/3.png"></img>
          {/* </div> */}
        </div>
    );
  }
};

export default OvPm;