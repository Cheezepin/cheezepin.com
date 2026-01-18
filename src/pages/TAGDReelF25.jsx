import React, {useState, } from 'react';
import {ReelGlobalStyle, ButtonWheel } from './TAGDReel'

const TAGDReelF25 = () => {
    const [videoSource, switchVideo] = useState("all");
    // const [autoplaying, changeAutoplay] = useState(true);

    const buttons = [
        {id:-2, file:"dino",   name:"Shen Kuno",              credits:"Peter Nguyen"},
        {id:-1, file:"time",   name:"What Lies West",         credits:"Elijah Mendoza, Seth Pinto, Sriram Gaddam, Ilter Ultas"},
        {id:0,  file:"battle", name:"Black Dice",             credits:"Tyler Wilkes, Blaine Muher"},
        {id:1,  file:"dead",   name:"Coin Action Platformer", credits:"Samuel Espen"},
        {id:2,  file:"doom",   name:"Crumple Quest",          credits:"Jonah Coffelt, Issac Lagoy, Eden Kim, Hanna Harmon"},
        {id:3,  file:"faeshu", name:"Dimensional Duel",       credits:"Asher Blevins, Amy Burgess"},
        {id:4,  file:"flush",  name:"Flip-Off",               credits:"Alfredo Castro-Rosas, Elias Ortiz, Thomas Mikel, Asia Erwin, Ahmed Albsharat"},
        {id:5,  file:"hoa",    name:"Flippen Flowers",        credits:"Andrew Ward"},
        {id:6,  file:"robo",   name:"F³",                     credits:"Emily Gonzalez, Jason Lev, Kyle Lev, Karen Lopez, Chi-Chi Zhang"},
        {id:7,  file:"selva",  name:"Gears of Dissent",       credits:"Jacob Gislason"},
        {id:8,  file:"voice",  name:"Glorp Ordeal",           credits:"Joe Dootson, Seungbin Ahn"},
        {id:9,  file:"dino",   name:"Raveyard",               credits:"Avery Althaus, Grayson Byczek, Cole Greinke, Ben Kumar, Amina Monk"},
        {id:10, file:"time",   name:"See You",                credits:"Mary Anna Barkley, Katherine Barkley, Tran Huynh"},
        {id:11, file:"battle", name:"Shen Kuno",              credits:"Peter Nguyen"},
        {id:12, file:"dead",   name:"What Lies West",         credits:"Elijah Mendoza, Seth Pinto, Sriram Gaddam, Ilter Ultas"},
        {id:13, file:"dino",   name:"Black Dice",             credits:"Tyler Wilkes, Blaine Muher"},
        {id:14, file:"time",   name:"Coin Action Platformer", credits:"Samuel Espen"},
    ];

    const wheels = [
        <ButtonWheel bs={buttons} numButtons={13} switchFunc={switchVideo}/>
    ];

    // useEffect(updateAutoplayToggle);

    function updateAutoplayToggle() {
        console.log("effect");
        // document.getElementById("autoplayToggle").checked = autoplaying;
    }

    function handleAutoplayToggle() {
        changeAutoplay(document.getElementById("autoplayToggle").checked);
    }

    let videoPath = `/assets/videos/${videoSource}.mp4`;
    return (
        <div style={{
            justifyContent: 'centre',
            alignItems: 'centre',
            fontSize:"30px",
            height:"100vh",
            overflow:"hidden",
            marginTop:"-25px",
        }}
        >
            <ReelGlobalStyle/>
            <div style={{display:"flex",height:"30vh"}}>
                <div style={{width:"20%",margin:"auto"}}>
                    <p>Texas Aggie Game Developers</p>
                    <p>Informational & Jam Theme Reveal 1/22<br/> @ ARCC 207!</p>
                </div>
                <div style={{width:"55%",margin:"auto"}}>
                    <img style={{width:"45%",margin:"auto"}}src="/assets/tagdlogo.png"/>
                    {/* <h1 style={{lineHeight:"2px"}}>Texas Aggie Game Developers</h1> */}
                </div>
                <div style={{width:"20%",margin:"auto"}}>
                    <br/>
                    <img style={{}}src="/assets/tagdqr.jpg"/>
                    <p>Join our Discord!</p>
                </div>
            </div>
            <div style={{display:"flex",height:"70vh"}}>
                <div style={{display:"flex",width:"40%",height:"70vh",margin:"auto",alignItems: "center",
                    flexDirection:"column",verticalAlign:"center",justifyContent:"center"}}>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <div>
                            {/* <Toggle
                        id='autoplayToggle'
                        onChange={handleAutoplayToggle}
                        defaultChecked={true}
                        /> */}
                        </div>
                        <p>Fall '25 Jam: On the Flip Side</p>
                    </div>
                    {wheels[0]}
                    {/* <div style={{width:"100%"}}><button style={{width:"50%",height:"100%"}}>Autoplay: Off</button></div> */}
                </div>
                <div style={{width:"60%",margin:"auto",display:"flex",alignItems: "center",justifyContent:"center",
                    flexDirection:"column",height:"70vh"}}>
                    <div><h1 style={{lineHeight:"0"}} id="name"></h1></div>
                    <video style={{borderRadius:"20px",boxShadow: "8px 8px 16px black"}} id="player"
                        width="90%" height={"auto"} autoPlay={true} muted={true} loop={true} key={videoPath} disablePictureInPicture={true}>
                        <source type="video/mp4" id="videoPlayer" src={videoPath}/>
                    </video>
                    <div style={{display:"block",margin:"auto"}}><p style={{margin:"auto",lineHeight:"30px", textWrap:"wrap"}} id="credits"></p></div>
                </div>
            </div>
        </div>
  );
};

export default TAGDReelF25;