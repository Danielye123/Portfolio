import React from "react";

interface descriptionProp{
    description: {
        part1: string,
        part2: string,
        part3: string,
    }
}

const ProjectDescription = ({ description }: descriptionProp) => {
  return (
    <div className="bg-[#F3F8FF] dark:bg-[#192333] w-full">
    <div className="container w-full 2xl:px-[280px] lg:px-[72px] px-[24px] py-[72px] bg-[#F3F8FF] dark:bg-[#192333] text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal md:text-[20px] text-[16px] md:leading-[30px] leading-[23px]">
      {description?.part1}

      <br /><br />

      {description?.part2}

      <br /><br />

      {description?.part3}
    </div>
    </div>
  );
};

export default ProjectDescription;
