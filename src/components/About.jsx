import React from "react";
import { styles } from "../style";

function About() {
  return (
    // CDEA68
    <div
      className={`w-full py-20 rounded-t-4xl  ${styles.paddingX} text-white flex flex-col gap-10 mt-9`}
    >
      <h1 className="text-4xl text-center lg:text-start ">
        My goal is simple: to help businesses and individuals bring their
        vision to life online — with powerful, sleek, and functional websites
        that truly make an impact
      </h1>

      <div className="flex flex-col lg:flex-row relative gap-20 items-center" >
        <div className="lg:w-[60%] w-[100%]">
          <h1 className="font-bold text-4xl py-4 ">What I Do</h1>
          <ul className="space-y-5">
              <li className="flex gap-3">
                <span className="text-2xl mt-1">•</span>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl">Frontend Development</h3>
                  <p className="mt-1">Building interactive UIs using React, Next.js, Tailwind CSS, and modern frameworks</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl mt-1">•</span>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl">Backend Integration</h3>
                  <p className="mt-1">Connecting frontends with REST APIs, databases (MongoDB/MySQL), and cloud services</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl mt-1">•</span>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl">Performance Optimization</h3>
                  <p className="mt-1">Implementing lazy loading, SEO best practices, and achieving top Lighthouse scores</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl mt-1">•</span>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl">Responsive Design</h3>
                  <p className="mt-1">Creating mobile-first experiences that adapt flawlessly to all devices</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl mt-1">•</span>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl">Deployment & Hosting</h3>
                  <p className="mt-1">Deploying to modern platforms like Vercel/Netlify or traditional cloud infrastructure</p>
                </div>
              </li>
            </ul>
        </div>
        <div className="w-[60%]" >
          <div className="justify-center flex">
            <img src="https://res.cloudinary.com/djfmulkpn/image/upload/v1744804232/image-removebg_nywpjg.png" 
            alt="Web development illustration"
            className="w-[30vw]"
            loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
