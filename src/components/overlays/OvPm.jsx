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
            <p>Super Mario 64 ROM Hack</p>
              <p>Completion Date: Feb. 11th, 2025 (public release TBA)</p>
              <p>Gameplay, mario types, traps programmed by Cheezepin</p>
              <p>Other programming by s4ys, level design by s4ys and Pyro Jay</p>
            </div>
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/pm/render1.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>MARIOS MUST DIE!</h2>

          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/pm/render2.png" style={{width:"300px"}}></img>
            </div>
            <div class="overlayBlurbDivP">
              <p>Mario Maker X Tower Defense. Set traps to kill the horde of Marios trying to collect the stars! Play through the campaign, fight an endless gauntlet of Marios, or play through randomly selected stages until you drop! </p>
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