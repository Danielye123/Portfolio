import {
  FilmpireCaseStudies,
  MorrentCaseStudies,
  HipNodeCaseStudies,
} from "@/assets";
import Image from "next/image";
import React from "react";

const CaseStudiesProjects = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#FFFFFF] dark:bg-[#151E2C]">
      <div className="grid grid-cols-2 gap-[36px]">
        <div className="w-[550px] h-[328px] bg-[#5CAFFC] flex flex-col justify-center items-center rounded-lg">
          <div className="mt-[-4]">
            <Image
              src={MorrentCaseStudies}
              alt="morrent"
              width={452}
              height={265}
            />
            <div className="text-center ">
              <p>Morrent</p>
              <p>Car Rental Application</p>
            </div>
          </div>
        </div>
        <div className="w-[550px] h-[328px] bg-[#FF6934] flex justify-center items-center rounded-lg">
          2
        </div>
        <div className="w-[550px] h-[328px] bg-[#DB202C] flex justify-center items-center rounded-lg">
          3
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesProjects;
