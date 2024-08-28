import React from 'react';
import AnimatedPage from './AnimatedPage';
import DogCollabBanner from '../components/DogCollabBanner';
import ImageBlurbPair from '../components/ImageBlurbPair';
import Break from '../components/Break'

import "./pages.css"

const Home = () => {
  return (
    <AnimatedPage>
      <div
        style={{
          justifyContent: 'centre',
          alignItems: 'centre',
        }}
      >
      
        <p style={{fontFamily: 'Acme', fontSize: "96px", marginTop: "-10px", marginBottom: "10px"}}>Welcome to my website!</p>

        <DogCollabBanner/>
        <Break h = "50px"/>

        {/* <div class="bigVideoContainer"> */}
          <iframe /*width="960vh" height="540vh"*/ src="https://www.youtube.com/embed/RQ4kvmQAZD8" class="bigVideo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {/* </div> */}

        <a style={{textAlign: "center", fontSize: "50px"}} href="https://romhacking.com/hack/Dog-Collab"><h2>Download Now!</h2></a>

        <ImageBlurbPair
          imgSide = {"l"}
          imgPath = {"projects/dc/dcm1.png"}
          header = {"Save Peach in an\nAll-New Mario Adventure!"}
          blurb = {"Bowser has taken Peach again, but in this evolution of classic Mario 64, you'll have to travel the whole world to get her back!"}
        />
        <ImageBlurbPair
          imgSide = {"r"}
          imgPath = {"projects/dc/dcm2.png"}
          header = {"Travel with a Canine Companion!"}
          blurb = {"Your trusty pet dog will accompany you in every level. He can dig up treasure, open doors, give you a ride, and much more!"}
        />
        <ImageBlurbPair
          imgSide = {"l"}
          imgPath = {"projects/dc/dcm3.png"}
          header = {"Unique Levels from Talented Creators!"}
          blurb = {"Collect over 70 stars in over 10 levels crafted by established ROM hackers, with all sorts of custom mechanics and gimmicks!"}
        />

        <p style={{fontSize:"36px"}}>Check out my <a href="/#/projects">other projects!</a></p>
      </div>
    </AnimatedPage>
  );
};

export default Home;