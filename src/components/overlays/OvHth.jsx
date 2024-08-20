import React from 'react';
import Ov from './Ov';
import "./overlays.css"

// import bg from "/projects/gs/bg.png"

export default class OvHth extends Ov {
  render() {
    return (
        <div class="overlayDiv invert" style={{background:`linear-gradient(rgb(30, 0, 30), rgb(0, 0, 30))`, backgroundSize:"50%"}}ref={this.wrapperRef}>
          <h1 class="centerheader">The Hole to Hyrule</h1>

          <h2><a href="https://romhacking.com/hack/the-hole-to-hyrule">DOWNLOAD</a></h2>

          <h2>TRAILER</h2>
          <iframe class="overlayVideo" width="640px" height="360px" src="https://www.youtube.com/embed/35tsqz0SoJQ?si=cRQYuMyQJ4YtEKOS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2>INFO</h2>
          <div style={{display:"flex"}}>
            <div style={{width:"60%", marginLeft:"5%"}}>
              <p>Super Mario 64 ROM Hack</p>
              <p>Release Date: Oct. 14th, 2020</p>
              <p>Programming, level design, modeling, writing by Cheezepin</p>
              <p>Concept, artwork, voice acting by HeroTechne</p>
              <p>Music by Thorndust, additional voices by Victuracor</p>
              <p>3rd place in the RHDC Zelda Hacks competition</p>
            </div>
            <div style={{width:"30%"}}>
              <img src="/projects/hth/render1.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>MARIO EXPLORES A ZELDA WORLD!</h2>

          <div style={{display:"flex"}}>
            <div style={{width:"30%"}}>
              <img src="/projects/hth/render2.png" style={{width:"300px"}}></img>
            </div>
            <div style={{width:"60%"}}>
              <p>At Peach's request, Mario explores a hole in the Mushroom Kingdom that leads straight to Hyrule. With the help of the fairy Aeros, Mario must find the villain Vaati in his temple and bring peace back to Hyrule. With six items across two dungeons and an overworld, plenty of Zelda mechanics are fleshed out in classic Mario gameplay.</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}>
            <img class="galleryImg" src="/projects/hth/gallery/1.png"></img>
            <img class="galleryImg" src="/projects/hth/gallery/2.png"></img>
            <img class="galleryImg" src="/projects/hth/gallery/3.png"></img>
            <img class="galleryImg" src="/projects/hth/gallery/4.png"></img>
            <img class="galleryImg" src="/projects/hth/gallery/5.png"></img>
          </div>
        </div>
    );
  }
};