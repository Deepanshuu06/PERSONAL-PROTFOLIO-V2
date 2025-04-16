import React from "react";
import { styles } from "../style";
import { RiDoubleQuotesR } from "react-icons/ri";

function IntroSection() {
  return (
    <div
   
      className={`min-h-[80vh] min-w-screen ${styles.paddingX} relative  flex lg:flex-row flex-col  justify-around items-stretch gap-10 mt-0 lg:mt-15`}
    >
      {/* Left Section */}
      <div className="w-[100%] lg:w-[70%] bg-white text-black rounded-3xl p-6 flex flex-col justify-between">
        <div>
          <h1 className=" text-2xl lg:text-5xl font-bold leading-snug mb-6">
            Hi, I'm a Developer Building High-Quality Web Experiences
          </h1>

          <p className="font-mono text-sm mb-4">
            I specialize in building modern, fast, and scalable websites using:
          </p>

          <ul className="list-disc flex flex-col gap-2 font-semibold pl-4 text-base">
            <li>React and Next.js for dynamic and responsive web apps</li>
            <li>Clean UI/UX design principles for user-friendly experiences</li>
            <li>Optimized performance and SEO-ready development</li>
          </ul>
        </div>

        <button className="bg-green-600 hover:bg-green-700 transition-all py-4 text-white w-full rounded-3xl cursor-pointer font-bold mt-6">
          LET'S BUILD SOMETHING TOGETHER
        </button>
      </div>

      {/* Right Section */}
      <div className=" w-[100%] lg:w-[30%] bg-gradient-to-b from-green-500 via-green-800 to-[#111] animate-gradient bg-neutral-800 text-white rounded-3xl p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-3 bg-neutral-700 rounded-full w-fit mb-4">
              <RiDoubleQuotesR size={28} />
            </div>

            <div className="relative">
              <img
                src="https://res.cloudinary.com/djfmulkpn/image/upload/v1744795189/IMG_1098_3_sgc1kj.jpg"
                alt="testimonial"
                className="rounded-full w-12 h-12 object-cover mb-4"
              />
              <div className="h-3 w-3 bg-green-500 absolute bottom-3 right-1 rounded-full border-2 border-white" />
            </div>
          </div>

          <h1 className="text-xl font-semibold leading-relaxed">
            I’m passionate about crafting clean, efficient code and bringing
            ideas to life through thoughtful design and powerful development.
          </h1>

          <h2 className="text-sm font-light mt-2">
            From personal projects to business websites — I’ve got you covered.
          </h2>

          <p className="italic text-sm mt-4">
            — Deepanshu Baghel, Web Developer
          </p>
        </div>

        <button className="bg-white text-green-600 hover:text-green-700 font-bold py-4 w-full rounded-3xl cursor-pointer transition-all mt-6">
          VIEW MY WORK
        </button>
      </div>

      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 90% 50%;
          }
          50% {
            background-position: 50% 80%;
          }
          100% {
            background-position: 0% 10%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientAnimation 8s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default IntroSection;
