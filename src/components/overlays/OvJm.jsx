import React from 'react';
import Ov from './Ov';
import "./overlays.css"

// import bg from "/projects/gs/bg.png"

export default class OvJm extends Ov {
  render() {
    return (
        <div class="overlayDiv invert" style={{background:`linear-gradient(rgb(44, 34, 103), rgb(127, 41, 108))`, backgroundSize:"50%"}}ref={this.wrapperRef}>
          <h1 class="centerheader">Jump Man LXIV</h1>

          <h2><a href="https://romhacking.com/hack/jump-man-lxiv">DOWNLOAD</a></h2>

          <h2>TRAILER</h2>
          <iframe class="overlayVideo" width="640px" height="360px" src="https://www.youtube.com/embed/bw28R0aQ7uU?si=hpolwbZZT71BPcL5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2>INFO</h2>
          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivP exMarg">
              <p>Super Mario 64 ROM Hack</p>
              <p>Release Date: Aug. 11th, 2019</p>
              <p>Concept, programming, level design, music transcriptions, writing, modeling by Cheezepin</p>
              <p>2nd place in the RHDC Linear Hacks competition</p>
            </div>
            <div class="overlayBlurbDivImg">
              <img src="/projects/dc/dcm3.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>A SIGN-IFICANT CLASSIC CHALLENGE!</h2>

          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivImg">
              <img src="/projects/jm/render1.png" style={{width:"300px"}}></img>
            </div>
            <div class="overlayBlurbDivP">
              <p>Mario finds himself at odds with the omniscient, all-powerful Bill Board. With his new ability to spawn signposts as temporary platforms, he must traverse three wacky stages while battling Bill's minions on his way to his space lair.</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}>
            <img class="galleryImg" src="/projects/jm/gallery/1.png"></img>
            <img class="galleryImg" src="/projects/jm/gallery/2.png"></img>
            <img class="galleryImg" src="/projects/jm/gallery/3.png"></img>
          </div>
        </div>
    );
  }
};