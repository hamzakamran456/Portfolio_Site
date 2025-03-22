import React from "react";
import NavbarLogo from "./NavbarLogo";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarBtn } from "./NavbarBtn";

const NavbarMain = () => {
  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full">
      <div>
        <NavbarLogo />
        <NavbarLinks />
        <NavbarBtn />
      </div>
    </nav>
  );
};

export default NavbarMain;
