"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  Stars,
  TestimonialArrowLeft2,
  TestimonialArrowRight2,
  arrowDarkLeftMobile,
  arrowDarkRightMobile,
} from "@/assets";
import { recommendationsData } from "@/constants";

const Recommendations = () => {
  const { theme } = useTheme();
  const [currentRecommendation, setCurrentRecommendation] = useState<number>(0);
  const [nextRecommendation, setNextRecommendation] = useState<number | null>(null);
  const [animationDirection, setAnimationDirection] = useState<string>('');

  useEffect(() => {
    if (nextRecommendation !== null) {
      const timeoutId = setTimeout(() => {
        setCurrentRecommendation(nextRecommendation);
        setNextRecommendation(null);
        setAnimationDirection('in-' + animationDirection);
      }, 500); // Duration of the exit animation
      return () => clearTimeout(timeoutId);
    }
  }, [nextRecommendation, animationDirection]);

  const handleNextRecommendation = () => {
    setAnimationDirection('left');
    setNextRecommendation(
      currentRecommendation === recommendationsData.length - 1 ? 0 : currentRecommendation + 1
    );
  };

  const handlePreviousRecommendation = () => {
    setAnimationDirection('right');
    setNextRecommendation(
      currentRecommendation === 0 ? recommendationsData.length - 1 : currentRecommendation - 1
    );
  };

  const currentRecommendationData = recommendationsData[currentRecommendation];
  const animationClass = animationDirection ? `slide-${animationDirection}` : '';


  return (
    <section className="w-full bg-[#F3F8FF] dark:bg-[#192333]">
      <div className="flex flex-col justify-center md:justify-start items-center px-[24px] py-[48px] md:px-[85px] md:py-[72px] container">

      <h1 className="text-center text-primary-darkDefault dark:text-primary-light font-poppins font-bold text-[36px] md:text-[48px] leading-[41px] md:leading-[55px] tracking-[-0.01em]">
        What
        <span className="md:inline mx-1 md:mx-2"></span>
        <span className="relative inline-block">
          <span className="z-20 relative">they say</span>
          <div className="absolute bottom-[-1px] left-0 h-4 w-full bg-[#ffbe62] z-10"></div>
        </span>
        <span className="ml-2">about me</span>
      </h1>

      <div className="w-full 2xl:px-[85px] md:pt-[64px] pt-[36px] flex items-center justify-center md:justify-between">
        {/* Left Arrow for larger screens */}
        <Image
          src={TestimonialArrowLeft2}
          alt="arrow"
          width={56}
          height={56}
          className="hidden md:flex self-center 2xl:ml-[60px] md:mr-12 xl:mr-0 cursor-pointer transition-opacity duration-500 ease-in-out left-arrow hover:brightness-95 dark:hover:brightness-150"
          onClick={handlePreviousRecommendation}
        />

        {/* Center Content */}
        <div className={`transition-opacity duration-500 ${animationClass}`}>
        <div className="flex xl:flex-row flex-col items-start justify-center">
        <div className="flex items-start gap-3"> {/* Flex container to wrap image and arrows */}
            {/* Image Container */}
            <div className="flex-shrink-0 rounded-[16px] xl:mx-[26px] md:w-[323px] md:h-[350px] w-[200px] h-[200px] items-center overflow-hidden">
                <Image
                  src={currentRecommendationData.image}
                  alt="Person's Image"
                  className="md:w-[323px] md:h-[350px] w-[200px] h-[200px] rounded-[16px]"
                />
            </div>
            {/* Mobile Left Arrow */}
            <Image
              src={theme === "dark" ? arrowDarkLeftMobile : TestimonialArrowLeft2}
              alt="arrow"
              width={48}
              height={48}
              className="md:hidden cursor-pointer transition-opacity duration-500 ease-in-out"
              onClick={handlePreviousRecommendation}
            />

            {/* Mobile Right Arrow */}
            <Image
              src={theme === "dark" ? arrowDarkRightMobile : TestimonialArrowRight2}
              alt="arrow"
              width={48}
              height={48}
              className="md:hidden cursor-pointer transition-opacity duration-500 ease-in-out"
              onClick={handleNextRecommendation}
            />
        </div>

          {/* Quote and Attribution Container */}
          <div className="flex flex-col max-w-[345px] md:max-w-[400px] lg:min-w-[650px] 2xl:min-w-[749px] lg:items-start items-start md:text-center pb-[10px] pt-[40px] xl:pt-0">
            <Image
              src={Stars}
              alt="Star"
              width={116}
              height={20}
              className="mt-4.25 flex flex-col"
              />

            <p className="font-poppins text-[18px] md:text-[24px] font-normal leading-[28px] md:leading-[31px] text-left pt-[20px] text-[#6F74A7] dark:text-[#F3F8FF] lg:min-w-[500px] 2xl:min-w-[749px]">
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
        </div>

        {/* Right Arrow */}
        <Image
          src={TestimonialArrowRight2}
          alt="arrow"
          width={56}
          height={56}
          className="hidden md:flex justify-between self-center xl:ml-[25px] cursor-pointer right-arrow hover:brightness-95 dark:hover:brightness-150"
          onClick={handleNextRecommendation}
        />
      </div>
             
      </div>
    </section>
  );
};

export default Recommendations;
