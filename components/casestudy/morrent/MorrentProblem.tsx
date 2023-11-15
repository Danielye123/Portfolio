import React from "react";

import { problem } from "@/assets";
import Image from "next/image";

const MorrentProblem = () => {
  return (
    <section className="2xl:px-[280px] lg:px-[72px] px-[24px] py-[72px] bg-[#FFFFFF] dark:bg-[#151E2C]">
      <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins font-semibold md:text-[14px] text-[12px] md:leading-[20px] leading-[17px] pb-[10px]">
        Problem
      </div>
      <div className="text-[#151E2C] dark:text-[#FFFFFF] font-poppins font-semibold md:text-[32px] text-[28px] md:leading-[34px] leading-[29px]">
        Problem Statement
      </div>

      <div className="w-full py-[29px] text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal md:text-[20px] text-[14px] md:leading-[30px] leading-[21px]">
        One of the main problems that people face when looking to rent a car is
        the hassle of finding a reliable and user-friendly platform to search
        for and book rental cars. In addition, car owners who want to rent out
        their vehicles often struggle to find a suitable platform to list their
        cars and manage their rentals.
      </div>

      <div className="flex justify-center items-center">
        <Image
          src={problem}
          alt="Problem Statement"
          width={879}
          height={478}
          className="object-contain w-full"
        />
      </div>
    </section>
  );
};

export default MorrentProblem;
