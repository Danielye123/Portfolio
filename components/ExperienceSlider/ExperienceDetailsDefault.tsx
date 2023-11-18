import React from 'react'

const ExperienceDetailsDefault = () => {
  return (
    <div>
      <h2 className="font-bold xl:text-[48px] lg:text-[44px] text-[36px] xl:leading-[55px] lg:leading-[50px] leading-[41px] tracking-[-0.01em] relative pt-[80px] font-poppins text-[#151E2C] dark:text-[#FFFFFF] pb-[26px]">
        <span className="relative inline-block z-10">
          Work
          <div className="absolute bottom-[0px] left-0 h-[15px] w-full bg-[#ffbe62] z-[-1]"></div>
        </span>{" "}
        <span className="relative inline-block">
          <span className="" />
          <h1 className="relative">Experience</h1>
        </span>
      </h2>
      <div className="flex flex-col gap-4 xl:text-[18px] lg:text-[14px] font-normal font-poppins xl:leading-[29px] lg:leading-[21px] text-[#6F74A7] dark:text-[#F3F8FF] pb-[17px]">
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
      </div>
    </div>
  )
}

export default ExperienceDetailsDefault