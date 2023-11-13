"use client";

import { HiHome, HiOutlineMail, HiX } from "react-icons/hi";
import Link from "next/link";
import { AiOutlineClose, AiOutlineDownload } from "react-icons/ai";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { FaLaptopCode } from "react-icons/fa";

function Sidebar({ setToggle, toggle }: any) {
  const { theme, setTheme } = useTheme();

  // Sidebar visibility
  const sidebarStyle = {
    transform: toggle ? 'translateX(0)' : 'translateX(100%)',
    // transition: 'transform 0.3s ease-in-out',
    opacity: toggle ? "1" : "0",
  };

  return (
    <div
      className="rounded-bl-3xl z-20 top-0 right-0 p-4 w-full flex flex-col
      justify-end items-end bg-cover bg-no-repeat bg-[#F3F8FF] dark:bg-[#192333] fixed"
      style={sidebarStyle}
    >
      <div className="flex justify-between items-center w-full px-[24px] xl:px-[85px]">
        {/* Logo "DY" Link on the left */}
        <Link href="/" className="pl-[8px] md:pt-3">
          <div className="conic-gradient-bg w-[45px] h-[45px] flex items-center justify-center text-[22px] rounded-full logo-font object-contain text-white">
            DY
          </div>
        </Link>
        {/* Close button on the right */}
        <AiOutlineClose
          onClick={() => setToggle(false)}
          className="w-[35px] h-[35px] text-primary-accentBlue dark:text-primary-darkmodeblue"
        />
      </div>
      <ul className="h-full w-full list-none m-auto px-5 pt-10 flex flex-col justify-start items-start gap-10 text-base font-bold">
        <Link href="/" onClick={() => setToggle(false)}>
          <span className="text-black dark:text-white flex gap-3 items-center">
            <HiHome className="w-[30px] h-[30px] inline-block" />
            Home
          </span>
        </Link>
        <Link href="/casestudies" onClick={() => setToggle(false)}>
          <span className="text-black dark:text-white flex gap-3 items-center">
            <FaLaptopCode className="w-[30px] h-[30px] inline-block" />
            Case Studies
          </span>
        </Link>
        <Link href="/contact" onClick={() => setToggle(false)}>
          <span className="text-black dark:text-white flex gap-3 items-center">
            <HiOutlineMail className="w-[30px] h-[30px] inline-block" />
            Contact
          </span>
        </Link>
        <Link href="/resume" onClick={() => setToggle(false)}>
          <span className="text-black dark:text-white flex gap-3 items-center">
            <AiOutlineDownload className="w-[30px] h-[30px] inline-block" />
            Resume
          </span>
        </Link>

        <button
          type="button"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          {theme === "light" ? (
            <div className="flex flex-row gap-3 items-center  text-text-title dark:text-white dark:hover:text-text-accentBlue hover:text-text-accentBlue">
              <FiSun size={30} />
              <span>Mode</span>
            </div>
          ) : (
            <div className="flex flex-row gap-3 items-center  text-text-title dark:text-white dark:hover:text-text-accentBlue hover:text-text-accentBlue">
              <FiMoon size={30} />
              <span>Mode</span>
            </div>
          )}
        </button>
      </ul>
    </div>
  );
}

export default Sidebar;
