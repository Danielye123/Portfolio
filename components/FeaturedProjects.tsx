import React from "react";
import { featuredProjects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Filmpire, Hipnode, Morrent, arrow } from "@/assets";
import { HiArrowLongRight } from 'react-icons/hi2'
import { BsArrowRight } from "react-icons/bs";

const FeaturedProjects = () => {
  return (
    <section className="min-h-screen flex flex-col justify-start items-center py-[72px] bg-[#FFFFFF] dark:bg-[#192333] w-full">
      <h1 className="text-primary-darkDefault dark:text-primary-light font-poppins font-bold text-[48px] leading-[55px] tracking-[-0.01em]">
        Featured
        <span className="mr-[10px]"></span>
        <div className="inline-block relative">
          <span className="relative z-10">Projects</span>
          <div className="absolute left-0 bottom-[0px] h-[15px] w-full bg-[#ffbe62] z-0" />
        </div>
      </h1>

      <div className="w-full px-[85px] text-[#FFFFFF]">
        {/* Project 1 */}
        <div className="bg-[#416CEA] rounded-lg flex w-full py-14 mt-8">
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="p-4">
              <div className="flex lg:text-[3rem] text-[2rem] font-bold w-[480px]">
                Hipnode - Social Media Application
              </div>
              <div className="flex gap-2 mt-2 text-[.96rem]">
                <p className="p-2 h-[42px] bg-white/20 rounded-lg">
                  ReactJS, Next.js
                </p>
                <p className="p-2 h-[42px] bg-white/20 rounded-lg">
                  Node.js, MongoDB
                </p>
              </div>
              <Link href="/hipnode">
                <div className="flex mt-6 gap-2">
                  <p className="hover:underline">See Project Details</p>
                  <HiArrowLongRight size={25} />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center py-4">
            <Image
              src={Hipnode}
              width={575}
              height={330}
              alt="Hipnode"
              className="object-contain"
            />
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-[#0BAB7C] rounded-lg flex w-full py-14 justify-between mt-8">
          <div className="flex justify-center items-center py-4">
            <Image
              src={Morrent}
              width={575}
              height={330}
              alt="Morrent"
              className="object-contain"
            />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="p-4">
              <div className="flex lg:text-[3rem] text-[2rem] font-bold w-[480px]">
                Morrent - A Car Rental Application
              </div>
              <div className="flex gap-2 mt-2 text-[.96rem]">
                <p className="p-2 h-[42px] bg-white/20 rounded-lg">
                  ReactJS, Next.js
                </p>
                <p className="p-2 h-[42px] bg-white/20 rounded-lg">
                  Node.js, MongoDB
                </p>
              </div>
              <Link href="/morrent">
                <div className="flex mt-6 gap-2">
                  <p className="hover:underline">See Project Details</p>
                  <HiArrowLongRight size={25} />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-[#FF6934] rounded-lg flex w-full py-14 justify-between mt-8">
          <div className="flex flex-1 flex-col items-center justify-left">
            <div className="p-4">
              <div className="flex lg:text-[3rem] text-[2rem] font-bold w-[480px]">
                Filmpire - A Movie Review Application
              </div>
              <div className="flex gap-2 mt-2 text-[.96rem]">
                <p className="p-2 h-[42px] bg-white/20 rounded-lg">
                  ReactJS, Next.js
                </p>
                <p className="p-2 h-[42px] bg-white/20 rounded-lg">
                  Node.js, MongoDB
                </p>
              </div>
              <Link href="/filmpire">
                <div className="flex mt-6 gap-2">
                  <p className="hover:underline">See Project Details</p>
                  <HiArrowLongRight size={25} />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center py-4">
            <Image
              src={Filmpire}
              width={575}
              height={330}
              alt="Filmpire"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <Link href="/CaseStudies">
        <button className=" flex flex-row items-center justify-between md:mt-16 mt-10 border-none bg-text-accentBlue font-bold dark:bg-primary-darkmodeblue rounded-full md:w-[286px] w-[260px] md:h-[64px] h-[55px] py-4 px-6 text-center text-white text-sm md:text-base hover:duration-500 transition">
          See more Case Studies <BsArrowRight size={30} />
        </button>
      </Link>
    </section>
  );
};

export default FeaturedProjects;
