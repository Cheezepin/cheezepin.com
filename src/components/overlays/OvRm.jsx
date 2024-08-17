import React from 'react';
import Ov from './Ov';
import "./overlays.css"

// import bg from "/src/assets/projects/rm/bg.png"

export default class OvRm extends Ov {
  render() {
    return (
        <div class="overlayDiv" style={{background:`linear-gradient(rgb(243, 214, 154), rgb(254, 252, 247))`, backgroundSize:"50%"}}ref={this.wrapperRef}>
          <h1 class="centerheader">RhythMario 64.5 ~ crescendo of Cosmic Beast</h1>

          <h2><a href="https://romhacking.com/hack/rhythmario-645--crescendo-of-cosmic-beast">DOWNLOAD</a></h2>

          <h2>TRAILER</h2>
          <iframe class="overlayVideo" width="640px" height="360px" src="https://www.youtube.com/embed/_oSgO_3Bg6o?si=iRQqwTHPwDUKKxce" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2>INFO</h2>
          <div style={{display:"flex"}}>
            <div style={{width:"60%", marginLeft:"5%"}}>
              <p>Super Mario 64 ROM Hack</p>
              <p>Release Date: Jun. 26th, 2021</p>
              <p>Concept, programming, level design, writing, modeling by Cheezepin and MrComit</p>
              <p>Music by MrComit and Thorndust</p>
              <p>Winner of the RHDC Music Hacks Competition</p>
            </div>
            <div style={{width:"30%"}}>
              <img src="/src/assets/projects/rm/render1.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>A CHAOTIC MUSICAL FUSION OF GENRES!</h2>

          <div style={{display:"flex"}}>
            <div style={{width:"30%"}}>
              <img src="/src/assets/projects/rm/render2.png" style={{width:"300px"}}></img>
            </div>
            <div style={{width:"60%"}}>
              <p>DJ Bowser and his cronies have stolen Peach yet again, and it's up to Mario to stop him. With E. Gadd's new Ultra-Note-Display 3000, he can preview all the enemies coming his way in three musical worlds. Dodge and weave all sorts of traps and complete fun missions on your way to stop DJ Bowser in this bullethell rhythm-game platformer hybrid!</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}>
            <img class="galleryImg" src="/src/assets/projects/rm/gallery/1.png"></img>
            <img class="galleryImg" src="/src/assets/projects/rm/gallery/2.png"></img>
            <img class="galleryImg" src="/src/assets/projects/rm/gallery/3.png"></img>
            <img class="galleryImg" src="/src/assets/projects/rm/gallery/4.png"></img>
            <img class="galleryImg" src="/src/assets/projects/rm/gallery/5.png"></img>
          </div>
        </div>
    );
  }
};