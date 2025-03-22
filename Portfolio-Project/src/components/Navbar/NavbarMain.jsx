import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarBtn } from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const toggleMenu = () => {
    setmenuOpen(menuOpen);
  };

  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto bg-black p-6 rounded-r-full rounded-l-full border-[0.5px] border-lightOrange">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-lightOrange">
        <button
          className="text-2xl p-3 border border-lightOrange rounded-full text-white"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
