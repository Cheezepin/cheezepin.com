import React from 'react';
import Ov from './Ov';
import "./overlays.css"

import bg from "/assets/projects/haw/bg.png"

class OvHaw extends Ov {
  render() {
    return (
        <div class="overlayDiv" style={{background:`url(${bg}), #FFF2B0`, backgroundSize:"100%", backgroundRepeat:"no-repeat"}}ref={this.wrapperRef}>
          <h1 class="centerheader">House Always Wins</h1>

          <iframe frameborder="0" src="https://itch.io/embed/4312589" width="552" height="167"><a href="https://cheezepin.itch.io/the-house-always-wins">House Always Wins by Cheezepin, Anna18251, sophiaGuzman774, Ashlyn De Leon</a></iframe>

          <h2>WALKTHROUGH</h2>
          <iframe class="overlayVideo" width="640px" height="360px" src="https://www.youtube.com/embed/jJxiyXn4b7w?si=WCMuQIG6IlpG9wNl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2>INFO</h2>
          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivP exMarg">
              <p>Release Date: Feb. 22nd, 2025</p>
              <p>Language: C#</p>
              <p>Engine: Godot</p>
              <p>Programming, game design by Jason Lev</p>
              <p>2D Art (including art used on this page) by <a href="https://www.linkedin.com/in/ashlyn-de-leon-88058934b/">Ashlyn De Leon</a>, 3D Art by <a href="https://www.linkedin.com/in/sophia-guzman-5779002ba/">Sophia Guzman</a> and <a href="https://www.linkedin.com/in/annabella-quesada-aaa07728b/">Annabella Quesada</a></p>
              <p>Designed in 40 hours for Chillennium '26 with theme "Nah, I'd Win"</p>
              <p>Winner of Best in Theme</p>
            </div>
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/haw/render1.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>FEATURES PROGRAMMED</h2>

          <div class="overlayBlurbDiv">
            <div class="overlayBlurbDivImg">
              <img src="/assets/projects/haw/render2.png" style={{width:"300px"}}></img>
            </div>
            <div class="overlayBlurbDivP">
              <p>Full blackjack simulation with automatic dealing and score calculation, handling all edge cases</p>
              <p>NPC AIs with personalities determining their behaviors, game actions, and dialog</p>
              <p>Collision and sight-line mechanics to interrupt blackjack gameplay</p>
              <p>Animated day/night cycle to sync with game progress</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          {/* <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}> */}
            <img class="galleryImg" src="/assets/projects/haw/gallery/1.png"></img>
            <img class="galleryImg" src="/assets/projects/haw/gallery/2.png"></img>
            <img class="galleryImg" src="/assets/projects/haw/gallery/3.png"></img>
            <img class="galleryImg" src="/assets/projects/haw/gallery/4.png"></img>
            <img class="galleryImg" src="/assets/projects/haw/gallery/5.png"></img>
          {/* </div> */}
        </div>
    );
  }
};

export default OvHaw;