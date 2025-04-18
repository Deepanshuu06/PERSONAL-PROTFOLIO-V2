import React, { useRef } from "react";
import { styles } from "../style";
import { FaCode } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { logos, personalDetails } from "../constants/constants";

function Hero() {
  // Refs for animating elements
  const nameRef = useRef();
  const titleRef = useRef();
  const codeIconRef = useRef();

  // Animate with GSAP
  useGSAP(() => {
    gsap.from(nameRef.current, {
      opacity: 0,
      y: -50,
      duration: 3,
      ease: "power3.out",
    });

    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.from(codeIconRef.current, {
      scale: 0,
      rotate: 360,
      duration: 2,
      delay: 1,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <div
      className={`min-h-screen ${styles.paddingX} mx-auto flex flex-col items-center lg:justify-center `}
    >
      {/* Hero */}
      <div className="items-center flex flex-col pt-48 lg:pt-0  ">
        <div className="items-center flex flex-col">
          <h1
            ref={nameRef}
            className=" text-3xl lg:text-8xl font-extrabold uppercase"
          >
            {personalDetails.name}
          </h1>
          <h1
            ref={titleRef}
            className=" text-2xl lg:text-7xl font-extrabold uppercase flex items-center"
          >
            Full-Stack Devel
            <span ref={codeIconRef} className="bg-green p-3 rounded-full mx-2">
              <FaCode className="text-xl lg:text-4xl" />
            </span>
            per
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          <p className="flex flex-col justify-center items-center text-center mt-10">
            My goal is to write maintainable
            <br />
            clean code to build scalable and efficient applications
          </p>

          <a
            className="bg-green px-4 py-2 rounded-3xl mt-5 self-center w-fit cursor-pointer"
            href={personalDetails.resumeLink}
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* marquee */}

      <div className=" mt-auto absolute bottom-20  ">
        <div className="relative overflow-hidden w-xs lg:w-xl max-w-lg h-10">
          <div className="absolute inset-y-0 left-0 w-30 bg-gradient-to-l from-transparent to-black z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          <div className="marquee inline-flex whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                {logos.map((logo, index) => (
                  <img
                    key={`${i}-${index}`}
                    className="w-28 h-8 px-6 opacity-90 hover:opacity-100 transition-opacity"
                    src={logo.src}
                    alt={logo.alt}
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style>{`
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .marquee {
    animation: scroll 20s linear infinite;
    filter: blur(0.5px);
  }

  .marquee:hover {
    animation-play-state: paused;
  }

`}</style>
    </div>
  );
}

export default Hero;
