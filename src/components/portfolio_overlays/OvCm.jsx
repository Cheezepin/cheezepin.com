import React from 'react';
import AnimatedPage from "../../pages/AnimatedPage";
import Ononoki from '/src/components/Ononoki';
import "./overlays.css"

import bg from "/assets/projects/cm/bg.png"

import Ov from './Ov';
import GalleryImage from '../Gallery/GalleryImage';

class OvCm extends Ov {
  render() {
    return (
        <div class="overlayDiv invert" style={{background:`url(${bg}), #011623`, backgroundSize:"200%", backgroundRepeat:"no-repeat"}}ref={this.wrapperRef}>
          <h1 class="centerheader">Commocean</h1>=
          <iframe frameborder="0" src="https://itch.io/embed/3126051" width="552" height="167"><a href="https://cheezepin.itch.io/commocean">Commocean by Cheezepin, glotch, SassyStella55, Kayla M, emg11</a></iframe>

          <h2>INFO</h2>
          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivP exMarg">
              <p>Release Date: April 27th, 2024</p>
              <p>Language: C#</p>
              <p>Engine: Godot</p>
              <p>Programming, level design by Jason Lev</p>
              <p>Art (including art used on this page) by <a href="https://www.linkedin.com/in/emily-gonzalez-593636264/">Emily Gonzalez</a>, <a href="https://www.linkedin.com/in/kaylamchaney/">Kayla McHaney</a>, and <a href="https://www.linkedin.com/in/karen-lopez-a3092a28a/">Karen Lopez</a>, sound designed by <a href="https://www.linkedin.com/in/kyle-lev-882942326/">Kyle Lev</a></p>
              <p>Designed for the TAGD Fall '24 Game Jam with theme "Motion Commotion"</p>
            </div>
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/cm/render.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>FEATURES PROGRAMMED</h2>

          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/cm/render2.png" style={{width:"300px"}}></img>
            </div>
            <div class="overlayBlurbDivP">
              <p>Procedural erratic entity movement</p>
              <p>Spline and timer-based player movement</p>
              <p>3D perspective aiming based on cursor screen location</p>
              <p>3D harpoon firing, aiming, collision, and retraction</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          {/* <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}> */}
            <img class="galleryImg" src="/assets/projects/cm/gallery/1.png"></img>
            <img class="galleryImg" src="/assets/projects/cm/gallery/2.png"></img>
            <img class="galleryImg" src="/assets/projects/cm/gallery/3.png"></img>
            <img class="galleryImg" src="/assets/projects/cm/gallery/4.png"></img>
            <img class="galleryImg" src="/assets/projects/cm/gallery/5.png"></img>
          {/* </div> */}
        </div>
    );
  }
};

export default OvCm;