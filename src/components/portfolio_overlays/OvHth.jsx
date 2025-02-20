import React from 'react';
import Ov from './Ov';
import "./overlays.css"

// import bg from "/assets/projects/gs/bg.png"

export default class OvHth extends Ov {
  render() {
    return (
        <div class="overlayDiv invert" style={{background:`linear-gradient(rgb(30, 0, 30), rgb(0, 0, 30))`, backgroundSize:"50%"}}ref={this.wrapperRef}>
          <h1 class="centerheader">The Hole to Hyrule</h1>
          <h2><a href="https://romhacking.com/hack/the-hole-to-hyrule">DOWNLOAD</a></h2>

          <h2>TRAILER</h2>
          <iframe class="overlayVideo" width="640px" height="360px" src="https://www.youtube.com/embed/35tsqz0SoJQ?si=cRQYuMyQJ4YtEKOS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2>INFO</h2>
          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivP exMarg">
              <p>Release Date: Oct. 14th, 2020</p>
              <p>Language Used: MIPS R4000 Assembly</p>
              <p>Engine: Super Mario 64 (ROM Hack)</p>
              <p>Programming, level design, modeling, writing by Jason Lev ("Cheezepin")</p>
              <p>Artwork by HeroTechne</p>
              <p>3rd place in the RHDC Zelda Hacks competition</p>
            </div>
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/hth/render1.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>FEATURES PROGRAMMED</h2>

          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/hth/render2.png" style={{width:"300px"}}></img>
            </div>
            <div class="overlayBlurbDivP">
              <p>Traditional Zelda items (projectile-spawning fire rod, boomerang with special collisions, collision-defying invisibility cloak, alternate moveset for Spindrift Mask Mario)</p>
              <p>In-game and menu UI to change between and show status of items</p>
              <p>Custom cutscene and voice acting engine</p>
              <p>Custom boss fights interacting with programmed items</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          {/* <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}> */}
            <img class="galleryImg" src="/assets/projects/hth/gallery/1.png"></img>
            <img class="galleryImg" src="/assets/projects/hth/gallery/2.png"></img>
            <img class="galleryImg" src="/assets/projects/hth/gallery/3.png"></img>
            <img class="galleryImg" src="/assets/projects/hth/gallery/4.png"></img>
            <img class="galleryImg" src="/assets/projects/hth/gallery/5.png"></img>
          {/* </div> */}
        </div>
    );
  }
};