import Image from "next/image";
import React from "react";
import { FilmpireShow, hipnodeLink } from "@/assets";
import Link from "next/link";

const MorrentCaseStudiesOther = () => {
  return (
    <section className="px-[280px] py-[72px] bg-[#F3F8FF] dark:bg-[#192333]">
      <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins font-semibold text-[14px] leading-[20px] pb-[10px]">
        Projects
      </div>
      <div className="text-[#151E2C] dark:text-[#FFFFFF] font-poppins font-semibold text-[32px] leading-[34px] pb-[40px]">
        Other Case Studies
      </div>

      <div className="flex flex-row gap-[50px]">
        <div className="w-[430px] h-[481px] bg-[#FFFFFF] dark:bg-[#192333] rounded-lg flex flex-col shadow-md shadow-[#E0ECFF] dark:shadow-xl dark:shadow-[#1F2C41]">
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
            className="w-96 h-[48px] mx-auto py-[14px] px-[135px] rounded-full border border-[#0252CD] gap-[10px] bg-[#0252CD] dark:bg-[#428DFF] text-white flex justify-center items-center"
          >
            <p className="text-[#FFFFFF] font-poppins font-semibold text-[14px] leading-[20px] text-center">
              See Case Study
            </p>
          </Link>
        </div>

        <div className="w-[430px] h-[481px] bg-[#FFFFFF] dark:bg-[#192333] rounded-[20px] flex flex-col shadow-md shadow-[#E0ECFF] dark:shadow-xl dark:shadow-[#1F2C41]">
          <Image
            src={hipnodeLink}
            alt="other studies"
            className="w-[430px] object-cover justify-start rounded-t-lg"
          />
          <p className="pt-[20px] pl-[24px] pr-[18px] font-poppins font-semibold text-[24px] leading-[31px] text-[#0252CD] dark:text-[#428DFF]">
            Hipnode
          </p>
          <p className="pt-[8px] pb-[14px] pl-[24px] pr-[18px] font-poppins font-normal text-[18px] leading-[29px] text-[#6F74A7]">
            Hipnode, a social media application made with React and Nextjs
          </p>
          <Link
            href="/hipnode"
            className="w-96 h-[48px] mx-auto py-[14px] px-[135px] rounded-full border border-[#0252CD] gap-[10px] bg-[#0252CD] dark:bg-[#428DFF] text-white flex justify-center items-center"
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

export default MorrentCaseStudiesOther