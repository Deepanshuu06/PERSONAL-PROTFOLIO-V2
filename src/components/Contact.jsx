import React from "react";
import { styles } from "../style";
import { Link } from "react-router";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <div
        className={`${styles.paddingX} min-h-screen w-screen p-10 lg:pt-20 flex flex-col  lg:flex-row justify-between gap-10`}
      >
        {/* Left Div */}
        <div className="lg:w-1/2 w-full  h-full flex flex-col gap-5 py-8 lg:py-15 items-center lg:items-start">
          <p>
            <Link to={"/"}>
              <span> Home</span>
            </Link>{" "}
            <span>></span> <span className="text-zinc-500"> Let's Talk</span>
          </p>
          <h1 className=" text-2xl lg:text-6xl font-semibold text-center lg:text-start">
            Let's Create Something Epic Together
          </h1>
        </div>

        {/* right div */}
        <div className=" w-full lg:w-1/2 ">
          <div className=" rounded-xl w-full border-zinc-500 border-1 text-white p-10">
            <h1 className="text-4xl font-semibold py-5 hover:pl-2 ease-in duration-500">
              Enter Your <br /> Contact Details
            </h1>
            <form action="" className="space-y-7 ">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200"
                >
                  Your Name
                </label>
                <input
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                  type="text"
                  name="Name"
                  id="name"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200"
                >
                  Email
                </label>
                <input
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                  type="email"
                  name="Email"
                  id="email"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-200"
                >
                  Message
                </label>
                <textarea 
                className="mt-1 w-full h-25 px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                name="Message"
                id="message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Contact;
