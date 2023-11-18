import React from "react";

import { FilmpireFrontPage } from "@/assets";
import Image from "next/image";

const FilmpireProblem = () => {
  return (
    <section className="2xl:px-[280px] lg:px-[72px] px-[24px] py-[72px] bg-[#FFFFFF] dark:bg-[#151E2C]">
      <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins font-semibold md:text-[14px] text-[12px] md:leading-[20px] leading-[17px] pb-[10px]">
        Problem
      </div>
      <div className="text-[#151E2C] dark:text-[#FFFFFF] font-poppins font-semibold md:text-[32px] text-[28px] md:leading-[34px] leading-[29px]">
        Problem Statement
      </div>

      <div className="w-full py-[29px] text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal md:text-[20px] text-[14px] md:leading-[30px] leading-[21px]">
        In the realm of entertainment, a gap existed - a need for a seamless
        platform that marries the latest cinematic releases with the convenience
        of modern technology. Enter Filmpire: a groundbreaking movie
        application that aimed to bridge this gap by seamlessly delivering
        real-time movie data and captivating trailers to users, enhancing their
        cinematic experience. The problem was clear: how to create a dynamic,
        user-friendly interface that effortlessly integrates with an external
        API to provide up-to-the-minute movie information and trailers.
      </div>

      <div className="flex justify-center items-center">
        <Image
          src={FilmpireFrontPage}
          alt="Problem Statement"
          width={879}
          height={478}
          className="object-contain w-full"
        />
      </div>
    </section>
  );
};

export default FilmpireProblem;
