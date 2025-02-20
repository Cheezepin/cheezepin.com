import React from 'react';
import Ov from './Ov';
import "./overlays.css"

// import bg from "/assets/projects/gs/bg.png"

export default class OvDr extends Ov {
  render() {
    return (
        <div class="overlayDiv invert" style={{background:`linear-gradient(rgb(50, 0, 0), rgb(30, 30, 30))`, backgroundSize:"50%"}}ref={this.wrapperRef}>
          <h1 class="centerheader">Danganronpa 64</h1>
          <h2><a href="https://romhacking.com/hack/danganronpa-64">DOWNLOAD</a></h2>

          <h2>TRAILER</h2>
          <iframe class="overlayVideo" width="640px" height="360px" src="https://www.youtube.com/embed/aka9qFTmXWI?si=wghv4YDKKfHh3Ymo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2>INFO</h2>
          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivP exMarg">
              <p>Release Date: Jan. 9th, 2020</p>
              <p>Language Used: MIPS R4000 Assembly</p>
              <p>Engine: Super Mario 64 (ROM Hack)</p>
              <p>Concept, organization, programming, level design, and writing by Jason Lev ("Cheezepin")</p>
              <p>2nd place in the RHDC Mystery Hacks competition</p>
            </div>
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/dr/render1.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>FEATURES PROGRAMMED</h2>

          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/dr/render2.png" style={{width:"300px"}}></img>
            </div>
            <div class="overlayBlurbDivP">
              <p>First-person perspective and controls for Mario</p>
              <p>Custom text, portrait, and cutscene engine</p>
              <p>Trial system, consisting of interactive 2D UI elements and 3D objects projected onto screen space</p>
              <p>Command-line tool (written in Python) for sequential placement of entities</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          {/* <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}> */}
            <img class="galleryImg" src="/assets/projects/dr/gallery/1.png"></img>
            <img class="galleryImg" src="/assets/projects/dr/gallery/2.png"></img>
            <img class="galleryImg" src="/assets/projects/dr/gallery/3.png"></img>
            <img class="galleryImg" src="/assets/projects/dr/gallery/4.png"></img>
            <img class="galleryImg" src="/assets/projects/dr/gallery/5.png"></img>
          {/* </div> */}
        </div>
    );
  }
};