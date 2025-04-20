import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div className="w-full bg-green lg:rounded-3xl mt-20 py-2 lg:py-13 overflow-hidden">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        }}
      >
        <span className="text-4xl lg:text-9xl leading-none font-bold uppercase">
          I Build Websites&nbsp;&nbsp;
        </span>
        <span className="text-4xl lg:text-9xl leading-none font-bold uppercase">
          I Build Websites&nbsp;&nbsp;
        </span>
        <span className="text-4xl lg:text-9xl leading-none font-bold uppercase">
          I Build Websites&nbsp;&nbsp;
        </span>
        {/* You can add more duplicates here if needed */}
      </motion.div>
    </div>
  );
}

export default Marquee;
