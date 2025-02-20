import React from 'react';
import Ov from './Ov';
import "./overlays.css"

import bg from "/assets/projects/ch/bg.png"

class OvCh extends Ov {
  render() {
    return (
        <div class="overlayDiv" style={{background:`url(${bg}), #D9F0FA`, backgroundSize:"100%", backgroundRepeat:"no-repeat"}}ref={this.wrapperRef}>
          <h1 class="centerheader">Child's Play</h1>

          <h2><a href="https://cheezepin.itch.io/childs-play">DOWNLOAD</a></h2>

          <h2>WALKTHROUGH</h2>
          <iframe class="overlayVideo" width="640px" height="360px" src="https://www.youtube.com/embed/YF6bl6qaWOE?si=cS28SiF6QM-Kf_ht" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2>INFO</h2>
          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivP exMarg">
              <p>Godot Engine Game for Chillennium '25 Game Jam "In Plain Sight"</p>
              <p>Release Date: Feb. 9th, 2025</p>
              <p>Programming, level design by Cheezepin</p>
              <p>Winner of Best in Programming</p>
            </div>
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/ch/render1.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>SWITCH COLORS AND SAVE YOUR GIRL!</h2>

          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/ch/render2.png" style={{width:"300px"}}></img>
            </div>
            <div class="overlayBlurbDivP">
              <p>Step into the role of a fearless view master and navigate the dynamic platforms to rescue your beloved from the clutches of a greedy baby! Gather the colorful disks scattered across the map to utilize powerful colored lenses that reveal hidden platforms. You’ll also take down any enemy paint drops that match the colors you've discovered. Get ready for an exhilarating adventure! </p>
            </div>
          </div>

          <h2>GALLERY</h2>
          {/* <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}> */}
            <img class="galleryImg" src="/assets/projects/ch/gallery/1.png"></img>
            <img class="galleryImg" src="/assets/projects/ch/gallery/2.png"></img>
            <img class="galleryImg" src="/assets/projects/ch/gallery/3.png"></img>
            <img class="galleryImg" src="/assets/projects/ch/gallery/4.png"></img>
            <img class="galleryImg" src="/assets/projects/ch/gallery/5.png"></img>
          {/* </div> */}
        </div>
    );
  }
};

export default OvCh;