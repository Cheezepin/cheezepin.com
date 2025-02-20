import React from 'react';
import Ov from './Ov';
import "./overlays.css"

// import bg from "/assets/projects/rm/bg.png"

export default class OvRm extends Ov {
  render() {
    return (
        <div class="overlayDiv" style={{background:`linear-gradient(rgb(243, 214, 154), rgb(254, 252, 247))`, backgroundSize:"50%"}}ref={this.wrapperRef}>
          <h1 class="centerheader">RhythMario 64.5 ~ crescendo of Cosmic Beast</h1>
          <h2><a href="https://romhacking.com/hack/rhythmario-645--crescendo-of-cosmic-beast">DOWNLOAD</a></h2>

          <h2>TRAILER</h2>
          <iframe class="overlayVideo" width="640px" height="360px" src="https://www.youtube.com/embed/_oSgO_3Bg6o?si=iRQqwTHPwDUKKxce" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2>INFO</h2>
          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivP exMarg">
              <p>Release Date: Jun. 26th, 2021</p>
              <p>Language Used: C</p>
              <p>Engine: Super Mario 64 Decompilation (ROM Hack)</p>
              <p>Concept, programming, level design, writing, modeling by Jason Lev ("Cheezepin")</p>
              <p>Winner of the RHDC Music Hacks Competition</p>
            </div>
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/rm/render1.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>FEATURES PROGRAMMED</h2>

          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/rm/render2.png" style={{width:"300px"}}></img>
            </div>
            <div class="overlayBlurbDivP">
              <p>Note and beat detection system to align entities to the current background music</p>
              <p>Music-synced mission system (assigning objectives based on current portion of background music)</p>
              <p>Selection between multiple playable characters</p>
              <p>Music-synced final boss fight</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          {/* <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}> */}
            <img class="galleryImg" src="/assets/projects/rm/gallery/1.png"></img>
            <img class="galleryImg" src="/assets/projects/rm/gallery/2.png"></img>
            <img class="galleryImg" src="/assets/projects/rm/gallery/3.png"></img>
            <img class="galleryImg" src="/assets/projects/rm/gallery/4.png"></img>
            <img class="galleryImg" src="/assets/projects/rm/gallery/5.png"></img>
          {/* </div> */}
        </div>
    );
  }
};