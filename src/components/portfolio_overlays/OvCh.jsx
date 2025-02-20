import React from 'react';
import Ov from './Ov';
import "./overlays.css"

import bg from "/assets/projects/ch/bg.png"

class OvCh extends Ov {
  render() {
    return (
        <div class="overlayDiv" style={{background:`url(${bg}), #D9F0FA`, backgroundSize:"100%", backgroundRepeat:"no-repeat"}}ref={this.wrapperRef}>
          <h1 class="centerheader">Child's Play</h1>

          <iframe frameborder="0" src="https://itch.io/embed/3313719" width="552" height="167"><a href="https://cheezepin.itch.io/childs-play">Child's Play by Cheezepin, Kayla M, SassyStella55, glotch</a></iframe>

          <h2>WALKTHROUGH</h2>
          <iframe class="overlayVideo" width="640px" height="360px" src="https://www.youtube.com/embed/YF6bl6qaWOE?si=cS28SiF6QM-Kf_ht" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2>INFO</h2>
          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivP exMarg">
              <p>Release Date: Feb. 9th, 2025</p>
              <p>Language: C#</p>
              <p>Engine: Godot</p>
              <p>Programming, level design by Jason Lev</p>
              <p>Art (including art used on this page) by <a href="https://www.linkedin.com/in/kaylamchaney/">Kayla McHaney</a> and <a href="https://www.linkedin.com/in/karen-lopez-a3092a28a/">Karen Lopez</a>, sound designed by <a href="https://www.linkedin.com/in/kyle-lev-882942326/">Kyle Lev</a></p>
              <p>Designed in 40 hours for Chillennium '25 with theme "In Plain Sight"</p>
              <p>Winner of Best in Programming</p>
            </div>
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/ch/render1.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>FEATURES PROGRAMMED</h2>

          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/ch/render2.png" style={{width:"300px"}}></img>
            </div>
            <div class="overlayBlurbDivP">
              <p>Basic platforming and enemy-player hitbox/hurtbox interaction</p>
              <p>Color filter switching (visually and mechanically enabling certain platforms, enemies depending on filtered screen color)</p>
              <p>Shader-based transitions, color filters, and attack visuals</p>
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