import React from 'react';
import AnimatedPage from "../../pages/AnimatedPage";
import Ononoki from '/src/components/Ononoki';
import "./overlays.css"

import bg from "/src/assets/projects/yctf/bg.png"

import Ov from './Ov';

class OvYctf extends Ov {
  render() {
    return (
        <div class="overlayDiv" style={{background:`url(${bg}), #E9D65C`, backgroundSize:"20%"}}ref={this.wrapperRef}>
          <h1 class="centerheader">Yoshi Commits Tax Fraud 64</h1>

          <h2>TRAILER</h2>
          <iframe class="overlayVideo" width="640px" height="360px" src="https://www.youtube.com/embed/ERHelYqsujA?si=xstb4SbDeSlpxHAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2>INFO</h2>
          <div style={{display:"flex"}}>
            <div style={{width:"60%", marginLeft:"5%"}}>
              <p>Super Mario 64 ROM Hack</p>
              <p>Release Date: TBD</p>
              <p>Concept, programming, level design, level modeling, writing, music by Cheezepin</p>
              <p>Character models by Janja, level model improvements by Aeza, music by various contributors</p>
            </div>
            <div style={{width:"30%"}}>
              <img src="/src/assets/projects/yctf/render.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>YOSHI'S ON THE RUN!</h2>

          <div style={{display:"flex"}}>
            <div style={{width:"30%"}}>
              <img src="/src/assets/projects/yctf/render2.png" style={{width:"300px"}}></img>
            </div>
            <div style={{width:"60%"}}>
              <p>Yoshi's despicable habits have caught up to him, and now he's on the run from the IRS. Collect stars using Yoshi's abilities in a modernized Mario world while you unravel the mystery of the IRS' true intentions.</p>
            </div>
          </div>

          <div style={{display:"flex"}}>
            <div style={{width:"60%", marginLeft:"5%", verticalAlign: "middle"}}>
              <p>This mod will contain 70 unique stars placed in over ten riveting stages, from dense forests to ginormous metrpolises. Yoshi can flutter jump, eat enemies, and shoot eggs like usual, but is now equipped with three new situational abilities: the Blimp Fruit to reach staggering new heights, the Poochy Whistle to summon his furry friend and cross dangerous lengths at top-speed, and the Stand Arrow to unleash his inner potential and wreak havoc on not just enemies but time itself.</p>
            </div>
            <div style={{width:"30%"}}>
              <img src="/src/assets/projects/yctf/render3.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <div style={{display:"flex"}}>
            <div style={{width:"30%"}}>
              <img src="/src/assets/projects/yctf/render4.png" style={{width:"300px"}}></img>
            </div>
            <div style={{width:"60%"}}>
              <p>Yoshi's allies will also take center stage, with friends like Wario and Kirby helping him move through tough areas, and even letting you harness their familiar abilities in certain areas.</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}>
            <img /*onClick={() => {this.fuck(this.props.setOverlay)}}*/ class="galleryImg" src="/src/assets/projects/yctf/gallery/1.png"></img>
            <img class="galleryImg" src="/src/assets/projects/yctf/gallery/2.png"></img>
            <img class="galleryImg" src="/src/assets/projects/yctf/gallery/3.png"></img>
            <img class="galleryImg" src="/src/assets/projects/yctf/gallery/4.png"></img>
          </div>
        </div>
    );
  }
};

export default OvYctf;