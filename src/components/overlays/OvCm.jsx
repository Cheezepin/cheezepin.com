import React from 'react';
import AnimatedPage from "../../pages/AnimatedPage";
import Ononoki from '/src/components/Ononoki';
import "./overlays.css"

import bg from "/assets/projects/cm/bg.png"

import Ov from './Ov';

class OvCm extends Ov {
  render() {
    return (
        <div class="overlayDiv invert" style={{background:`url(${bg}), #073468`, backgroundSize:"200%"}}ref={this.wrapperRef}>
          <h1 class="centerheader">Commocean</h1>

          <h2><a href="https://cheezepin.itch.io/commocean">DOWNLOAD</a></h2>

          <h2>INFO</h2>
          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivP exMarg">
              <p>Godot Engine Game for TAGD Fall '24 Game Jam "Motion Commotion"</p>
              <p>Release Date: April 27th, 2024</p>
              <p>Concept, programming, level design by Cheezepin</p>
            </div>
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/cm/render.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>TREASURE GALORE!</h2>

          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/cm/render2.png" style={{width:"300px"}}></img>
            </div>
            <div class="overlayBlurbDivP">
              <p>Dive underwater in a race for riches! Armed with your trusty harpoon, plunge into the depths of the sea to catch fish, uncover hidden treasures, and rake in cash. But it’s not all smooth sailing—stay sharp as the sea police patrol the waters, ready to put an end to your exploits.  But if you dive deeper, and you might discover more than just fish beneath the waves...</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}>
            <img class="galleryImg" src="/assets/projects/cm/gallery/1.png"></img>
            <img class="galleryImg" src="/assets/projects/cm/gallery/2.png"></img>
            <img class="galleryImg" src="/assets/projects/cm/gallery/3.png"></img>
            <img class="galleryImg" src="/assets/projects/cm/gallery/4.png"></img>
            <img class="galleryImg" src="/assets/projects/cm/gallery/5.png"></img>
          </div>
        </div>
    );
  }
};

export default OvCm;