import Image from "next/image";
import React from "react";
import { FaEarthAfrica } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi"
import {
  filmpireComputer,
  filmpirePhone,
  earth,
  arrow,
  morrentGit,
} from "@/assets";

const FilmpireHero = () => {
  return (
    <section className="pt-[180px] px-[85px] w-full min-h-screen bg-[#F3F8FF] dark:bg-[#192333]">
      <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins text-xl font-semibold leading-[26px] tracking-[.3em] text-center items-center justify-center">
        WEB DEV PROJECT
      </div>

      <div className="text-[#151E2C] dark:text-[#FFFFFF] text-center pt-[30px]">
        <div className="font-poppins text-[64px] font-bold leading-[83.2px] relative">
          <span className="relative inline-block z-10">
            Filmpire
            <div className="absolute left-0 bottom-[0px] h-[27px] w-full bg-[#ffbe62] z-[-1]" />
          </span>
          <span className="ml-4">- An AI-Powered Movie Application</span>
        </div>
      </div>

      <div className="flex items-center justify-center pt-[56px]">
        <Image src={filmpireComputer} alt="computer" />
        <Image src={filmpirePhone} alt="phone" className="mt-11" />
      </div>

      <div className="flex items-center justify-center gap-[109px] pt-[72px]">
        <button className="text-[#0252CD] dark:text-[#428DFF] hover:underline font-poppins font-semibold text-[20px] leading-[26px] flex items-center gap-1">
          <FaEarthAfrica size={20} />
          Demo Site
          <HiOutlineArrowRight size={24} />
        </button>
        <button className="text-[#0252CD] dark:text-[#428DFF] hover:underline font-poppins font-semibold text-[20px] leading-[26px] flex items-center gap-1">
          <BsGithub size={20} />
          Source Code
          <HiOutlineArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default FilmpireHero;
