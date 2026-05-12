import React from "react";

import MyNavLink from "./MyNavLink";
import MenuIcon from "./MenuIcon";

const Navbar = () => {
  const navLink = [
    { href: "/", label: "Home" },
    { href: "/timeLine", label: "Timeline" },
    { href: "/stats", label: "Stats" },
  ];

  return (
    <div className=" sticky top-0 z-10 bg-white shadow-sm py-2 md:py-4 px-2 ">
      <div className="flex items-center justify-between container mx-auto">
      <div>
        <h1 className="text-xl md:text-4xl font-bold flex">
          <span className="text-green-900">Keen</span>
          <span className="text-green-700">Keeper</span>
          
        </h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-2 md:gap-3">
          {navLink.map((link, i) => (
            <MyNavLink key={i} href={link.href}>
              {link.label}
            </MyNavLink>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        <MenuIcon navLink={navLink}/>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
