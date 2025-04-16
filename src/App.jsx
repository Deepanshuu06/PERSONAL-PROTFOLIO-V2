import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import IntroSection from "./components/IntroSection";
import Marquee from "./components/Marquee";
import Eyes from "./components/Eyes";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.075, // optional: tweak for scroll "weight"
    });

    return () => {
      if (scroll) scroll.destroy(); // clean up
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef} className="bg-black">
      <Navbar />
      <Hero />
      <IntroSection />
      <Marquee />
      <About />
      {/* <Eyes/> */}
    </div>
  );
}

export default App;
