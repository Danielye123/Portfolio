import {
  FilmpireCaseStudies,
  MorrentCaseStudies,
  HipNodeCaseStudies,
} from "@/assets";
import Image from "next/image";
import React from "react";

const CaseStudiesProjects = () => {
  return (
    <div className="flex flex-wrap justify-center items-start min-h-screen py-[72px] bg-[#FFFFFF] dark:bg-[#151E2C]">
      {/* Box 1 */}
      <div className="flex flex-col">
        <div className="w-[550px] h-[328px] bg-[#5CAFFC] flex flex-col justify-end items-center rounded-lg px-[36px] mb-6">
          <div className="mb-[-10px]">
            <Image
              src={MorrentCaseStudies}
              alt="morrent"
              width={452}
              height={265}
            />
          </div>
        </div>
        <div className="text-left pl-[50px]">
          <p className="font-poppins font-semibold text-[32px] leading-[34px] text-[#151E2C] dark:text-[#FFFFFF]">
            Morrent
          </p>
          <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#6F74A7]">
            Car Rental Application
          </p>
        </div>
      </div>

      {/* Box 2 */}
      <div className="flex flex-col pb-[36px]">
        <div className="w-[550px] h-[328px] bg-[#FF6934] flex flex-col justify-end items-center rounded-lg mx-6 mb-6">
          <div className="mb-[-10px]">
            <Image
              src={HipNodeCaseStudies}
              alt="hipnode"
              width={452}
              height={265}
            />
          </div>
        </div>
        <div className="text-left pl-[50px]">
          <p className="font-poppins font-semibold text-[32px] leading-[34px] text-[#151E2C] dark:text-[#FFFFFF]">
            Hipnode
          </p>
          <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#6F74A7]">
            Social Platform for Developers
          </p>
        </div>
      </div>

      {/* Box 3 */}
      <div className="flex flex-col">
        <div className="w-[550px] h-[328px] bg-[#DB202C] flex flex-col justify-end items-center rounded-lg px-[36px] mb-6">
          <div className="mb-[-10px]">
            <Image
              src={FilmpireCaseStudies}
              alt="filmpire"
              width={452}
              height={265}
            />
          </div>
        </div>
        <div className="text-left pl-[50px]">
          <p className="font-poppins font-semibold text-[32px] leading-[34px] text-[#151E2C] dark:text-[#FFFFFF]">
            Filmpire
          </p>
          <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#6F74A7]">
            AI-Powered Movie Application
          </p>
        </div>
      </div>
      {/* Box 4 */}
      <div className="flex flex-col pb-[36px]">
        <div className="w-[550px] h-[328px] bg-[#0BAB7C] flex flex-col justify-end items-center rounded-lg mx-6 mb-6">
          <div className="mb-[-10px]">
            <Image
              src={HipNodeCaseStudies}
              alt="hipnode"
              width={452}
              height={265}
            />
          </div>
        </div>
        <div className="text-left pl-[50px]">
          <p className="font-poppins font-semibold text-[32px] leading-[34px] text-[#151E2C] dark:text-[#FFFFFF]">
            Hipnode
          </p>
          <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#6F74A7]">
            Social Platform for Developers
          </p>
        </div>
      </div>
    </div>
  );
};
//0BAB7C
export default CaseStudiesProjects;
