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

          <h2><a href="https://cheezepin.itch.io/bakedry">DOWNLOAD</a></h2>

          <h2>INFO</h2>
          <div class="overlayBlurbDiv">
          <div class="overlayBlurbDivP exMarg">
              <p>Godot Engine Game for TAGD Spring '24 Game Jam "Roll Out"</p>
              <p>Release Date: November 22nd, 2024</p>
              <p>Concept, programming, level design by Cheezepin</p>
            </div>
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/bk/render.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>LOTS ON YOUR PLATE!</h2>

          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/bk/render2.png" style={{width:"300px"}}></img>
            </div>
            <div class="overlayBlurbDivP">
              <p>Bakery in the front, drug operation in the back, handle both with one kitchen! You're managing the baked goods store solo today, and the customers won't let up. You've gotta make enough money to stay open one more day! Serve them quickly receive extra tips, and make sure not to mess up their order, or they'll get pissed!</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px" }}>
            <img class="galleryImg" src="/assets/projects/bk/gallery/1.png"></img>
            <img class="galleryImg" src="/assets/projects/bk/gallery/2.png"></img>
            <img class="galleryImg" src="/assets/projects/bk/gallery/3.png"></img>
            <img class="galleryImg" src="/assets/projects/bk/gallery/4.png"></img>
            <img class="galleryImg" src="/assets/projects/bk/gallery/5.png"></img>
          </div>
        </div>
    );
  }
};

export default OvBk;