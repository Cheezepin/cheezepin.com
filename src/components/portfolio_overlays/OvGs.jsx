import React from 'react';
import Ov from './Ov';
import "./overlays.css"

import bg from "/assets/projects/gs/bg.png"

export default class OvGs extends Ov {
  render() {
    return (
        <div class="overlayDiv invert" style={{background:`url(${bg}), rgba(36,57,27,1)`, backgroundSize:"50%"}}ref={this.wrapperRef}>
          <h1 class="centerheader">Golden Sun 64</h1>
          <h2><a href="https://romhacking.com/hack/golden-sun-64">DOWNLOAD</a></h2>
          <h2><a href="https://drive.google.com/file/d/1zerwnxMoJgi6JDpd9j5EvDIv_J7C3k-7/view?usp=sharing">VIEW MANUAL</a></h2>

          <h2>TRAILER</h2>
          <iframe class="overlayVideo" width="640px" height="360px" src="https://www.youtube.com/embed/zdHEwTVCoo0?si=3ilOPjiVwketVzvC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2>INFO</h2>
          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivP exMarg">
              <p>Release Date: Apr. 4th, 2021</p>
              <p>Language Used: C</p>
              <p>Engine: Super Mario 64 Decompilation (ROM Hack)</p>
              <p>Concept, programming, level design, UI design, music transcriptions, manual design by Jason Lev ("Cheezepin")</p>
              <p>Original graphics by Camelot Software, additional art by SPK, logo by HeroTechne</p>
              <p>Participant in the S_NDBB Media Competition</p>
            </div>
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/gs/render1.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>FEATURES PROGRAMMED</h2>

          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/gs/render2.png" style={{width:"300px"}}></img>
            </div>
            <div class="overlayBlurbDivP">
              <p>Traditional JRPG Battle System (Fixed cameras in a custom cutscene engine, menu UI, attack variations, damage calculations, giving and receiving damage animations)</p>
              <p>Password system for saves and secrets</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          {/* <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}> */}
            <img class="galleryImg" src="/assets/projects/gs/gallery/1.png"></img>
            <img class="galleryImg" src="/assets/projects/gs/gallery/2.png"></img>
            <img class="galleryImg" src="/assets/projects/gs/gallery/3.png"></img>
            <img class="galleryImg" src="/assets/projects/gs/gallery/4.png"></img>
            <img class="galleryImg" src="/assets/projects/gs/gallery/5.png"></img>
          {/* </div> */}
        </div>
    );
  }
};