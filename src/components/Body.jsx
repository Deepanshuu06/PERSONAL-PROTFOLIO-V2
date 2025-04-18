import React from "react";

import Hero from "./Hero";
import IntroSection from "./IntroSection";
import Marquee from "./Marquee";
import About from "./About";
import SocialLinks from "./SocialLinks";
import Education from "./Education";

function Body() {
  return (
    <>

    <div>

    
      <Hero />
      <IntroSection />
      <SocialLinks />
      <Marquee />
      <Education />
      <About />
      </div>
    </>
  );
}

export default Body;
