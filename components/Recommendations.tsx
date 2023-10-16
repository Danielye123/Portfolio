"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Stars, TestimonialArrowLeft, TestimonialArrowRight, TestimonialArrowLeft2, TestimonialArrowRight2} from '@/assets';
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
    <section className="w-full md:h-[589px] flex flex-col justify-start items-center px-[85px] py-[72px] bg-[#F3F8FF] dark:bg-[#192333]">
      <h1 className="text-primary-darkDefault dark:text-primary-light font-poppins font-bold text-[48px] leading-[55px] tracking-[-0.01em]">
        What<span className="mx-2"></span>
        <div className="relative inline-block">
          <span className="z-20 relative">they say</span>
          <div className="absolute bottom-[-1px] left-0 h-4 w-full bg-[#ffbe62] z-10" />
        </div>
        <span className="ml-2">about me</span>
      </h1>

      <div className="w-full px-[85px] pt-[64px] flex items-center justify-between">
        {/* Left Arrow */}
        <Image
          // src={theme === 'dark' ? TestimonialArrowLeftDark : TestimonialArrowLeft2}
          src={TestimonialArrowLeft2}
          alt="arrow"
          width={56}
          height={56}
          className="flex justify-between self-center ml-[60px] cursor-pointer transition-opacity duration-500 ease-in-out"
          onClick={handlePreviousRecommendation}
        />

        {/* Center Content */}
        <div className="flex items-start justify-center space-x-4">
          {/* Image Container */}
          <div
            className="flex-shrink-0 rounded-lg mx-[26px] max-w-[328px] h-[350px] w-[100%] overflow-hidden"
            style={{ maxWidth: '328px' }}
          >
            <Image
              src={currentRecommendationData.image} // Use the current recommendation's image
              alt="Person's Image"
              className="rounded-lg"
            />
          </div>

          {/* Quote and Attribution Container */}
          <div className="flex flex-col w-[749px] pb-[10px]">
            <Image src={Stars} alt="Star" width={116} height={20} className="mt-4.25" />

            <p className="font-poppins text-[24px] font-normal leading-[31px] text-left pt-[20px] text-[#6F74A7] dark:text-[#F3F8FF]">
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
          // src={theme === 'dark' ? TestimonialArrowRightDark : TestimonialArrowRight2}
          src={TestimonialArrowRight2}
          alt="arrow"
          width={56}
          height={56}
          className="flex justify-between self-center ml-[60px] cursor-pointer"
          onClick={handleNextRecommendation}
        />
      </div>
    </section>
  );
};

export default Recommendations;