import React from "react";

const CaseStudiesHero = () => {
  return (
    <section className="pt-[180px] px-[85px] w-full h-[480px] bg-[#F3F8FF] dark:bg-[#192333]">
      <div className="text-[#151E2C] dark:text-[#FFFFFF] text-center pt-[30px]">
        <div className="font-poppins text-[64px] font-bold leading-[83.2px] relative">
          <span>Recent</span>
          <span className="ml-4 relative inline-block z-10">
            Case Studies
            <div className="absolute left-0 bottom-[0px] h-[27px] w-full bg-[#ffbe62] z-[-1]" />
          </span>
        </div>
      </div>
      <div className="text-[#6F74A7] dark:text-[#FFFFFF] text-center pt-[25px] font-poppins font-normal text-[20px] leading-[30px]">
        Dive into my recent success stories and discover how I&apos;ve helped
        <br />
        clients overcome challenges, innovate, and achieve their goals
      </div>
    </section>
  );
};

export default CaseStudiesHero;
