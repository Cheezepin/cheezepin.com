import React from 'react';
import Ov from './Ov';
import "./overlays.css"

import bg from "/projects/gs/bg.png"

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
          <div style={{display:"flex"}}>
            <div style={{width:"60%", marginLeft:"5%"}}>
              <p>Super Mario 64 ROM Hack</p>
              <p>Release Date: Apr. 4th, 2021</p>
              <p>Concept, programming, level design, UI design, music transcriptions, manual design by Cheezepin</p>
              <p>Original graphics by Camelot Software, additional art by SPK, logo by HeroTechne</p>
              <p>Participant in the S_NDBB Media Competition</p>
            </div>
            <div style={{width:"30%"}}>
              <img src="/projects/gs/render1.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>AN RPG SPIN ON CLASSIC SM64!</h2>

          <div style={{display:"flex"}}>
            <div style={{width:"30%"}}>
              <img src="/projects/gs/render2.png" style={{width:"300px"}}></img>
            </div>
            <div style={{width:"60%"}}>
              <p>Mario has landed on King Bob-Omb's island in Neo-Angara, plotting to stop him from harnessing the elemental stars. Joined by three other plumbers, the party must use their magical abilities and pure might to overcome the tower's challenges in a fusion of 3D platforming and traditional RPG battling a la Golden Sun.</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}>
            <img class="galleryImg" src="/projects/gs/gallery/1.png"></img>
            <img class="galleryImg" src="/projects/gs/gallery/2.png"></img>
            <img class="galleryImg" src="/projects/gs/gallery/3.png"></img>
            <img class="galleryImg" src="/projects/gs/gallery/4.png"></img>
            <img class="galleryImg" src="/projects/gs/gallery/5.png"></img>
          </div>
        </div>
    );
  }
};