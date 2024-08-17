import React from 'react';
import Ov from './Ov';
import "./overlays.css"

import bg from "/src/assets/projects/dc/bg.png"

class OvDc extends Ov {
  render() {
    return (
        <div class="overlayDiv invert" style={{background:`url(${bg}), #0C1524`, backgroundSize:"50%"}}ref={this.wrapperRef}>
          <h1 class="centerheader">Dog Collab</h1>

          <h2><a href="https://romhacking.com/hack/Dog-Collab">DOWNLOAD</a></h2>

          <h2>TRAILER</h2>
          <iframe class="overlayVideo" width="640px" height="360px" src="https://www.youtube.com/embed/RQ4kvmQAZD8?si=f5lKsMz8TqdZAIUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2>INFO</h2>
          <div style={{display:"flex"}}>
            <div style={{width:"60%", marginLeft:"5%"}}>
              <p>Super Mario 64 ROM Hack</p>
              <p>Release Date: Feb. 24th, 2023</p>
              <p>Concept, organization, cleanup by Cheezepin</p>
              <p>Organization, cleanup by thecozies</p>
              <p>Level design by Ashley, MrComit, someone2639, Cheezepin, BeverlyBean, Rovert, CowQuack, KeyBlader, an_unidentified_emu, Yoshi Milkman, Fazana, and thecozies</p>
            </div>
            <div style={{width:"30%"}}>
              <img src="/src/assets/projects/dc/dcm1.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>A NEW STORY WITH A CANINE FRIEND!</h2>

          <div style={{display:"flex"}}>
            <div style={{width:"30%"}}>
              <img src="/src/assets/projects/dc/dcm2.png" style={{width:"300px"}}></img>
            </div>
            <div style={{width:"60%"}}>
              <p>Bowser has taken Peach again, but in this evolution of classic Mario 64, you'll have to travel the whole world to get her back! Your trusty pet dog will accompany you in every level. He can dig up treasure, open doors, give you a ride, and much more! Collect over 70 stars in over 10 levels crafted by established ROM hackers, with all sorts of custom mechanics and gimmicks!</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}>
            <img class="galleryImg" src="/src/assets/projects/dc/gallery/1.png"></img>
            <img class="galleryImg" src="/src/assets/projects/dc/gallery/2.png"></img>
            <img class="galleryImg" src="/src/assets/projects/dc/gallery/3.png"></img>
            <img class="galleryImg" src="/src/assets/projects/dc/gallery/4.png"></img>
            <img class="galleryImg" src="/src/assets/projects/dc/gallery/5.png"></img>
          </div>
        </div>
    );
  }
};

export default OvDc;