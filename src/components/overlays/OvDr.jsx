import React from 'react';
import Ov from './Ov';
import "./overlays.css"

// import bg from "/projects/gs/bg.png"

export default class OvDr extends Ov {
  render() {
    return (
        <div class="overlayDiv invert" style={{background:`linear-gradient(rgb(50, 0, 0), rgb(30, 30, 30))`, backgroundSize:"50%"}}ref={this.wrapperRef}>
          <h1 class="centerheader">Danganronpa 64</h1>

          <h2><a href="https://romhacking.com/hack/danganronpa-64">DOWNLOAD</a></h2>

          <h2>TRAILER</h2>
          <iframe class="overlayVideo" width="640px" height="360px" src="https://www.youtube.com/embed/aka9qFTmXWI?si=wghv4YDKKfHh3Ymo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2>INFO</h2>
          <div style={{display:"flex"}}>
            <div style={{width:"60%", marginLeft:"5%"}}>
              <p>Super Mario 64 ROM Hack</p>
              <p>Release Date: Jan. 9th, 2020</p>
              <p>Concept, organization, programming, level design, by Cheezepin</p>
              <p>Writing by Cheezepin and QJRocks</p>
              <p>Music by mrcool909090 and QJRocks</p>
              <p>Character art by fishy and SPK</p>
              <p>Character models by kurethedead and Daku</p>
              <p>2nd place in the RHDC Mystery Hacks competition</p>
            </div>
            <div style={{width:"30%"}}>
              <img src="/projects/dr/render1.png" style={{width:"300px"}}></img>
            </div>
          </div>

          <h2>A MYSTERY LOCKED WITHIN THE CASTLE!</h2>

          <div style={{display:"flex"}}>
            <div style={{width:"30%"}}>
              <img src="/projects/dr/render2.png" style={{width:"300px"}}></img>
            </div>
            <div style={{width:"60%"}}>
              <p>Mario wakes up inside Peach's Castle, surrounded by fifteen of the most skilled individuals in the Mushroom Kingdom. With no escape, they learn from the head honcho Monobup they're all part of a killing game, and no one can leave until one person kills another. With tensions running high and discord growing, will Mario and the gang be able to solve the mysteries of the castle--or a murder--and escape?</p>
              <p>NOTE: This is a demo, but plans to finish the story have been discontinued.</p>
            </div>
          </div>

          <h2>GALLERY</h2>
          <div style={{display:"flex", overflowX:"scroll", overflowY:"clip", height: "400px", marginBottom:"50px"}}>
            <img class="galleryImg" src="/projects/dr/gallery/1.png"></img>
            <img class="galleryImg" src="/projects/dr/gallery/2.png"></img>
            <img class="galleryImg" src="/projects/dr/gallery/3.png"></img>
            <img class="galleryImg" src="/projects/dr/gallery/4.png"></img>
            <img class="galleryImg" src="/projects/dr/gallery/5.png"></img>
          </div>
        </div>
    );
  }
};