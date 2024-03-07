import React from "react";
import Image from "next/image";

interface problemProp{
    problem: {
        statement: string,
        image: any,
    }
}

const ProjectProblem = ({ problem }: problemProp) => {
  return (
    <section className="container 2xl:px-[280px] lg:px-[72px] px-[24px] py-[72px] bg-[#FFFFFF] dark:bg-[#151E2C]">
      <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins font-semibold md:text-[14px] text-[12px] md:leading-[20px] leading-[17px] pb-[10px]">
        Problem
      </div>
      <div className="text-[#151E2C] dark:text-[#FFFFFF] font-poppins font-semibold md:text-[32px] text-[28px] md:leading-[34px] leading-[29px]">
        Problem Statement
      </div>

      <div className="w-full py-[29px] text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal md:text-[20px] text-[14px] md:leading-[30px] leading-[21px]">
        {problem.statement}
      </div>

      <div className="flex justify-center items-center">
        <Image
          src={problem.image}
          alt="Problem Statement"
          width={879}
          height={478}
          className="object-contain w-full"
        />
      </div>
    </section>
  );
};

export default ProjectProblem;
