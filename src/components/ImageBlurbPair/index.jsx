import React from "react";
import "./blurbpair.css"

const ImageBlurbPair = ({imgSide, imgPath, header, blurb}) => {
    var image = imgPath;
    if(imgSide == "l") {
        return (
            <div class="dcblurbcontainer">
                <img class="dcl" src={image}></img>
                <div>
                    <h2 class="dcr">{header}</h2>
                    <p class="dcr">{blurb}</p>
                </div>
            </div>
        );
    } else if(imgSide == "r") {
        return (
            <div class="dcblurbcontainer">
                <div>
                    <h2 class="dcl">{header}</h2>
                    <p class="dcl">{blurb}</p>
                </div>
                <img class="dcr" src={image}></img>
            </div>
        );
    }
};

export default ImageBlurbPair