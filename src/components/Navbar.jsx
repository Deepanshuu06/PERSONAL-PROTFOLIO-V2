import React, { useState } from "react";
import { navLinks, personalDetails } from "../constants/constants";
import { styles } from "../style";
import { FaPencilAlt } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { LuMenu } from "react-icons/lu";

function Navbar() {

  const [isMobileMenuOpen , setIsMobileMenuOpen] = useState(false)
  return (
    <nav
      className={`${styles.paddingX} flex justify-between items-center fixed top-0 left-0 w-screen z-50 bg-black`}
    >
      <div className=" py-3 flex justify-between items-center w-full">
        <h1 className="font-bold text-xl cursor-pointer hidden lg:flex ">
          {personalDetails.name}
        </h1>
        <h1 className="font-bold text-xl cursor-pointer lg:hidden ">
          {personalDetails.name.split(" ")[0]}
        </h1>
        <div className=" hidden lg:flex gap-10">
          {navLinks.map((link) => (
            <h3 key={link.id} className="cursor-pointer uppercase lg:text-sm">
              {link.title}
            </h3>
          ))}
        </div>

        <button className="group relative lg:flex hidden items-center gap-3 px-4 py-1 rounded-3xl bg-green text-white cursor-pointer self-center w-fit transition-all ease-in-out duration-300 hover:bg-transparent hover:text-green ">
          <span className="transition-all duration-500">Let's Talk</span>

          <span className="p-1 rounded-full flex items-center justify-center transition-all duration-300 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0">
            <FaPencilAlt />
          </span>

          <span className="absolute right-4 p-1 rounded-3xl bg-green text-white items-center justify-center transition-all duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
            <GoArrowUpRight />
          </span>
        </button>
        <button className="lg:hidden">
          <LuMenu size={30} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
