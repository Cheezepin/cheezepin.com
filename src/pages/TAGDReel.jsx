import React, {useState, useEffect, Component} from 'react';
import AnimatedPage from "./AnimatedPage";
import Ononoki from '/src/components/Ononoki';
import "./pages.css";
import "./tagdreel.css"
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";

import { render } from 'react-dom';
import { animate } from 'framer-motion';

class TAGDReelButton extends Component {
    constructor(props) {
        super(props);

        this.name = this.props.name;
        this.vidFunc = this.props.vidFunc;
        this.indexFunc = this.props.indexFunc;
        this.file = this.props.file;
        this.parentTop =  this.props.parentTop;
        this.state = {
            count: this.props.id,
            id: this.props.id,
            xVal: 0,

            animateID: 0,
            stopID: 0,
        };

        this.animateButton = this.animateButton.bind(this);
        this.stopAnimatingButton = this.stopAnimatingButton.bind(this);
    }

    buttonCurve(top, y, pivot) {
        let x = (top - y + pivot);
        x*=x;
        x /= 200;
        return x;
        return 0;
    }

    animateButton() {
        this.state.animateID = setInterval(() => {
            // this.setState({ count: this.state.count + 1 });
            this.state.xVal = this.buttonCurve(300, this.top, 300);
        }, 1);
        this.state.stopID = setInterval(this.stopAnimatingButton, 400);
        // console.log("animating " + this.state.id);
    }

    stopAnimatingButton() {
        console.log("done!");
        clearInterval(this.state.animateID);
        clearInterval(this.state.stopID);
        this.state.animateID = 0;
        this.state.stopID = 0;
    }

    componentDidMount() {
        this.animateButton();
        this.state.xVal = this.buttonCurve(300, this.top, 300);
        // this.forceUpdate();
    }

    componentDidUpdate() {
        // this.state.xVal = this.buttonCurve(300, this.top, 300);
        if(this.state.animateID == 0) this.animateButton();
    }

    render() {
        const clickFunction = (e) => {
            this.vidFunc(this.file);
            this.indexFunc(this.state.id);
            this.animateButton();
            // this.props.myFunction("5");
            // alert(this.top);
            // this.xVal = this.top;
            // this.forceUpdate();
        };

        return <div style={{width: "60%",
            float: "right",
            right: this.state.xVal,
            height:"200px",
            display:"block",
            position: "relative",}}
            key={this.state.count}>
                    <button style={{width:"100%",fontSize:"100%",borderRadius:"20px",boxShadow: "8px 8px 16px black",
                        height:"180px",
                    }}
                    onClick={clickFunction}  
                    ref={el => {
                    if (!el) return;

                    // console.log(el.getBoundingClientRect().width); // prints 200px
                    this.top = el.getBoundingClientRect().top + 25;
      }}
      >
                    <p style={{margin:"auto",color:"black"}}>{this.name}</p>
                    </button>
            </div>
    }
}

class ButtonWheel extends Component {
    constructor(props) {
        super(props);

        this.switchFunc = this.props.switchFunc;

        this.state = {
            flipped: true,
            index: 0,
        };

        // this.myFunction = this.myFunction.bind(this);
        this.setIndex = this.setIndex.bind(this);
    }

    // myFunction(param){
    //     console.log('do something: ', param);
    // }

    // testFunc() {
    //     this.state.flipped = (this.state.flipped) ? false : true;
    //     this.forceUpdate();
    // }

    setIndex(ind) {
        // alert(this.state.flipped);
        console.log(ind);
        this.setState({index: ind});
        // alert(ind + "  " + this.state.index);
        // this.forceUpdate();
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.testFunc();
        // }, 1000);
    }

    render() {
        const clipdiv = {
            overflow: "hidden",
            width: "100%",

            mask: `linear-gradient(to bottom, rgba(0,0,0, 0) 0,  
             rgba(0,0,0, 1) 20%, rgba(0,0,0, 1) 80%, rgba(0,0,0, 0) 100%) 100% 50% / 100% 100% 
             
             repeat-x`,
        };

        const wheel = {
            position: "relative",
            // top: "-800px",
            // animation: "reelDown 0.4s linear forwards",
        }

        /*return <div>
                    <TAGDReelButton func={this.switchFunc} file={"battle"} name={"Battle Against Time"}/>
                    <TAGDReelButton func={this.switchFunc} file={"dead"}   name={"Dead Lead"}/>
                    <TAGDReelButton func={this.switchFunc} file={"doom"}   name={"Doomdash"}/>
                    <TAGDReelButton func={this.switchFunc} file={"faeshu"} name={"Faeshu"}/>
                    <TAGDReelButton func={this.switchFunc} file={"flush"}  name={"Flush with Justice"}/>
                    <TAGDReelButton func={this.switchFunc} file={"hoa"}    name={"Home Owners Assassination"}/>
                    <TAGDReelButton func={this.switchFunc} file={"robo"}   name={"Robo-Detective Cable Whip"}/>
                    <TAGDReelButton func={this.switchFunc} file={"selva"}  name={"Selva"}/>
                    <TAGDReelButton func={this.switchFunc} file={"voice"}  name={"The Voices"}/>
                    <TAGDReelButton func={this.switchFunc} file={"dino"}   name={"They All Come Back"}/>
                    <TAGDReelButton func={this.switchFunc} file={"time"}   name={"Timeborn"}/>
            </div>*/

            const buttons = [
                <TAGDReelButton key="0" id={"0"} vidFunc={this.switchFunc} indexFunc={this.setIndex} file={"battle"}   name={"1"}/>,
                <TAGDReelButton key="1" id={"1"} vidFunc={this.switchFunc} indexFunc={this.setIndex} file={"dead"}   name={"2"}/>,
                <TAGDReelButton key="2" id={"2"} vidFunc={this.switchFunc} indexFunc={this.setIndex} file={"doom"}   name={"3"}/>,
                <TAGDReelButton key="3" id={"3"} vidFunc={this.switchFunc} indexFunc={this.setIndex} file={"faeshu"}   name={"4"}/>,
                <TAGDReelButton key="4" id={"4"} vidFunc={this.switchFunc} indexFunc={this.setIndex} file={"flush"}   name={"5"}/>,
                <TAGDReelButton key="5" id={"5"} vidFunc={this.switchFunc} indexFunc={this.setIndex} file={"hoa"}   name={"6"}/>,
                <TAGDReelButton key="6" id={"6"} vidFunc={this.switchFunc} indexFunc={this.setIndex} file={"robo"}   name={"7"}/>,
                <TAGDReelButton key="7" id={"7"} vidFunc={this.switchFunc} indexFunc={this.setIndex} file={"selva"}   name={"8"}/>,
            ]

            // buttons.sort((a, b) => this.state.flipped ? a.key - b.key : b.key - a.key)
            let sortedButtons = buttons;
            for(let i = 0; i < this.state.index+1; ++i) {
                sortedButtons.unshift(sortedButtons.pop());
            }

    return <div style={clipdiv}>
        <div style={wheel}>
            {/* {sortedButtons.map(b => b)} */}
            <TestButton/>
        </div>
    </div>
    }
}

