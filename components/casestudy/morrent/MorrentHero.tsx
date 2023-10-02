import Image from "next/image";
import React from "react";
import { FaEarthAfrica } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import {
  morrentPhone,
  morrentComputer,
  earth,
  arrow,
  morrentGit,
} from "@/assets";

const Hero = () => {
  return (
    <section className="pt-[180px] px-[85px] w-full min-h-screen bg-[#F3F8FF] text-black">
      <div className="text-[#0252CD] font-poppins text-xl font-semibold leading-[26px] tracking-[.3em] text-center items-center justify-center">
        WEB DEV PROJECT
      </div>

      <div className="text-[#151E2C] text-center pt-[30px]">
        <div className="font-poppins text-[64px] font-bold leading-[83.2px] relative">
          <span className="relative inline-block z-10">
            Morrent
            <div className="absolute left-0 bottom-[0px] h-[27px] w-full bg-[#ffbe62]  z-[-1]" />
          </span>
          <span className="ml-4">- A Car Rental Website</span>
        </div>
      </div>

      <div className="flex items-center justify-center pt-[56px]">
        <Image src={morrentComputer} alt="computer" />
        <Image src={morrentPhone} alt="phone" className="mt-11" />
      </div>

      <div className="flex items-center justify-center gap-[109px] pt-[72px]">
        <button className="text-[#0252CD] hover:underline font-poppins font-semibold text-[20px] leading-[26px] flex items-center gap-1">
          <FaEarthAfrica size={20} />
          Demo Site
          <Image src={arrow} alt="arrow" />
        </button>
        <button className="text-[#0252CD] hover:underline font-poppins font-semibold text-[20px] leading-[26px] flex items-center gap-1">
          <BsGithub size={20} />
          Source Code
          <Image src={arrow} alt="arrow" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
