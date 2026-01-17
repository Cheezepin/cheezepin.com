import React, {useState, useEffect, Component} from 'react';
import AnimatedPage from "./AnimatedPage";
import Ononoki from '/src/components/Ononoki';
import "./pages.css";
import "./tagdreel.css"
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";
import Toggle from 'react-toggle'
import "react-toggle/style.css"

import { render } from 'react-dom';
import { animate } from 'framer-motion';

class TAGDReelButton extends Component {
    constructor(props) {
        super(props);

        this.name = this.props.name;
        this.vidFunc = this.props.vidFunc;
        this.indexFunc = this.props.indexFunc;
        this.file = this.props.file;
        this.parentTop =  this.props.pTop;
        this.state = {
            count: this.props.id,
            id: this.props.id,
            xVal: 0,
        };

        this.interval = 0;

        // this.animateButton = this.animateButton.bind(this);
        // this.stopAnimatingButton = this.stopAnimatingButton.bind(this);
    }

    buttonCurve(y) {
        // let x = (top - y + pivot);
        // let yCenter = 
        // x*=x;
        // x /= 200;
        // x += 20;
        let pivot = 315;
        let top = this.parentTop();
        // let top = 437.8999938964844;
        let yEl = (y-top) + 75;
        let x = 0;
        let yOffset = yEl - pivot;
        x = yOffset*yOffset * 0.005;
        x += 30;
        return x;
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                xVal: this.buttonCurve(this.top),
            });
            this.prevTop = this.top;
        }, 100);
    }

    updateX() {
        if(this.prevTop != this.top) {
            this.setState({
                xVal: this.buttonCurve(this.top),
            });
            this.prevTop = this.top;
        }
    }

    render() {
        const clickFunction = (e) => {
            this.vidFunc(this.file);
            this.indexFunc(this.state.id);
            document.getElementById("player").addEventListener('loadedmetadata', function() {
            this.currentTime = 5000;
            }, false);
        };

        return <div style={{width: "60%",
            float: "right",
            right: this.state.xVal,
            height:"150px",
            display:"flex",
            position: "relative",alignItems: "center"}}
            key={this.state.count}>
                    <button className="reelbutton"
                    onClick={clickFunction}  
                    ref={el => {
                    if (!el) return;

                    // this.top = el.getBoundingClientRect().top + 25;
                    if(this.interval != 0) clearInterval(this.interval); //surely this will not cause issues later
                    this.interval = setInterval(() => {
                        this.top = el.getBoundingClientRect().top;
                        this.updateX();
                    }, 1);
                    }}
                    >
                    <h2 style={{margin:"auto",color:"white",lineHeight:"40px"}}>{this.name}</h2>
                    </button>
            </div>
    }
}

