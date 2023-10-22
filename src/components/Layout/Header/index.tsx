"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import NavBar from "./NavBar";
import NavbarMobile from "./NavBar/NavbarMobile";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="w-full relative"
      style={
        pathname === "/special"
          ? { backgroundColor: "#1D2F32" }
          : { backgroundColor: "#ffffff" }
      }
    >
      <div className="content-container flex justify-between items-center mx-auto px-10 pt-10">
        <Logo />
        <NavBar />

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      {showMenu && <NavbarMobile />}
    </header>
  );
};

export default Header;
