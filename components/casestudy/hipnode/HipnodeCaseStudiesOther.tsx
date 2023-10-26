import Image from "next/image";
import React from "react";
import { FilmpireShow, morrentLink } from "@/assets";
import Link from "next/link";

const HipnodeCaseStudiesOther = () => {
  return (
    <section className="md:px-[280px] px-[24px] py-[72px] bg-[#F3F8FF] dark:bg-[#192333]">
      <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins font-semibold md:text-[14px] text-[12px] md:leading-[20px] leading-[17px] pb-[10px]">
        Projects
      </div>
      <div className="text-[#151E2C] dark:text-[#FFFFFF] font-poppins font-semibold md:text-[32px] text-[28px] md:leading-[34px] leading-[29px] pb-[40px]">
        Other Case Studies
      </div>

      <div className="flex flex-col md:flex-row gap-[50px]">
      <div className="md:w-[430px] md:h-[460px] w-[345px] h-[385px] bg-[#FFFFFF] dark:bg-[#192333] rounded-[20px] flex flex-col shadow-md shadow-[#E0ECFF] dark:shadow-xl dark:shadow-[#1F2C41]">
          <Image
            src={FilmpireShow}
            alt="other studies"
            className="w-[430px] object-cover justify-start rounded-t-lg"
          />
          <p className="pt-[24px] pl-[24px] pr-[18px] font-poppins font-semibold text-[24px] leading-[31px] text-[#0252CD] dark:text-[#428DFF]">
            Filmpire
          </p>
          <p className="pt-[8px] pb-[14px] pl-[24px] pr-[18px] font-poppins font-normal text-[18px] leading-[29px] text-[#6F74A7]">
            Filmpire, a movie web application made with React
          </p>
          <Link
            href="/filmpire"
            className="md:w-96 md:h-[48px] w-[307px] h-[41px] mx-auto py-[14px] md:px-[135px] rounded-full border border-[#0252CD] gap-[10px] bg-[#0252CD] dark:bg-[#428DFF] text-white flex justify-center items-center"
          >
            <p className="text-[#FFFFFF] font-poppins font-semibold text-[14px] leading-[20px] text-center">
              See Case Study
            </p>
          </Link>
        </div>

        <div className="md:w-[430px] md:h-[460px] w-[345px] h-[385px] bg-[#FFFFFF] dark:bg-[#192333] rounded-[20px] flex flex-col shadow-md shadow-[#E0ECFF] dark:shadow-xl dark:shadow-[#1F2C41]">
          <Image
            src={morrentLink}
            alt="other studies"
            className="w-[430px] object-cover justify-start rounded-t-lg"
          />
          <p className="pt-[20px] pl-[24px] pr-[18px] font-poppins font-semibold text-[24px] leading-[31px] text-[#0252CD] dark:text-[#428DFF]">
            Morrent
          </p>
          <p className="pt-[8px] pb-[14px] pl-[24px] pr-[18px] font-poppins font-normal text-[18px] leading-[29px] text-[#6F74A7]">
            Morrent, a car rental web application made with React
          </p>
          <Link
            href="/morrent"
            className="md:w-96 md:h-[48px] w-[307px] h-[41px] mx-auto py-[14px] md:px-[135px] rounded-full border border-[#0252CD] gap-[10px] bg-[#0252CD] dark:bg-[#428DFF] text-white flex justify-center items-center"
          >
            <p className="text-[#FFFFFF] font-poppins font-semibold text-[14px] leading-[20px] text-center">
              See Case Study
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HipnodeCaseStudiesOther