"use client";

import React, { useState } from "react";
import ExperienceSlider from "./ExperienceSlider/ExperienceSlider";
import CompanyCardDisplay from "./ExperienceSlider/CompanyCardDisplay";
import Image from "next/image";
import { UCMLogo, JSMLogo } from "@/assets";

const workExperiences = [
  {
    id: 1,
    image: JSMLogo,
    name: "JavaScript Mastery",
    position: "Full-Stack Developer",
    details: "January 2023 - Present",
  },
  {
    id: 2,
    image: UCMLogo,
    name: "University Of California Merced",
    position: "Computer Science Student",
    details: "August 2016 - May 2021",
  },
  // ... Add more experiences as needed
];

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Function to update the selected company
  const handleCompanyChange = (company) => {
    setSelectedCompany(company);
  };

  return (
    <section className="flex justify-center items-center bg-[#FFFFFF] dark:bg-[#151E2C] w-full text-black gap-[26px] py-[72px] px-[85px] mx-auto">
      <div className="flex flex-col gap-[1.62rem] px-[58px] w-[607px] bg-[#F3F8FF] dark:bg-[#192333] font-poppins z-15 rounded-[10px] work-experience-shadow">
        <h2 className="font-bold text-[48px] leading-[55px] tracking-[-0.01em] relative pt-[80px] font-poppins text-[#151E2C] dark:text-[#FFFFFF]">
          <span className="relative inline-block z-10">
            Work
            <div className="absolute bottom-[0px] left-0 h-[15px] w-full bg-[#ffbe62] z-[-1]"></div>
          </span>{" "}
          <span className="relative inline-block">
            <span className="" />
            <h1 className="relative">Experience</h1>
          </span>
        </h2>
        <div className="flex flex-col gap-4 text-[18px] font-normal font-poppins leading-[29px] text-[#6F74A7] dark:text-[#F3F8FF] pb-[17px]">
          <p>
            Take a trip through my career, where {`I've`} not only paved the way
            but also reached important goals, taken on different{" "}
            <span className="font-semibold text-[#0252CD] dark:text-[#428DFF]">
              roles
            </span>
            , worked on impressive{" "}
            <span className="font-semibold text-[#0252CD] dark:text-[#428DFF]">
              projects
            </span>
            , and accomplished notable things.
          </p>
          <p>
            From coding in the late hours to collaborating with talented teams,
            my career has been a dynamic adventure filled with{" "}
            <span className="font-semibold text-[#0252CD] dark:text-[#428DFF]">
              growth{" "}
            </span>{" "}
            and{" "}
            <span className="font-semibold text-[#0252CD] dark:text-[#428DFF]">
              innovation
            </span>
            .
          </p>
          <p className="font-poppins text-[14px] font-normal leading-[22px] text-[#6F74A7] dark:text-[#F3F8FF] pt-[52px] pl-[5px]">
            👉 Slide the bar to reveal details of my web experience.
          </p>
        </div>
        <div className="pb-[36px]">
          <ExperienceSlider
            workExperiences={workExperiences}
            onCompanyChange={handleCompanyChange}
          />
        </div>
      </div>
      <div className="flex flex-row">
        <CompanyCardDisplay
          companies={workExperiences}
          selectedCompany={selectedCompany}
        />
      </div>
    </section>
  );
};

export default Experience;
