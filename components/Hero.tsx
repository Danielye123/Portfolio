"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { hero, laptophero, laptopherodark, clipboard } from "../assets/index";
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
    <section className="w-full pt-16px px-[85px] flex min-h-screen text-black dark:bg-[#192333] bg-[#F3F8FF] gap-[100px]">
      <div className="flex flex-col items-left max-w-[900px]">
        <div className="flex-none h-1/5"></div> {/* Spacer div */}
        <div className="font-semibold text-[20px] leading-[26px] text-text-accentBlue dark:text-primary-darkmodeblue font-poppins tracking-[.3em]">
          <h2>HI, I AM DANIEL YE</h2>
        </div>
        <div className="pt-[27px] pb-[10px]">
          <h1 className="leading-[83px] font-bold text-[64px] dark:text-[#FFFFFF]">
            Professional
            <br />
            <div className="inline-block relative">
              <span className="relative z-10">Web Developer</span>
              <div className="absolute left-0 bottom-[8px] h-[15px] w-full bg-[#ffbe62] z-0" />
            </div>
            <br />
            based in USA
          </h1>
        </div>
        <div className="font-poppins font-normal text-lg text-text-body dark:text-[#F3F8FF] pb-[36px]">
          Transforming the web one line of code at a time: <br />
          Crafting cutting-edge digital experiences with precision, <br />
          passion, and a profound commitment to excellence
        </div>
        <br />
        <div className="flex flex-row gap-[18px]">
          <Link href="/contact">
            <button className="dark:bg-[#428DFF] bg-[#0252CD] sm:mt-0 mt-8 rounded-full py-4 px-8 w-[186px] flex justify-center">
              <p className="text-[#FFFFFF] font-poppins text-center text-lg font-semibold leading-[29px] tracking-normal">
                My Work
              </p>
            </button>
          </Link>

          <button onClick={copyText} className="dark:bg-[#151E2C] bg-[#FFFFFF] rounded-full py-4 px-8 flex sm:mt-0 mt-8 items-center justify-center">
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

      <div className="pb-[20px] justify-end items-center flex">
        <Image
          src={theme === "dark" ? laptopherodark : laptophero}
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
