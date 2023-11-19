"use client";

import React, { useState } from "react";
import ExperienceSlider from "./ExperienceSlider/ExperienceSlider";
import CompanyCardDisplay from "./ExperienceSlider/CompanyCardDisplay";
import Image, { StaticImageData } from "next/image";
import { UCMLogo, JSMLogo } from "@/assets";
import ExperienceDetails from "./ExperienceSlider/ExperienceDetails";
import ExperienceDetailsDefault from "./ExperienceSlider/ExperienceDetailsDefault";

export interface Company {
  id: number;
  image: StaticImageData;
  name: string;
  position: string;
  details: string;
  title: string;
  title2: string;
  text: string;
  text2: string;
}

export type ExperienceState = Company | null;

const workExperiences = [
  {
    id: 1,
    image: JSMLogo,
    name: "JavaScript Mastery",
    position: "Full-Stack Developer",
    details: "August 2022 - 2023",
    title: "Full-Stack",
    title2: "Developer",
    text: `During my time in the JavaScript Mastery bootcamp, I learned a lot by focusing on my projects along with my group. 
    `,
    text2: ` 
    This bootcamp focused more on projects rather than the fundamentals of web development, however, it helped me solidify my grasp on the basics and 
    took it further by enhancing it and allowing me to build Full Stack Websites based on amazing Figma Designs.
    `,
  },
  {
    id: 2,
    image: UCMLogo,
    name: "University Of California Merced",
    position: "Computer Science Student",
    details: "August 2016 - May 2021",
    title: "Computer Science",
    title2: "Student",
    text: `Bachelors Degree: Computer Science.
    `,
    text2: `
    During my years at the University of California Merced or UC Merced, I learned many different skills relating to computer science. 
    This includes learning the basics of programming and languages such as C++. I also learned about algorithms and many more subjects during my time there.
    `,
  },
  // ... Add more experiences as needed
];

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState<ExperienceState>(null);

  // Function to update the selected company
  const handleCompanyChange = (company: ExperienceState) => {
    setSelectedCompany(company);
  };

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center bg-[#FFFFFF] dark:bg-[#151E2C] w-full text-black gap-[26px] py-[72px] xl:px-[85px] lg:px-[30px] px-[24px] mx-auto">
      <div className="flex flex-col gap-[1.62rem] lg:w-[607px] px-[58px] bg-[#F3F8FF] dark:bg-[#192333] font-poppins z-15 rounded-[10px] work-experience-shadow">
        <div className=" xl:min-h-[400px] lg:min-h-[350px]">
          {selectedCompany ? (
            <ExperienceDetails selectedCompany={selectedCompany} />
          ) : (
            ExperienceDetailsDefault()
          )}
        </div>
        <div className="pt-[26px] pb-[36px]">
          <ExperienceSlider
            workExperiences={workExperiences}
            onCompanyChange={handleCompanyChange}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <CompanyCardDisplay
          companies={workExperiences}
          selectedCompany={selectedCompany}
        />
      </div>
    </section>
  );
};

export default Experience;
