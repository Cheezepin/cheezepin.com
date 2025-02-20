import React from 'react';
import AnimatedPage from "../../pages/AnimatedPage";
import Ononoki from '/src/components/Ononoki';
import "./overlays.css"

import bg from "/assets/projects/yctf/bg.png"

import Ov from './Ov';

class OvYctf extends Ov {
  render() {
    return (
        <div class="overlayDiv" style={{background:`url(${bg}), #E9D65C`, backgroundSize:"20%"}}ref={this.wrapperRef}>
          <h1 class="centerheader">Yoshi Commits Tax Fraud 64</h1>

          <h2>TRAILER</h2>
          <iframe class="overlayVideo" /*width="640px" height="360px"*/ src="https://www.youtube.com/embed/ERHelYqsujA?si=xstb4SbDeSlpxHAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2>INFO</h2>
          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivP exMarg">
              <p>Release Date: TBD</p>
              <p>Language Used: C</p>
              <p>Engine: Super Mario 64 Decompilation (ROM Hack)</p>
              <p>Concept, all programming, level design, level modeling, writing, music arranged by Jason Lev ("Cheezepin")</p>
              <p>Character models by Janja</p>
            </div>
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/yctf/render.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>FEATURES PROGRAMMED</h2>

          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/yctf/render2.png" style={{width:"300px"}}></img>
            </div>
            <div class="overlayBlurbDivP">
              <p>Traiditonal Yoshi mechanics (tongue-grabbing, swallowing enemies, throwing eggs, flutter jumping) translated to 3D platforming</p>
              <p>Custom text, cutscene, and event engine to support dialog boxes, reactions to world events, and text features (including shaking, custom colors, and wavering)</p>
              <p>Custom boss fights making use of implemented Yoshi mechanics and event engine</p>
              <p>Metroidvania-styled progression system with unique items and save flags</p>
              <p>Ace Attorney-styled defense attorney simulator</p>
              <p>Dating simulator-styled branching dialog trees with events</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          {/* <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}> */}
            <img /*onClick={() => {this.fuck(this.props.setOverlay)}}*/ class="galleryImg" src="/assets/projects/yctf/gallery/1.png"></img>
            <img class="galleryImg" src="/assets/projects/yctf/gallery/2.png"></img>
            <img class="galleryImg" src="/assets/projects/yctf/gallery/3.png"></img>
            <img class="galleryImg" src="/assets/projects/yctf/gallery/4.png"></img>
          {/* </div> */}
        </div>
    );
  }
};

export default OvYctf;