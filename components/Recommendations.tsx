"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Stars,
  TestimonialArrowLeft,
  TestimonialArrowRight,
  TestimonialArrowLeft2,
  TestimonialArrowRight2,
} from "@/assets";
import { recommendationsData } from "@/constants";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { HiArrowRight } from "react-icons/hi2";

const Recommendations = () => {
  const [currentRecommendation, setCurrentRecommendation] = useState(0);

  const handleNextRecommendation = () => {
    setCurrentRecommendation((prevIndex) =>
      prevIndex === recommendationsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousRecommendation = () => {
    setCurrentRecommendation((prevIndex) =>
      prevIndex === 0 ? recommendationsData.length - 1 : prevIndex - 1
    );
  };

  const currentRecommendationData = recommendationsData[currentRecommendation];

  return (
    <section className="w-full flex flex-col md:justify-start md:items-center px-[24px] py-[48px] md:px-[85px] md:py-[72px] bg-[#F3F8FF] dark:bg-[#192333]">
      <h1 className="text-center text-primary-darkDefault dark:text-primary-light font-poppins font-bold text-[36px] md:text-[48px] leading-[41px] md:leading-[55px] tracking-[-0.01em]">
        What
        <span className="md:inline mx-1 md:mx-2"></span>
        <span className="relative inline-block">
          <span className="z-20 relative">they say</span>
          <div className="absolute bottom-[-1px] left-0 h-4 w-full bg-[#ffbe62] z-10"></div>
        </span>
        <span className="md:ml-2">about me</span>
      </h1>

      <div className="w-full md:px-[85px] md:pt-[64px] pt-[36px] flex items-center justify-between">
        {/* Left Arrow for larger screens */}
        <Image
          src={TestimonialArrowLeft2}
          alt="arrow"
          width={56}
          height={56}
          className="hidden md:flex self-center ml-[60px] cursor-pointer transition-opacity duration-500 ease-in-out left-arrow"
          onClick={handlePreviousRecommendation}
        />

        {/* Center Content */}
        <div className="flex md:flex-row flex-col items-start justify-center">
        <div className="flex items-start"> {/* Flex container to wrap image and arrows */}
            {/* Image Container */}
            <div className="flex-shrink-0 rounded-[16px] md:mx-[26px] md:w-[323px] md:h-[350px] w-[200px] h-[200px] overflow-hidden">
                <Image
                  src={currentRecommendationData.image}
                  alt="Person's Image"
                  layout="responsive"
                  width={323}
                  height={350}
                  className="rounded-[16px]"
                />
            </div>
            {/* Mobile Left Arrow */}
            <Image
              src={TestimonialArrowLeft2}
              alt="arrow"
              width={48}
              height={48}
              className="md:hidden cursor-pointer transition-opacity duration-500 ease-in-out"
              onClick={handlePreviousRecommendation}
            />

            {/* Mobile Right Arrow */}
            <Image
              src={TestimonialArrowRight2}
              alt="arrow"
              width={48}
              height={48}
              className="md:hidden cursor-pointer transition-opacity duration-500 ease-in-out"
              onClick={handleNextRecommendation}
            />
        </div>

          {/* Quote and Attribution Container */}
          <div className="flex flex-col max-w-[345px] md:max-w-[749px] pb-[10px] pt-[40px] md:pt-0">
            <Image
              src={Stars}
              alt="Star"
              width={116}
              height={20}
              className="mt-4.25 flex flex-col"
            />

            <p className="font-poppins text-[18px] md:text-[24px] font-normal leading-[28px] md:leading-[31px] text-left pt-[20px] text-[#6F74A7] dark:text-[#F3F8FF]">
              {currentRecommendationData.text}
            </p>

            <p className="font-poppins text-[18px] font-semibold leading-[29px] text-left text-[#192333] dark:text-[#F3F8FF] pt-[20px]">
              — {currentRecommendationData.author}
            </p>

            <p className="font-poppins text-[18px] font-normal leading-[29px] text-left text-[#6F74A7] dark:text-[#F3F8FF] pt-[4px]">
              {currentRecommendationData.position}
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <Image
          src={TestimonialArrowRight2}
          alt="arrow"
          width={56}
          height={56}
          className="hidden md:flex justify-between self-center ml-[60px] cursor-pointer right-arrow"
          onClick={handleNextRecommendation}
        />
      </div>
    </section>
  );
};

export default Recommendations;
