import React from "react";

const ContactBanner = ({imgName, color, text, link}) => {
    var path = "/contact/" + imgName + ".png"
    return (
        <div style={{background: color, borderRadius: "40px", display: "flex", placeContent: "center", maxHeight: "200px", verticalAlign: "middle", width:"auto", margin:"auto"}}>
            <img style={{aspectRatio: "auto", maxHeight:"140px", padding:"40px"}} src={path}></img>
            <h2 style={{fontSize:"64px"}}><a href={link}>{text}</a></h2>
        </div>
    );
};

export default ContactBanner