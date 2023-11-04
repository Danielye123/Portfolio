import React from "react";
import { featuredProjects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Filmpire, Hipnode, Morrent, arrow } from "@/assets";
import { HiArrowLongRight } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
import { ProjectCard } from ".";
import { projects } from "@/constants";

const FeaturedProjects = () => {
  const colors = ["#416CEA", "#0BAB7C", "#DB202C"];
  return (
    <section className="min-h-screen flex flex-col justify-start items-center py-[72px] bg-[#FFFFFF] dark:bg-[#151E2C] w-full">
      <h1 className="text-primary-darkDefault dark:text-primary-light font-poppins font-bold text-[36px] md:text-[48px] leading-[41px] md:leading-[55px] tracking-[-0.01em] text-center md:text-left">
        Featured
        <span className="mr-[10px]"></span>
        <div className="inline-block relative">
          <span className="relative z-10">Projects</span>
          <div className="absolute left-0 bottom-[0px] h-[15px] w-full bg-[#ffbe62] z-0" />
        </div>
      </h1>

      <div className="flex flex-row flex-wrap justify-center px-[24px] md:px-[85px] gap-8 max-w-[1440px] mx-auto">
        <div className="w-screen text-[#FFFFFF]">
          {/*<div className="w-full text-[#FFFFFF]"> */}
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-container rounded-lg flex mt-10 md:pt-4 md:pb-4 py-4 ${
                project.isReversed
                  ? "md:flex-row-reverse flex-col"
                  : "md:flex-row flex-col"
              }`}
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              <div className="flex flex-1 items-start justify-start md:items-center md:justify-center pl-9">
                <div className="p-4">
                  <h2 className="md:text-[48px] text-[32px] font-bold md:leading-[55px] leading-[41px] w-full md:break-words">
                    {project.title} {" - "}
                    <br className="block md:hidden" />
                    {project.description}
                  </h2>
                  <div className="flex gap-2 mt-2 text-[.96rem]">
                    {project.tech.map((techItem, index) => (
                      <p
                        key={index}
                        className="p-2 h-[42px] bg-white/20 rounded-lg"
                      >
                        {techItem}
                      </p>
                    ))}
                  </div>
                  <Link href={project.link}>
                    <div className="flex mt-6 gap-2">
                      <p className="hover:underline">See Project Details</p>
                      <HiArrowLongRight size={25} />
                    </div>
                  </Link>
                </div>
              </div>
              {/* <div className="flex sm:flex-col justify-center items-center py-4 overflow-hidden relative"> */}
              <div className="flex sm:flex-col justify-center items-center py-4 overflow-hidden relative w-full md:w-1/2 md:min-h-[378px]">
                <Image
                  src={project.image}
                  width={575}
                  height={330}
                  alt={project.title}
                  className={`object-cover md:absolute ${
                    project.isReversed ? "left-0" : "right-0"
                  } transform ${project.isReversed ? "md:-translate-x-11" : "md:translate-x-[1.17rem]"}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link href="/casestudies">
        <button className=" flex flex-row items-center justify-center mt-[48px] bg-text-accentBlue font-bold dark:bg-primary-darkmodeblue rounded-full w-[323px] h-[69px] md:text-base hover:duration-500 transition">
          <span className="py-5 pr-[10px] pl-[45px] text-center text-white font-poppins font-semibold text-[18px] leading-[29px]">
            See more case studies
          </span>
          <BsArrowRight
            size={65}
            color="white"
            className="pr-[34px] items-center justify-center"
          />
        </button>
      </Link>
    </section>
  );
};

export default FeaturedProjects;
