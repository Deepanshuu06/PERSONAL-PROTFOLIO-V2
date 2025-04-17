import React, { useState } from "react";
import { navLinks, personalDetails } from "../constants/constants";
import { styles } from "../style";
import { FaPencilAlt } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { LuMenu, LuX } from "react-icons/lu";
import { Link } from "react-router";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`${styles.paddingX} flex justify-between items-center fixed top-0 left-0 w-screen z-50 bg-black`}
    >
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black lg:hidden border-t border-gray-800">
          <div className="flex flex-col items-center gap-4 p-6">
            {navLinks.map((link) => (
             <Link to={link.path}>
              <h3
                key={link.id}
                className="cursor-pointer uppercase font-semibold text-white hover:text-green transition-colors duration-300"
                onClick={()=>toggleMobileMenu()}
              >
                {link.title}
              </h3>
             </Link>
            ))}
          </div>
        </div>
      )}

      <div className="py-3 flex justify-between items-center w-full">
        {/* Logo */}
        <Link to={"/"} className="hidden lg:block">
          <h1 className="font-bold text-xl cursor-pointer hidden lg:flex">
            {personalDetails.name}
          </h1>
        </Link>
        <Link to={"/"} onClick={()=>toggleMobileMenu()} className="lg:hidden">
          <h1 className="font-bold text-xl cursor-pointer">
            {personalDetails.name.split(" ")[0]}
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-10">
          {navLinks.map((link) => (
           <Link to={link.path}>
            <h3
              key={link.id}
              className="cursor-pointer uppercase text-sm text-white hover:text-green transition-colors duration-300"
            >
              {link.title}
            </h3>
           </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
      <Link to={"/contact"}>
      <button className="group relative hidden lg:flex items-center gap-3 px-4 py-1 rounded-3xl bg-green text-white cursor-pointer self-center w-fit transition-all ease-in-out duration-300 hover:bg-transparent hover:text-green border border-green">
          <span className="transition-all duration-500">Let's Talk</span>
          <span className="p-1 rounded-full flex items-center justify-center transition-all duration-300 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0">
            <FaPencilAlt />
          </span>
          <span className="absolute right-4 p-1 rounded-3xl bg-green text-white items-center justify-center transition-all duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
            <GoArrowUpRight />
          </span>
        </button>
      </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <LuX size={30} className="text-green" />
          ) : (
            <LuMenu size={30} />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
