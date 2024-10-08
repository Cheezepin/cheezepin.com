import React from 'react';
import AnimatedPage from "./AnimatedPage";
import Ononoki from '/src/components/Ononoki';
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";

import resumePDF from '/src/assets/JasonLev_Resume.pdf'

const ResumeGlobalStyle = createGlobalStyle`
  body {
    background-image: none;
    background: rgb(30,30,30);
    margin = 0;
    padding = 0;
    overflow-x:clip;
    width:100%;
  }`

const Header = styled.h1`
    color: white;
`;

const Resume = () => {
  return (
    <>
        <ResumeGlobalStyle/>
        <div style={{
            justifyContent: 'centre',
            alignItems: 'centre',
            fontSize:"30px",
        }}
        >

        <Header>Jason Lev</Header>
        <embed src={resumePDF} width="70%" height="800vh" 
        type="application/pdf"></embed>
        <h1 class="centerheader">I'm <i>Cheezepin.</i></h1>
        <div style={{
          fontFamily:"Arial",
          textShadow: "gray 2px 2px 4px",
          marginLeft:"10%",
          marginRight:"10%",
          textAlign:"left",
        }}>
          <p>I'm a game designer and game modder, as well as an occassional content creator. I've dabbled in programming all my life, but only around 2017 did I start releasing my Super Mario 64 mods. <a href="https://sites.google.com/view/rom-hack-competition-stats/home">I've placed highly in</a> and <a href="https://docs.google.com/spreadsheets/d/18p4knd6Kc0cmOnlxgvV78ESeJgkx7GfRPFnqCUTdxFo/edit#gid=362367167">even won</a> SimpleFlips ROM Hacking competitions, and I've released & worked on plenty of <a href="projects">personal projects</a>. I'm fluent in C, C#, and MIPS Assembly with experience in C++, Python, HTML, CSS, and JS, specifically React.JS (which I used to build this site!). I also have proficiency in SketchUp, Blender, and Sony Vegas for creating media, and I've worked in Unity, Godot, and MonoGame extensively.</p>
          <p>Outside of programming, I'm an active rock climber, actor, gardener, and pianist. I also am a habitual project-planner, so inside the game development sphere and out, you can never be quite sure what I'm up to.</p>
          <p>My links are <a href="/#/contact">here.</a></p>
        </div>
        </div>
    </>
  );
};

export default Resume;