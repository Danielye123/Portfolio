import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { projects } from "@/constants";
import { Filmpire, Hipnode, Morrent, arrow } from "@/assets";

const ProjectCard = () => {
  return (
    <div className="md:w-[1440px] text-[#FFFFFF]">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project-container rounded-lg flex md:w-full py-14 mt-8 sm:w-[345px] sm:h-[514px]`}
          style={{ backgroundColor: project.bgColor }}
        >
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="p-4">
              <div className="flex lg:text-[3rem] text-[2rem] font-bold w-[480px]">
                {project.title}
              </div>
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
          <div className="flex justify-center items-center py-4">
            <Image
              src={project.image}
              width={575}
              height={330}
              alt={project.title}
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