class ButtonWheel extends Component {
    constructor(props) {
        super(props);

        this.switchFunc = this.props.switchFunc;
        this.numButtons = this.props.numButtons;

        this.state = {
            flipped: true,
            index: 0,
            y: -75,
            top:0,
        };

        // this.myFunction = this.myFunction.bind(this);
        this.setIndex = this.setIndex.bind(this);
        this.forceIndex = this.forceIndex.bind(this);
        this.getTop = this.getTop.bind(this);

        this.startAutoscroll = this.startAutoscroll.bind(this);
        this.endAutoscroll = this.endAutoscroll.bind(this);
        this.clickAll = this.clickAll.bind(this);

        this.buttons = 
            [
                <TAGDReelButton key="t" id={"-2"} pTop={this.getTop} vidFunc={this.switchFunc} indexFunc={this.forceIndex}
                    file={"dino"}   name={"They All Come Back"}         credits={"Eden Kim"}/>,
                <TAGDReelButton key="s" id={"-1"} pTop={this.getTop} vidFunc={this.switchFunc} indexFunc={this.forceIndex}
                    file={"time"}   name={"Timeborn"}                   credits={"Jacob Gislason"}/>,
                <TAGDReelButton key="0" id={"0"}  pTop={this.getTop} vidFunc={this.switchFunc} indexFunc={this.forceIndex}
                    file={"battle"} name={"Battle Against Time"}        credits={"Andre Martinez, Alberik Ibarra, Kade Melancon, Remzi Konar"}/>,
                <TAGDReelButton key="1" id={"1"}  pTop={this.getTop} vidFunc={this.switchFunc} indexFunc={this.forceIndex}
                    file={"dead"}   name={"Dead Lead"}                  credits={"Elias Ortiz, Alfredo Castro-Rosas, Jonathan Tregre, Thomas Mikel, Jeremy Carrera"}/>,
                <TAGDReelButton key="2" id={"2"}  pTop={this.getTop} vidFunc={this.switchFunc} indexFunc={this.forceIndex}
                    file={"doom"}   name={"Doomdash"}                   credits={"Titan Tillman, Gabriel Lundin, Tristan Seelig"}/>,
                <TAGDReelButton key="3" id={"3"}  pTop={this.getTop} vidFunc={this.switchFunc} indexFunc={this.forceIndex}
                    file={"faeshu"} name={"Faeshu"}                     credits={"Peter Nguyen"}/>,
                <TAGDReelButton key="4" id={"4"}  pTop={this.getTop} vidFunc={this.switchFunc} indexFunc={this.forceIndex}
                    file={"flush"}  name={"Flush with Justice"}         credits={"Sriram Gaddam, Seth Pinto, Ilter Ulutas, Elijah Mendoza"}/>,
                <TAGDReelButton key="5" id={"5"}  pTop={this.getTop} vidFunc={this.switchFunc} indexFunc={this.forceIndex}
                    file={"hoa"}    name={"Home Owners' Asssassination"} credits={"Blake de Armas, Avery Althaus, Benjamin Kumar, Grayson Byczek, Bryceton West"}/>,
                <TAGDReelButton key="6" id={"6"}  pTop={this.getTop} vidFunc={this.switchFunc} indexFunc={this.forceIndex}
                    file={"robo"}   name={"Robo-Detective Cable Whip"}  credits={"Nathaniel Shipman, Liam Searing, Hugo De Vaz Contreiras, Isabelle Chan Tack"}/>,
                <TAGDReelButton key="7" id={"7"}  pTop={this.getTop} vidFunc={this.switchFunc} indexFunc={this.forceIndex}
                    file={"selva"}  name={"Selva"}                      credits={"Isaac Lagoy, Jonah Coffelt"}/>,
                <TAGDReelButton key="8" id={"8"}  pTop={this.getTop} vidFunc={this.switchFunc} indexFunc={this.forceIndex}
                    file={"voice"}   name={"The Voices"}                credits={"Rowan Banerjee"}/>,
                <TAGDReelButton key="9" id={"9"}  pTop={this.getTop} vidFunc={this.switchFunc} indexFunc={this.forceIndex}
                    file={"dino"}   name={"They All Come Back"}         credits={"Eden Kim"}/>,
                <TAGDReelButton key="10" id={"10"}  pTop={this.getTop} vidFunc={this.switchFunc} indexFunc={this.forceIndex}
                    file={"time"}   name={"Timeborn"}                   credits={"Jacob Gislason"}/>,
                <TAGDReelButton key="e" id={"11"}  pTop={this.getTop} vidFunc={this.switchFunc} indexFunc={this.forceIndex}
                    file={"battle"} name={"Battle Against Time"}        credits={"Andre Martinez, Alberik Ibarra, Kade Melancon, Remzi Konar"}/>,
                <TAGDReelButton key="f" id={"12"}  pTop={this.getTop} vidFunc={this.switchFunc} indexFunc={this.forceIndex}
                    file={"dead"}   name={"Dead Lead"}                  credits={"Elias Ortiz, Alfredo Castro-Rosas, Jonathan Tregre, Thomas Mikel, Jeremy Carrera"}/>,
            ];
        
    }

    calcYOffIndex(ind) {return ind*-150 - 75;}

    moveY() {
        let targetY = this.calcYOffIndex(this.state.index);
        let nextY = this.state.y;
        let speed = 5;
        if(targetY > this.state.y) {
            nextY = this.state.y + speed;
            this.setState({y: nextY});
        } else if(targetY < this.state.y) {
            nextY = this.state.y - speed;
            this.setState({y: nextY});
        } else {clearInterval(this.yInterval);}

        if(nextY > 0) {
            nextY -= this.numButtons*150;
            this.setState({
                y: nextY,
                index: parseInt(this.state.index) + this.numButtons,
            });
        }

        if(nextY < -this.numButtons*150) {
            nextY += this.numButtons*150;
            this.setState({
                y: nextY,
                index: parseInt(this.state.index) - this.numButtons,
            });
        }
    }

    setIndex(ind) {
        ind = parseInt(ind);
        this.setState({index: ind});
        this.yInterval = setInterval(() => {
            this.moveY();
        }, 1);
        document.getElementById("name").textContent = this.buttons[(ind%this.numButtons) + 2].props.name;
        document.getElementById("credits").textContent = "Created by " + this.buttons[(ind%this.numButtons) + 2].props.credits;
    }

    forceIndex(ind) {
        this.setIndex(ind);
        clearInterval(this.autoInterval);
        // this.autoFunc(false);
    }

