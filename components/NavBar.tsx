"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { navLinks } from "@/constants";
import { LogoDY, DYLogo } from "@/assets";
import { AiOutlineMenu, AiOutlineDownload, AiOutlineClose } from "react-icons/ai";
import HeaderMobileModule from "./HeaderMobileModule";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(false);

  return (
    <header className="flex justify-between bg-[#F3F8FF] fixed dark:bg-[#192333] py-4 px-[24px] xl:px-[85px] w-full z-[100]">
      <Link href="/" className="pl-[24px] md:pl-0 md:pt-3">
        <div className="conic-gradient-bg w-[45px] h-[45px] flex items-center justify-center text-[22px] rounded-full logo-font object-contain text-white">
          DY
        </div>
        {/* <Image
          src={DYLogo}
          alt="logo"
          width={100}
          height={100}
          className="w-10 h-10"
        /> */}
      </Link>
      <nav className="md:flex hidden text-[#6F74A7] gap-9 justify-between font-bold text-base py-4">
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

        <Link
          href="https://drive.google.com/file/d/1Znd56RVkC73f09WszQU0_sgCJy2XCAPx/view?usp=sharing"
          target="_blank"
          className="hover:text-[#0252CD] hover:duration-500 transition"
        >
          <div className="flex items-center pb-1 gap-1">
            <AiOutlineDownload className="w-[20px] h-[20px] inline-block" />
            Resume
          </div>
        </Link>

        <div className="h-[28px] w-[2px] bg-[#6F74A7] self-center" />

        <button
          type="button"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          className="flex"
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
      <div className="flex md:hidden pr-[24px] justify-center items-center relative rounded-full bg-primary">
        <AiOutlineMenu
          size={30}
          className="text-primary-accentBlue dark:text-primary-darkmodeblue"
          onClick={() => setToggle((prevToggle) => !prevToggle)}
        />
        <HeaderMobileModule setToggle={setToggle} toggle={toggle} />
      </div>
    </header>
  );
};

export default NavBar;
