import React from "react";

import { problem } from "@/assets";
import Image from "next/image";

const MorrentProblem = () => {
  return (
    <section className="px-[280px] py-[72px] bg-[#FFFFFF] dark:bg-[#151E2C]">
      <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins font-semibold text-[14px] leading-[20px] pb-[10px]">
        Problem
      </div>
      <div className="text-[#151E2C] dark:text-[#FFFFFF] font-poppins font-semibold text-[32px] leading-[34px]">
        Problem Statement
      </div>

      <div className="w-full py-[29px] text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal text-[20px] leading-[30px]">
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