    startAutoscroll() {
        clearInterval(this.autoInterval)
        this.autoInterval = setInterval(() => {
            this.autoScroll();
        }, 1000);
    }

    endAutoscroll() {
        clearInterval(this.autoInterval);
    }

    componentDidMount() {
        clearInterval(this.autoInterval);
        this.setState({y:-75});
        // if(this.autoplaying)
        //     this.startAutoscroll();
        // else
        //     this.endAutoscroll();
    }

    autoScroll() {
        this.setIndex(parseInt(this.state.index)+1);
        this.switchFunc(this.buttons[(this.state.index%this.numButtons) + 3].props.file);
    }

    getTop() {
        return this.state.top;
    }

    clickAll() {
        this.switchFunc("all");
        document.getElementById("name").textContent = "";
        document.getElementById("credits").textContent = "";
    }

    render() {
        const clipdiv = {
            overflow: "hidden",
            width: "100%",
            height: "600px",
            flexShrink: "0",

            mask: `linear-gradient(to bottom, rgba(0,0,0, 0) 0,  
             rgba(0,0,0, 1) 20%, rgba(0,0,0, 1) 80%, rgba(0,0,0, 0) 100%) 100% 50% / 100% 100% 
             
             repeat-x`,

             position: "relative",
             animation: "slideIn 0.8s ease-in-out forwards"
        };

        const wheel = {
            position: "relative",
            // top: "-800px",
            // animation: "reelDown 0.4s linear forwards",
        }

            // buttons.sort((a, b) => this.state.flipped ? a.key - b.key : b.key - a.key)
            let sortedButtons = this.buttons;
            // for(let i = 0; i < this.state.index+1; ++i) {
            //     sortedButtons.unshift(sortedButtons.pop());
            // }

    return <div style={clipdiv}
            ref={el => {
                if (!el) return;
                if(this.interval != 0) clearInterval(this.interval); //surely this will not cause issues later
                this.interval = setInterval(() => {
                    this.setState({top: el.getBoundingClientRect().top});
                }, 1);
            }}
            >
        <div style={{position:"relative", top:this.state.y}}>
            {sortedButtons.map(b => b)}
            {/* <TestButton/> */}
        </div>
        <button className='tempbackbutton' onClick={() => {this.clickAll()}}>
            <h2 style={{lineHeight:0,height:0}}>See All</h2>
        </button>
    </div>
    }
}

class TestButton extends Component {
    constructor(props) {
        super(props);

        this.interval = 0;

        this.state = {
            x: 100,
            y: 0,
            top: 0,
            count: 0,
            currentTime: Date.now(),
            lastTime: Date.now(),
        };
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        clearInterval(this.interval2);
    }

    updateX() {
        this.setState({
            currentTime: Date.now(),
            count: this.state.count + (Date.now() - this.state.lastTime),
            lastTime: this.state.currentTime,
            y: 100*Math.sin(this.state.count*0.001),
        });

        if(this.prevTop != this.top) {
            this.setState({
                x: (this.top*this.top)/10000.0,
            });
            this.prevTop = this.top;
        }
    }

    render() {
        return <div
        style={{display:"block",float:"right",position: "relative",
            top:this.state.y, right:this.state.x}}

            ref={el => {
                if (!el) return;
                if(this.interval2 != 0) clearInterval(this.interval2); //surely this will not cause issues later
                this.interval2 = setInterval(() => {
                    this.top = el.getBoundingClientRect().top;
                    this.updateX();
                }, 1);
            }}
        >
            <button style={{width:"500px",height:"500px"}}
        onClick={() => {alert(this.state.x);}}>yo
            </button></div>
    }
}

const ReelGlobalStyle = createGlobalStyle`
  body {
    background: rgba(77, 85, 126, 1);
    background-image: url("/assets/tagdbg2.png");
    margin = 0;
    padding = 0;
    overflow:hidden;
    width:100%;
  }
  
  p {
    font-family: "Source Code Pro", monospace;
    font-optical-sizing: auto;
    /* font-weight: <weight>; */
    font-style: normal;
    color: white;
    }

    h1 {
    font-family: "Source Code Pro", monospace;
    font-optical-sizing: auto;
    font-weight: 20px;
    font-style: normal;
    color: white;
    }`;

const TAGDReel = () => {
    const [videoSource, switchVideo] = useState("all");
    // const [autoplaying, changeAutoplay] = useState(true);

    const wheels = [
        <ButtonWheel numButtons={11} switchFunc={switchVideo}/>
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
                    <p>Informational & Jam Theme Reveal Sep. 4th<br/> @ ARCC 207!</p>
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
                        <p>Spring '25 Jam: It All Comes Back</p>
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

export default TAGDReel;