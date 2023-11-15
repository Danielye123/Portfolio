"use client"

import React, { useState } from "react";
import ExperienceSlider from "./ExperienceSlider/ExperienceSlider";
import CompanyCardDisplay from "./ExperienceSlider/CompanyCardDisplay";

const workExperiences = [
  { id: 1, name: 'Slack', position: 'Full-Stack Developer', details: 'January 2023 - Present' },
  { id: 2, name: 'Firefox', position: 'Sr. Web Developer', details: 'September 2021 - December 2022' },
  { id: 3, name: 'Chrome', position: 'Sr. Web Developer', details: 'September 2020 - December 2021' },
  { id: 4, name: 'OperaGX', position: 'Sr. Web Developer', details: 'September 2018 - December 2019' },
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
      <div className="flex flex-col gap-[1.62rem] px-[58px] w-[607px] bg-[#F3F8FF] dark:bg-[#192333] font-poppins z-15">
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
        <div className="flex flex-col gap-4 text-[18px] font-normal font-poppins leading-[29px] text-[#6F74A7] dark:text-[#F3F8FF] pb-[36px]">
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
          <p className="font-poppins text-[14px] font-normal leading-[22px] text-[#6F74A7] dark:text-[#F3F8FF] pt-[68px] pl-[5px]">
            👉 Slide the bar to reveal details of my web experience.
          </p>
        </div>
        <ExperienceSlider 
          workExperiences={workExperiences}
          onCompanyChange={handleCompanyChange} 
        />
      </div>
      {/* <div className="flex flex-col gap-[35px]">
        <div className="text-black w-[607px] h-[122px] bg-[#F3F8FF] rounded-[1px]">
          <p>company</p>
          <p>title</p>
        </div>
        <div className="text-black w-[607px] h-[122px] bg-[#F3F8FF] rounded-[1px]">
          <p>company</p>
          <p>title</p>
        </div>
      </div> */}
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
