import Image from "next/image";
import React from "react";
import { FaEarthAfrica } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";

interface ProjectHero {
  hero?: {
    name: string;
    sectionClass: string;
    title1: string;
    title2: string;
    demoLink: string;
    sourceCodeLink: string;
    computerImage: any; 
    phoneImage: any; 
    projectType: string;
    backgroundColor: string;
  }
}

const ProjectsHero = ({ hero }: ProjectHero ) => {

  if (!hero) {
    return <div className="text-black dark:text-white">No data available</div>;
  }

  return (
    <section className="w-full bg-[#F3F8FF] dark:bg-[#192333]">
      <div className="pt-[180px] 2xl:px-[280px] lg:px-[72px] px-[24px] container">
        <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins md:text-xl text-[14px] font-semibold md:leading-[26px] leading-[18px] tracking-[.3em] text-center items-center justify-center">
          {hero.projectType}
        </div>

        <div className="text-[#151E2C] dark:text-[#FFFFFF] text-center pt-[30px]">
          <div className="font-poppins md:text-[64px] text-[42px] font-bold md:leading-[83.2px] leading-[48px] relative">
            <span className="relative inline-block z-10">
              {hero.title1}
              <div className="absolute left-0 bottom-[0px] h-[13px] md:h-[27px] w-full bg-[#ffbe62] z-[-1]" />
            </span>
            <span className="ml-4">{hero.title2}</span>
          </div>
        </div>

        <div className="flex items-center justify-center pt-[56px]">
          <Image
            width={598}
            height={349}
            src={hero.computerImage}
            alt="computer"
            className="md:w-[598px] md:h-[349px] w-[278px] h-[162px]"
          />
          <Image
            src={hero.phoneImage}
            alt="phone"
            className="md:mt-11 mt-7 md:w-[148px] md:h-[295px] w-[69px] h-[138px]"
          />
        </div>

        <div className="flex items-center justify-center md:gap-[109px] gap-[40px] pt-[72px] pb-[60px]">
          <Link href={hero.demoLink} target="_blank" className="text-[#0252CD] dark:text-[#428DFF] hover:underline font-poppins font-semibold md:text-[20px] text-[14px] md:leading-[26px] leading-[20px] flex items-center gap-1">
            <FaEarthAfrica size={20} />
            Demo Site
            <HiOutlineArrowRight size={24} />
          </Link>
          <Link href={hero.sourceCodeLink} target="_blank" className="text-[#0252CD] dark:text-[#428DFF] hover:underline font-poppins font-semibold md:text-[20px] text-[14px] md:leading-[26px] leading-[20px] flex items-center gap-1">
            <BsGithub size={20} />
            Source Code
            <HiOutlineArrowRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;