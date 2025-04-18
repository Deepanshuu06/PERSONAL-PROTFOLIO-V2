
import React, { useEffect, useRef } from "react";




import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Hero from "./Hero";
import IntroSection from "./IntroSection";
import Marquee from "./Marquee";
import About from "./About";
import SocialLinks from "./SocialLinks";
import Education from "./Education";

function Body() {
     const scrollRef = useRef(null);
    
      useEffect(() => {
        const scroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.075, 
        });
    
        return () => {
          if (scroll) scroll.destroy(); 
        };
      }, []);
  return (
    <div data-scroll-container ref={scrollRef} className="bg-black">
    <Hero />
    <IntroSection />
    <SocialLinks/>
    <Marquee />
    <Education/>
    <About />
  </div>
  )
}

export default Body