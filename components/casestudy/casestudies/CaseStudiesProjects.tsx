import {
  FilmpireCaseStudies,
  MorrentCaseStudies,
  HipNodeCaseStudies,
} from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CaseStudiesProjects = () => {
  return (
    <div className="flex flex-wrap justify-center items-start min-h-screen py-[72px] bg-[#FFFFFF] dark:bg-[#151E2C] px-[152px] gap-[30px] md:gap-[36px]">
      {/* taking out px-[152px] makes other screens 2 by 2*/}
      {/* Box 1 */}
      <div className="flex flex-col">
        <div className="md:w-[550px] md:h-[328px] w-[345px] h-[205px] bg-[#5CAFFC] flex flex-col justify-end items-center rounded-lg px-[36px] mb-3">
          <Link href="/morrent" className="md:mb-[-10px] mb-0">
            <Image
              src={MorrentCaseStudies}
              alt="morrent"
              width={452}
              height={265}
            />
          </Link>
        </div>
        <div className="text-left pl-[50px]">
          <p className="font-poppins font-semibold md:text-[32px] text-[20px] md:leading-[34px] leading-[26px] text-[#151E2C] dark:text-[#FFFFFF] md:pb-[10px] pb-[4px]">
            Morrent
          </p>
          <p className="font-poppins font-normal md:text-[20px] text-[14px] md:leading-[30px] leading-[21px] text-[#6F74A7]">
            Car Rental Application
          </p>
        </div>
      </div>

      {/* Box 2 */}
      <div className="flex flex-col">
        <div className="md:w-[550px] md:h-[328px] w-[345px] h-[205px] bg-[#FF6934] flex flex-col justify-end items-center rounded-lg px-[36px] mb-3">
          <Link href="/hipnode" className="md:mb-[-10px] mb-0">
            <Image
              src={HipNodeCaseStudies}
              alt="hipnode"
              width={452}
              height={265}
              className="w-[274px] h-[160px] md:w-[452px] md:h-[265px]"
            />
          </Link>
        </div>
        <div className="text-left pl-[50px]">
          <p className="font-poppins font-semibold md:text-[32px] text-[20px] md:leading-[34px] leading-[26px] text-[#151E2C] dark:text-[#FFFFFF] md:pb-[10px] pb-[4px]">
            Hipnode
          </p>
          <p className="font-poppins font-normal md:text-[20px] text-[14px] md:leading-[30px] leading-[21px] text-[#6F74A7]">
            Social Platform for Developers
          </p>
        </div>
      </div>

      {/* Box 3 */}
      <div className="flex flex-col">
        <div className="md:w-[550px] md:h-[328px] w-[345px] h-[205px] bg-[#DB202C] flex flex-col justify-end items-center rounded-lg px-[36px] mb-3">
          <Link href="/filmpire" className="md:mb-[-10px] mb-0">
            <Image
              src={FilmpireCaseStudies}
              alt="filmpire"
              width={452}
              height={265}
            />
          </Link>
        </div>
        <div className="text-left pl-[50px]">
          <p className="font-poppins font-semibold md:text-[32px] text-[20px] md:leading-[34px] leading-[26px] text-[#151E2C] dark:text-[#FFFFFF] md:pb-[10px] pb-[4px]">
            Filmpire
          </p>
          <p className="font-poppins font-normal md:text-[20px] text-[14px] md:leading-[30px] leading-[21px] text-[#6F74A7]">
            AI-Powered Movie Application
          </p>
        </div>
      </div>
      {/* Box 4 */}
      {/* <div className="flex flex-col pb-[36px]">
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
          <p className="font-poppins font-semibold text-[32px] leading-[34px] text-[#151E2C] dark:text-[#FFFFFF] pb-[10px]">
            Hipnode
          </p>
          <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#6F74A7]">
            Social Platform for Developers
          </p>
        </div>
      </div> */}
    </div>
  );
};
//0BAB7C
export default CaseStudiesProjects;
