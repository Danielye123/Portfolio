import Image from "next/image";
import { check, challenge } from "@/assets";

const FilmpireChallenges = () => {
  return (
    <section className="container 2xl:px-[280px] lg:px-[72px] px-[24px] py-[72px] bg-[#FFFFFF] dark:bg-[#151E2C]">
      <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins font-semibold md:text-[14px] text-[12px] md:leading-[20px] leading-[17px] pb-[10px]">
        Problem
      </div>
      <div className="text-[#151E2C] dark:text-[#FFFFFF] font-poppins font-semibold md:text-[32px] text-[28px] md:leading-[34px] leading-[29px] pb-[40px]">
        Challenges & Learnings
      </div>

      <div className="w-full py-[30px] bg-[#F3F8FF] dark:bg-[#192333] rounded-md">
        <p className="text-[#E15A46] font-poppins font-semibold text-[20px] leading-[26px] text-left pl-[40px]">
          CHALLENGES
        </p>
        <div className="pt-[36px] px-[40px] flex gap-4 items-start text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal text-[18px] leading-[29px]">
          <Image
            src={challenge}
            width={18}
            height={18}
            alt="challenge"
            className="object-contain mt-[6px] flex-none"
          />
          First introduction to an advanced website
        </div>
        <div className="pt-[20px] px-[40px] flex gap-4 items-start text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal text-[18px] leading-[29px]">
          <Image
            src={challenge}
            width={18}
            height={18}
            alt="challenge"
            className="object-contain mt-[6px] flex-none"
          />
          Introduction to the TMDB API and API&apos;s in general
        </div>
        <div className="pt-[20px] pb-[30px] px-[40px] flex gap-4 items-start text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal text-[18px] leading-[29px]">
          <Image
            src={challenge}
            width={18}
            height={18}
            alt="challenge"
            className="object-contain mt-[6px] flex-none"
          />
          Introduction to many different technologies and features such as Alan AI, React, Material UI, Redux Toolkit
        </div>
      </div>

      <div className="w-full mt-[30px] pt-[30px] bg-[#F3F8FF] dark:bg-[#192333] rounded-md">
        <p className="text-[#02BC7D] font-poppins font-semibold text-[20px] leading-[26px] text-left pl-[40px]">
          LEARNINGS
        </p>
        <div className="pt-[36px] px-[40px] flex gap-4 items-start text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal text-[18px] leading-[29px]">
          <Image
            src={check}
            width={18}
            height={18}
            alt="check"
            className="object-contain mt-[6px] flex-none"
          />
          How to build a website from scratch using react and integrate an API
        </div>
        <div className="pt-[20px] px-[40px] flex gap-4 items-start text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal text-[18px] leading-[29px]">
          <Image
            src={check}
            width={18}
            height={18}
            alt="check"
            className="object-contain mt-[6px] flex-none"
          />
          User Authentication/Login features, Search Bar, Navigation etc.
        </div>
        <div className="pt-[20px] px-[40px] flex gap-4 items-start text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal text-[18px] leading-[29px]">
          <Image
            src={check}
            width={18}
            height={18}
            alt="check"
            className="object-contain mt-[6px] flex-none"
          />
          Light/Dark mode and other features.
        </div>
        <div className="pt-[20px] pb-[30px] px-[40px] flex gap-4 items-start text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal text-[18px] leading-[29px]">
          <Image
            src={check}
            width={18}
            height={18}
            alt="check"
            className="object-contain mt-[6px] flex-none"
          />
          The introduction of linters such as ESLINT
        </div>
      </div>
    </section>
  );
};

export default FilmpireChallenges;
