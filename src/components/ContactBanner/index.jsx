import React from "react";
import "./banners.css"

const ContactBanner = ({imgName, color, text, link}) => {
    var path = "/contact/" + imgName + ".png"
    return (
        <div class="contactDiv" style={{background: color}}>
            <img class="contactImg" src={path}></img>
            <h2 class="contactText"><a href={link}>{text}</a></h2>
        </div>
    );
};

export default ContactBanner