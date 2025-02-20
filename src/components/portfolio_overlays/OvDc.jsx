import React from 'react';
import Ov from './Ov';
import "./overlays.css"

import bg from "/assets/projects/dc/bg.png"

class OvDc extends Ov {
  render() {
    return (
        <div class="overlayDiv invert" style={{background:`url(${bg}), #0C1524`, backgroundSize:"50%"}}ref={this.wrapperRef}>
          <h1 class="centerheader">Dog Collab</h1>

          <h2><a href="https://romhacking.com/hack/Dog-Collab">DOWNLOAD</a></h2>

          <h2>TRAILER</h2>
          <iframe class="overlayVideo" width="640px" height="360px" src="https://www.youtube.com/embed/RQ4kvmQAZD8?si=f5lKsMz8TqdZAIUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2>INFO</h2>
          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivP exMarg">
              <p>Release Date: Feb. 24th, 2023</p>
              <p>Language Used: C</p>
              <p>Engine: Super Mario 64 Decompilation (ROM Hack)</p>
              <p>Concept, organization, cleanup, level design, mechanics programming by Jason Lev ("Cheezepin")</p>
            </div>
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/dc/dcm1.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>FEATURES PROGRAMMED</h2>
          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/dc/dcm2.png" style={{width:"300px"}}></img>
            </div>
            <div class="overlayBlurbDivP">
              <p>Level select and star results UI</p>
              <p>Spherical camera programming and UI for a world map level select</p>
              <p>Elevators, breakable walls, and a snowboarding Bowser cutscene for Bowser's Flying Fortress</p>
              <p>Bowser w/ Chain Chomp pet boss behavior for the first and third Bowser fights</p>
              <p>Warp boxes and collectable bones (with save support) for the finale stage</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          {/* <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}> */}
            <img class="galleryImg" src="/assets/projects/dc/gallery/1.png"></img>
            <img class="galleryImg" src="/assets/projects/dc/gallery/2.png"></img>
            <img class="galleryImg" src="/assets/projects/dc/gallery/3.png"></img>
            <img class="galleryImg" src="/assets/projects/dc/gallery/4.png"></img>
            <img class="galleryImg" src="/assets/projects/dc/gallery/5.png"></img>
          {/* </div> */}
        </div>
    );
  }
};

export default OvDc;