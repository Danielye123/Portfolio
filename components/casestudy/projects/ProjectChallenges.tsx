import Image from "next/image";
import React from "react";
import { challenge, check } from "@/assets";

interface ChallengeOrLearning {
  text1: string;
  text2: string;
  text3: string;
  text4?: string;
  icon: any;
}

interface ProjectChallengesProps {
  CL: {
    challenges: ChallengeOrLearning[];
    learnings: ChallengeOrLearning[];
  };
}

const ProjectChallenges: React.FC<ProjectChallengesProps> = ({ CL }) => {
  const renderItem = (item: ChallengeOrLearning) => (
    <div className="pt-[20px] px-[40px] flex gap-4 items-start text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal text-[18px] leading-[29px]">
      <Image src={item.icon} width={18} height={18} alt="Icon" className="object-contain mt-[6px] flex-none" />
      {item.text1}
      {item.text2}
      {item.text3}
      {item?.text4}
    </div>
  );

  return (
    <section className="container 2xl:px-[280px] lg:px-[72px] px-[24px] py-[72px] bg-[#FFFFFF] dark:bg-[#151E2C]">
      {/* Problem Section */}
      <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins font-semibold md:text-[14px] text-[12px] md:leading-[20px] leading-[17px] pb-[10px]">
        Problem
      </div>
      <div className="text-[#151E2C] dark:text-[#FFFFFF] font-poppins font-semibold md:text-[32px] text-[28px] md:leading-[34px] leading-[29px] pb-[40px]">
        Challenges & Learnings
      </div>

      {/* Challenges Section */}
      <div className="w-full py-[30px] bg-[#F3F8FF] dark:bg-[#192333] rounded-md">
        <p className="text-[#E15A46] font-poppins font-semibold text-[20px] leading-[26px] text-left pl-[40px]">CHALLENGES</p>
        {CL.challenges.map((challenge, index) => (
          <div key={index}>{renderItem(challenge)}</div>
        ))}
      </div>

      {/* Learnings Section */}
      <div className="w-full mt-[30px] py-[30px] bg-[#F3F8FF] dark:bg-[#192333] rounded-md">
        <p className="text-[#02BC7D] font-poppins font-semibold text-[20px] leading-[26px] text-left pl-[40px]">LEARNINGS</p>
        {CL.learnings.map((learning, index) => (
          <div key={index}>{renderItem(learning)}</div>
        ))}
      </div>
    </section>
  );
};

export default ProjectChallenges;