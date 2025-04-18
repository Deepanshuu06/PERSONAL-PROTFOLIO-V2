import React from "react";
import { styles } from "../style";
import { SocialLinkList } from "../constants/constants";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

function SocialLinks() {
  return (
    <div className={`${styles.paddingX} pt-7 lg:py-20`}>
      <div className="flex w-full justify-around py-5 rounded-3xl flex-wrap gap-5">
        {SocialLinkList.map((link, index) => (
          <a
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            title={`Visit my ${link.name}`}
          >
            <div className="flex flex-col items-center cursor-pointer hover:text-green-500 transition-all">
              <div className="rounded-full w-18 h-18 lg:w-24 lg:h-24 p-1 transform transition-transform duration-300 hover:scale-110">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={link.image}
                  alt={link.name}
                />
              </div>
              <h5 className="text-center mt-2 capitalize font-bold flex items-center gap-2">
                <LuSquareArrowOutUpRight />
                {link.name}
              </h5>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;
