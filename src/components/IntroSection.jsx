import React from "react";
import { styles } from "../style";
import { RiDoubleQuotesR } from "react-icons/ri";
import { introContent, testimonialContent } from "../constants/constants";
import { Link } from "react-router";

function IntroSection() {
  return (
    <div
      className={` ${styles.paddingX} relative  flex lg:flex-row flex-col  justify-around items-stretch gap-10 mt-0 lg:mt-15`}
    >
      {/* Left Section */}

      <div className="w-[100%] lg:w-[70%] bg-white text-black rounded-3xl p-6 flex flex-col justify-between">
        <div>
          <h1 className=" text-2xl lg:text-5xl font-bold leading-snug mb-6">
            {introContent.title}
          </h1>
        </div>
        <div>
          <p className="font-mono text-sm mb-4">{introContent.description}</p>

          <ul className="list-disc flex flex-col gap-3 font-semibold pl-4 text-base">
            {introContent.features.map((feature , index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <Link to={"/contact"}>
          <button className="bg-green-600 hover:bg-green-700 transition-all py-4 text-white w-full rounded-3xl cursor-pointer font-bold mt-6 uppercase">
            {introContent.buttonText}
          </button>
        </Link>
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
                src={testimonialContent.imageUrl}
                alt="testimonial"
                className="rounded-full w-12 h-12 object-cover mb-4"
              />
              <div className="h-3 w-3 bg-green-500 absolute bottom-3 right-1 rounded-full border-2 border-white" />
            </div>
          </div>

          <h1 className="text-xl font-semibold leading-relaxed">
            {testimonialContent.quote}
          </h1>

          <h2 className="text-sm font-light mt-2">
            {testimonialContent.subQuote}
          </h2>

          <p className="italic text-sm mt-4">{testimonialContent.author}</p>
        </div>

        <Link to={"/projects"}>
          <button className="bg-white text-green-600 hover:text-green-700 font-bold py-4 w-full rounded-3xl cursor-pointer transition-all mt-6">
            {testimonialContent.buttonText}
          </button>
        </Link>
      </div>

      <style >{`
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
