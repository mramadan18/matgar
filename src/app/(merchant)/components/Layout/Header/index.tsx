"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import NavBar from "./NavBar";
import NavbarMobile from "./NavBar/NavbarMobile";

const Header = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className={`sticky top-0 left-0 z-50 py-4 w-full shadow-sm ${
        pathname === "/special" ? "bg-[#1D2F32]" : "bg-white"
      }`}
    >
      <div className="container flex justify-between items-center">
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