class TestButton extends Component {
    constructor(props) {
        super(props);

        this.interval = 0;

        this.state = {
            x: 100,
            count: 0,
            currentTime: Date.now(),
            lastTime: Date.now(),
        };
    }

    componentDidMount() {
        if(this.interval == 0) this.interval = setInterval(() => {
            // this.setState({ count: this.state.count + 1 });
            this.updateX();
        }, 1);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        console.log("cleared!");
    }

    updateX() {
        // console.log(this.state.count);
        // this.state.x = 100*Math.sin(this.state.count*0.05) + 100;
        // console.log(this.state.x);
        this.setState({
            currentTime: Date.now(),
            count: this.state.count + (Date.now() - this.state.lastTime),
            lastTime: this.state.currentTime,
            x: 100*Math.sin(this.state.count*0.05) + 100,
        });
        // this.forceUpdate();
    }

    pollX (el) {
        let nextValue = JSON.stringify(el.getBoundingClientRect());
        if (nextValue === this.prevValue) {
            clearInterval(this.handle);
            console.log(
            `x stopped changing. final width:`,
            el.getBoundingClientRect().right
            );
        } else {
            this.prevValue = nextValue;
        }
    }

    render() {
        return <div
        style={{display:"block",float:"right",position: "relative",
            right:this.state.x}}

            ref={el => {
                if (!el) return;
                console.log("initial width", el.getBoundingClientRect().right);
                let prevValue = JSON.stringify(el.getBoundingClientRect());
                const start = Date.now();
                this.handle = setInterval(this.pollX(el), 1);
            }}
        >
            <button style={{width:"500px",height:"500px"}}
        onClick={() => {alert("gurt");}}>yo
            </button></div>
    }
}

const ReelGlobalStyle = createGlobalStyle`
  body {
    background: rgba(77, 85, 126, 1);
    background-image: url("/assets/tagdbg.png");
    margin = 0;
    padding = 0;
    overflow-x:clip;
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

    let videoPath = `/assets/videos/${videoSource}.mp4`;
    return (
        <div style={{
            justifyContent: 'centre',
            alignItems: 'centre',
            fontSize:"30px",
            height:"95vh",
            overflow:"hidden",
        }}
        >
            <ReelGlobalStyle/>
            <div style={{display:"flex"}}>
                <div style={{width:"20%",margin:"auto"}}>
                    <p>Informational & Jam Theme Reveal Sep. 4th<br/> @ ARCC 207!</p>
                </div>
                <div style={{width:"60%",margin:"auto"}}>
                    <img style={{width:"35%",margin:"auto"}}src="/assets/tagdlogo.png"/>
                    <h1 style={{lineHeight:"2px"}}>Texas Aggie Game Developers</h1>
                </div>
                <div style={{width:"20%",margin:"auto"}}>
                    <img style={{}}src="/assets/tagdqr.jpg"/>
                    <p>Join our Discord!</p>
                </div>
            </div>
            <div style={{display:"flex",height:"30vh"}}>
                <div style={{display:"flex",width:"40%",height:"60vh",margin:"auto",alignItems: "center",
                    flexDirection:"column",verticalAlign:"center",justifyContent:"center"}}>
                    <ButtonWheel switchFunc={switchVideo} />
                </div>
                <div style={{width:"60%", height:"60vh",margin:"auto",display:"flex",alignItems: "center"}}>
                    <video style={{borderRadius:"20px",boxShadow: "8px 8px 16px black"}}
                        width="90%" height={"auto"} autoPlay={true} muted={true} loop={true} key={videoPath} disablePictureInPicture={true}>
                        <source type="video/mp4" id="videoPlayer" src={videoPath}/>
                    </video>
                </div>
            </div>
        </div>
  );
};

export default TAGDReel;