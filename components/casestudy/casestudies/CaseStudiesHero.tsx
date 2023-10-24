import React from "react";

const CaseStudiesHero = () => {
  return (
<section className="pt-[180px] md:px-[85px] px-[27px] pb-[45px] md:pb-[105px] w-full bg-[#F3F8FF] dark:bg-[#192333]">
    <div className="text-[#151E2C] dark:text-[#FFFFFF] text-center pt-[30px]">
        <div className="font-poppins md:text-[64px] text-[42px] font-bold md:leading-[83.2px] leading-[48px] relative">
            <span>Recent</span>
            <span className="ml-4 relative inline-block z-10">
                Case Studies
                <div className="absolute left-0 bottom-[0px] h-[15px] md:h-[27px] w-full bg-[#ffbe62] z-[-1]" />
            </span>
        </div>
    </div>
    <div className="text-[#6F74A7] dark:text-[#FFFFFF] text-center pt-[25px] font-poppins font-normal md:text-[20px] text-[14px] md:leading-[30px] leading-[21px]">
        Dive into my recent success stories and discover how I&apos;ve helped&nbsp;
        <br className="hidden md:block" />
        clients overcome challenges, innovate, and achieve their goals
    </div>
</section>

  );
};

export default CaseStudiesHero;
