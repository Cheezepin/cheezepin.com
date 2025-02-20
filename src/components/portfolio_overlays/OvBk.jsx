import React from 'react';
import AnimatedPage from "../../pages/AnimatedPage";
import Ononoki from '/src/components/Ononoki';
import "./overlays.css"

import bg from "/assets/projects/yctf/bg.png"

import Ov from './Ov';

class OvBk extends Ov {
  render() {
    return (
        <div class="overlayDiv" style={{background: `linear-gradient(#DEFFFC, #9198e5)`, backgroundSize:"20%"}}ref={this.wrapperRef}>
          <h1 class="centerheader">Bakedry</h1>
          <iframe frameborder="0" src="https://itch.io/embed/2672150" width="552" height="167"><a href="https://cheezepin.itch.io/bakedry">Bakedry by Cheezepin, SassyStella55, Kayla M, Carriez0117, glotch</a></iframe>

          <h2>INFO</h2>
          <div class="overlayBlurbDiv">
          <div class="overlayBlurbDivP exMarg">
              <p>Release Date: November 22nd, 2024</p>
              <p>Language: C#</p>
              <p>Engine: Godot</p>
              <p>Programming, level design by Jason Lev</p>
              <p>Art (including art used on this page) by <a href="https://www.linkedin.com/in/kaylamchaney/">Kayla McHaney</a> and <a href="https://www.linkedin.com/in/karen-lopez-a3092a28a/">Karen Lopez</a>, sound designed by <a href="https://www.linkedin.com/in/kyle-lev-882942326/">Kyle Lev</a>, additional programming by <a href="https://www.linkedin.com/in/carriez0117/">Carrie Zhang</a></p>
              <p>Designed for the TAGD Spring '24 Game Jam with theme "Roll Out"</p>
            </div>
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/bk/render.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>FEATURES PROGRAMMED</h2>
          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/bk/render2.png" style={{width:"300px"}}></img>
            </div>
            <div class="overlayBlurbDivP">
              <p>Top-down player and enemy movement and collision</p>
              <p>Ingredient and recipe indexing and combination logic</p>
              <p>Item holding and placement system</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          {/* <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px" }}> */}
            <img class="galleryImg" src="/assets/projects/bk/gallery/1.png"></img>
            <img class="galleryImg" src="/assets/projects/bk/gallery/2.png"></img>
            <img class="galleryImg" src="/assets/projects/bk/gallery/3.png"></img>
            <img class="galleryImg" src="/assets/projects/bk/gallery/4.png"></img>
            <img class="galleryImg" src="/assets/projects/bk/gallery/5.png"></img>
          {/* </div> */}
        </div>
    );
  }
};

export default OvBk;