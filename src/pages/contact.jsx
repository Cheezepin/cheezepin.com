import React from 'react';
import AnimatedPage from './AnimatedPage';
import ContactBanner from '../components/ContactBanner';
import "./pages.css"

const Contact = () => {
  return (
    <AnimatedPage>
        <div
        style={{
            justifyContent: 'centre',
            alignItems: 'centre',
        }}
        >
        <ContactBanner
            imgName = "ytb"
            color = "rgba(255,0,0,0.5)"
            text = "YouTube"
            link = "https://www.youtube.com/Cheezepin"
        />
        <ContactBanner
            imgName = "ghm"
            color = "rgba(50,50,50,0.5)"
            text = "GitHub"
            link = "https://www.github.com/Cheezepin"
        />
        <ContactBanner
            imgName = "twl"
            color = "rgba(150,150,255,0.5)"
            text = "Twitter"
            link = "https://www.twitter.com/Cheezepin"
        />
        <ContactBanner
            imgName = "ema"
            color = "rgba(200,200,200,0.5)"
            text = "E-Mail"
            link = "mailto:cheezepin@gmail.com"
        />
        </div>
    </AnimatedPage>
  );
};

export default Contact;