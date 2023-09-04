"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { navLinks } from "@/constants";

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between bg-[#F3F8FF] fixed dark:bg-[#192333] py-4 px-4 w-full">
      <div className="text-[#6F74A7]">
        image
      </div>
      <nav className="sm:flex hidden text-[#6F74A7] gap-9 justify-between font-bold text-base">
      <Link
          href="/"
          className="hover:text-[#0252CD] hover:duration-500 transition"
        >
          Home
        </Link>
        <Link
          href="/CaseStudies"
          className="hover:text-[#0252CD] hover:duration-500 transition"
        >
          Case Studies
        </Link>
        <Link
          href="/Contact"
          className="hover:text-[#0252CD] hover:duration-500 transition"
        >
          Contact
        </Link>
        <div>
          Resume
        </div>
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
  )
}

export default NavBar;