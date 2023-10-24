import Image from "next/image";
import React from "react";
import { FaEarthAfrica } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi"
import {
  morrentPhone,
  morrentComputer,
  earth,
  arrow,
  morrentGit,
} from "@/assets";

const Hero = () => {
  return (
    <section className="pt-[180px] md:px-[85px] px-[24px] w-full min-h-screen bg-[#F3F8FF] dark:bg-[#192333]">
      <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins md:text-xl text-[14px] font-semibold md:leading-[26px] leading-[18px] tracking-[.3em] text-center items-center justify-center">
        WEB DEV PROJECT
      </div>

      <div className="text-[#151E2C] dark:text-[#FFFFFF] text-center pt-[30px]">
        <div className="font-poppins md:text-[64px] text-[42px] font-bold md:leading-[83.2px] leading-[48px] relative">
          <span className="relative inline-block z-10">
            Morrent
            <div className="absolute left-0 bottom-[0px] h-[13px] md:h-[27px] w-full bg-[#ffbe62] z-[-1]" />
          </span>
          <span className="ml-4">- A Car Rental Website</span>
        </div>
      </div>

      <div className="flex items-center justify-center pt-[56px]">
        <Image src={morrentComputer} alt="computer" />
        <Image src={morrentPhone} alt="phone" className="md:mt-11 mt-7" />
      </div>

      <div className="flex items-center justify-center md:gap-[109px] gap-[40px] pt-[72px]">
        <button className="text-[#0252CD] dark:text-[#428DFF] hover:underline font-poppins font-semibold md:text-[20px] text-[14px] md:leading-[26px] leading-[20px] flex items-center gap-1">
          <FaEarthAfrica size={20} />
          Demo Site
          <HiOutlineArrowRight size={24} />
        </button>
        <button className="text-[#0252CD] dark:text-[#428DFF] hover:underline font-poppins font-semibold md:text-[20px] text-[14px] md:leading-[26px] leading-[20px] flex items-center gap-1">
          <BsGithub size={20} />
          Source Code
          <HiOutlineArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
