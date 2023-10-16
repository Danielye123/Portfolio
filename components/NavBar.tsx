"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { navLinks } from "@/constants";
import { LogoDY } from "@/assets";

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between bg-[#F3F8FF] fixed dark:bg-[#192333] md:py-4 md:px-[85px] md:w-full z-[100]">
      <Link href="/">
        <div className="conic-gradient-bg w-[45px] h-[45px] flex items-center justify-center text-[22px] rounded-full logo-font object-contain text-white">
          DY
        </div>
      </Link>
      <nav className="sm:flex hidden text-[#6F74A7] gap-9 justify-between font-bold text-base py-4">
        <Link
          href="/"
          className="hover:text-[#0252CD] hover:duration-500 transition"
        >
          Home
        </Link>
        <Link
          href="/casestudies"
          className="hover:text-[#0252CD] hover:duration-500 transition"
        >
          Case Studies
        </Link>
        <Link
          href="/contact"
          className="hover:text-[#0252CD] hover:duration-500 transition"
        >
          Contact
        </Link>
        <div>Resume</div>
        <button
          type="button"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "dark" ? (
            <FiSun
              size={20}
              className="md:w-[25px] md:h-[25px] w-[20px] h-[20px] hover:text-primary-highlight"
            />
          ) : (
            <FiMoon
              size={20}
              className=" md:w-[25px] md:h-[25px] w-[20px] h-[20px] hover:text-text-accentBlue"
            />
          )}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
