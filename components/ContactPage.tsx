"use client";
import { useState, useRef, FormEvent, ChangeEvent } from "react";

import Link from "next/link";
import Image from "next/image";
// import emailjs from "@emailjs/browser";
import { useTheme } from "next-themes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiSolidPhone } from "react-icons/bi";
import { HiMail } from "react-icons/hi";

const socials = [
  {
    image: AiFillLinkedin,
    link: "https://www.linkedin.com/in/daniel-y-075014107/",
    alt: "linkedin",
  },
  {
    image: AiFillGithub,
    link: "https://github.com/Danielye123",
    alt: "github",
  },
];

const Contact = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className=" flex flex-col items-center justify-between w-full pt-[70px] dark:bg-[#192333] bg-[#FFFFFF]">
      <div className=" flex dark:bg-[#192333] bg-[#F3F8FF] xl:max-h-[410px] w-full items-center justify-center">
        <div className="flex flex-col gap-5 py-12 px-[24px] items-center">
          <div className="relative inline-block">
            <h1 className="z-10 relative text-text-title font-bold xl:text-[64px] text-[44px] dark:text-white">
              Get in Touch
            </h1>
            <div className="absolute inset-x-0 bottom-2 xl:bottom-3 bg-primary-highlight xl:h-[22px] h-[18px]"></div>
          </div>
          <span className="text-[#6F74A7] dark:text-[#F3F8FF] text-[14px] xl:text-[20px]">
            Let&apos;s Collaborate on Your Next Project
          </span>
        </div>
      </div>
      <div className="flex md:flex-row md:gap-52 flex-col-reverse md:px-16 pb-10 dark:bg-[#151E2C] w-full h-full">
        <div className="flex flex-col px-6 md:pl-[180px] py-12 md:space-y-[80px] space-y-9">
          <div className="flex flex-col gap-4">
            <h3 className="sm:text-2xl text-xl font-normal text-[#192333] dark:text-[#FFFFFF]">
              My Socials
            </h3>
            <div className="flex flex-row gap-4 text-[#778295] dark:text-[#F3F8FF]">
              {socials.map((social, index) => (
                <Link href={social.link} key={index} target="_blank">
                  <div
                    className="hover:opacity-75 w-6 h-6 sm:w-8 sm:h-8"
                    aria-label={social.alt}
                  >
                    <social.image size={30} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="sm:text-2xl text-xl font-normal text-[#192333] dark:text-[#FFFFFF]">
              Phone Number
            </h3>
            <div className="flex flex-row gap-2 items-center hover:opacity-75 group cursor-pointer text-[#778295] dark:text-[#F3F8FF]">
              <BiSolidPhone
                size={6}
                className="hover:opacity-75 w-6 h-6 sm:w-8 sm:h-8"
              />
              <Link
                href="tel:+1 (415)-200-6222"
                className="text-[#778295] md:text-base font-semibold dark:text-[#F3F8FF]"
              >
                +1 (415)-200-6222
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="sm:text-2xl text-xl font-normal text-[#192333] dark:text-[#FFFFFF]">
              Email Address
            </h3>
            <div className="flex flex-row gap-2 items-center group hover:opacity-75 cursor-pointer text-[#778295] dark:text-[#F3F8FF]">
              <HiMail
                size={6}
                className="hover:opacity-75 w-6 h-6 sm:w-8 sm:h-8"
              />
              <Link
                href=""
                className="text-[#778295] md:text-base font-semibold dark:text-[#F3F8FF] "
              >
                daniel.jianhao.ye@gmail.com
              </Link>
            </div>
          </div>
        </div>
        {/*form*/}
        <div className="flex-1 items-center justify-center md:pl-0 px-6 py-12 text-[#192333] dark:text-[#FFFFFF]">
          <form className="flex flex-col md:w-[763px] w-[345px]">
            <label
              htmlFor="name"
              className="mb-2 md:text-[20px] text-[18px] md:leading-[30px] leading-[28px] font-normal font-poppins"
            >
              What&apos;s your name?
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className=" p-4 mb-[48px] rounded-lg border border-[#CCE1FF] dark:border dark:border-[#2C3C56] bg-[#F3F8FF] dark:bg-[#192333]"
            />
            <label
              htmlFor="email"
              className="mb-2 md:text-[20px] text-[18px] md:leading-[30px] leading-[28px] font-normal font-poppins"
            >
              What&apos;s your email?
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="p-4 mb-[48px] rounded-lg border border-[#CCE1FF] dark:border dark:border-[#2C3C56] bg-[#F3F8FF] dark:bg-[#192333]"
            />
            <label
              htmlFor="message1"
              className="mb-2 md:text-[20px] text-[18px] md:leading-[30px] leading-[28px] font-normal font-poppins"
            >
              Write something about your project goals and timeframe
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="p-2 mb-[48px] rounded-lg min-h-[190px] border border-[#CCE1FF] dark:border dark:border-[#2C3C56] bg-[#F3F8FF] dark:bg-[#192333]"
            ></textarea>
            <label htmlFor="message2" className="mb-2 ">
              <span className="md:text-[20px] text-[18px] md:leading-[30px] leading-[28px] font-normal font-poppins">
                How to reach out back to you?
              </span>
              <span className="text-[#778295] md:text-[20px] text-[18px] md:leading-[30px] leading-[28px] font-normal font-poppins">
                {" "}
                eg. phone number or email
              </span>
            </label>
            <textarea
              id="comment"
              name="comment"
              required
              className="p-2 mb-[48px] rounded-lg  min-h-[60px] border border-[#CCE1FF] dark:border dark:border-[#2C3C56] bg-[#F3F8FF] dark:bg-[#192333]"
            ></textarea>
            <div className="flex md:justify-end">
              <button
                type="submit"
                className=" bg-primary-accentBlue dark:bg-primary-darkmodeblue hover:bg-opacity-75 dark:hover:bg-opacity-75 text-white py-2 px-4 rounded-full hover:bg-blue-600 w-full md:w-[186px] md:h-[69px] md:px-[20px] md:py-[12px] md:rounded-full"
              >
                {/* {!loading ? "Send" : "Sending...."} */}
                Send
              </button>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col gap-2 items-center justify-center max-h-[165px] text-[#778295] dark:text-[#F3F8FF] dark:bg-[#151E2C] w-full py-[52px] ">
        <span>© 2023 Daniel Ye.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Contact;
