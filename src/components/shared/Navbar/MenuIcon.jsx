"use client";
import React, { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import MyNavLink from "./MyNavLink";

const MenuIcon = ({ navLink }) => {
  const [isOpen, setOpen] = useState(false);

  const openMenu = () =>  setOpen(!isOpen);
  const closeMenu = () =>  setOpen(false);

  


  return (
    <div className="flex flex-row-reverse gap-2">
      <div className="cursor-pointer text-xl" onClick={openMenu}>
        {isOpen ? <MdOutlineRestaurantMenu /> : <AiOutlineMenuFold />}
        
      </div>

      <div className="relative">
        
          <ul className={`flex flex-col gap-2 absolute shadow-sm  p-5 rounded-lg bg-zinc-50  right-1 top-6 transition-all duration-300 ease-in-out origin-top-right ${isOpen ? "opacity-100 scale-100 translate-y-0 translate-x-0":"opacity-0 scale-0 translate-x-4 pointer-events-none"}`}>
            {navLink.map((link, i) => (
              <div key={i} onClick={closeMenu}>
              <MyNavLink href={link.href}>
                {link.label}
              </MyNavLink>
              </div>
            ))}
          </ul>
      
      </div>
    </div>
  );
};

export default MenuIcon;
