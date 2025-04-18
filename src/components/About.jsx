import React from "react";
import { styles } from "../style";
import { ABOUT_CONTENT, DeveloperIllustration } from "../constants/constants";

function About() {
  return (
    // CDEA68
    <div
      className={`w-full py-20  min-h-screen rounded-t-4xl  ${styles.paddingX} text-white flex flex-col gap-10 mt-9`}
    >
      <h1 className="text-4xl text-center lg:text-start ">
        {ABOUT_CONTENT.intro}
      </h1>

      <div className="flex flex-col lg:flex-row relative gap-20 items-center">
        <div className="lg:w-[60%] w-[100%]">
          <h1 className="font-bold text-4xl py-4 ">What I Do</h1>
          <ul className="space-y-5">
            {ABOUT_CONTENT.services.map((service, index) => (
              <li className="flex gap-3" key={index}>
                <span className="text-2xl mt-1">•</span>
                <div>
                  <h3 className="font-semibold text-lg text-[5vw] md:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-1">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className=" w-[100%] lg:w-[60%]">
          <div className="justify-center flex  ">
            <img
              src={DeveloperIllustration[Math.floor(Math.random() * 5)]}
              alt="Web development illustration"
              className=" h-[45vh] lg:h-[75vh]  "
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
