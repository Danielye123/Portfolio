"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  hero,
  laptophero,
  laptopherodark,
  clipboard,
  HeroLightSVG,
  HeroDarkSVG,
} from "../assets/index";
import { useState } from "react";

const Hero = () => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const notify = (message: string, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "top-center",
        autoClose: 2500,
        //@ts-ignore
        hideProgressBar: "false",
        //@ts-ignore
        closeOnClick: "true",
        //@ts-ignore
        pauseOnHover: "true",
        //@ts-ignore
        draggable: "true",
        progress: undefined,
        className: "border-b-2 border-primary text-primary ",
      });
    } else {
      toast.success(message, {
        position: "top-center",
        autoClose: 2500,
        //@ts-ignore
        hideProgressBar: "false",
        //@ts-ignore
        closeOnClick: "true",
        //@ts-ignore
        pauseOnHover: "true",
        //@ts-ignore
        draggable: "true",
        progress: undefined,
        className: "border-b-2 border-primary text-primary ",
      });
    }
  };

  const copyText = () => {
    const text = "daniel.jianhao.ye@gmail.com";
    navigator.clipboard.writeText(text);

    setCopied(true);

    notify("Copied to clipboard", false);
  };

  return (
    <section className="flex flex-col md:flex-row w-screen py-6 text-black dark:bg-[#192333] bg-[#F3F8FF] gap-6 md:gap-[100px] pt-[48px] md:pt-[0px] justify-between">
      <div className="flex flex-col items-start px-6 py-6 md:px-[85px] md:pb-[100px] md:max-w-[900px]">
        <div className="flex-none h-1/5"></div> {/* Spacer div */}
        <div className="font-semibold text-[14px] leading-[18px] md:text-[20px] md:leading-[26px] text-text-accentBlue dark:text-primary-darkmodeblue font-poppins tracking-[.3em]">
          <h2>HI, I AM DANIEL YE</h2>
        </div>
        <div className="pt-[27px] pb-[10px]">
          <h1 className="mobile-header-font md:leading-[83px] md:font-bold md:text-[64px] dark:text-[#FFFFFF]">
            Professional
            <br className="sm:hidden md:block" />
            <div className="inline-block relative">
              <span className="relative z-10">Web Developer</span>
              <div className="underline-divider" />
            </div>
            <br className="sm:hidden md:block" />
            based in USA
          </h1>
        </div>

        <div className="font-poppins font-normal text-[12px] leading-[18px] md:text-lg text-text-body dark:text-[#F3F8FF] pt-[14px] md:pt-[0px] md:pb-[36px]">
          Transforming the web one line of code at a time: <br />
          Crafting cutting-edge digital experiences with precision, <br />
          passion, and a profound commitment to excellence
        </div>
        <br />
        <div className="flex md:flex-row flex-col md:gap-[18px] gap-2">
          <Link href="/contact">
            <button className="dark:bg-[#428DFF] bg-[#0252CD] sm:mt-0 mt-8 rounded-full py-4 px-8 md:w-[186px] md:h-[64px] w-[350px] h-[55px] flex justify-center">
              <p className="text-[#FFFFFF] font-poppins text-center text-lg font-semibold leading-[29px] tracking-normal">
                My Work
              </p>
            </button>
          </Link>

          <button
            onClick={copyText}
            className="dark:bg-[#151E2C] bg-[#FFFFFF] rounded-full py-4 px-8 md:w-[305px] md:h-[64px] w-[350px] h-[55px] flex sm:mt-0 mt-8 items-center justify-center"
          >
            <p className="text-[#6F74A7] dark:text-[#FFFFFF] font-poppins text-center text-base font-semibold leading-7 tracking-normal">
              daniel.jianhao.ye@gmail.com
            </p>
            <Image
              src={clipboard}
              alt="clipboard"
              width={19}
              height={19}
              className="object-contain ml-2 cursor-pointer"
            />
          </button>
        </div>
      </div>

      <div className="flex justify-end items-center w-full sm:w-[393px] sm:h-[262px] md:pl-[60px] md:pb-[100px] md:w-[1000px] md:h-[1000px]">
        <Image
          src={theme === "dark" ? HeroDarkSVG : HeroLightSVG}
          alt="hero image"
          width={1000}
          height={1000}
        />
      </div>
      <ToastContainer />
    </section>
  );
};

export default Hero;
