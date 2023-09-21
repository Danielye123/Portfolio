import Image from "next/image"
import React from 'react'
import { Star, Stars, richard, TestimonialArrowLeft, TestimonialArrowRight } from "@/assets"

const Recommendations = () => {
  return (
    <section className="w-full h-[589px] flex flex-col justify-start items-center px-[85px] py-[72px] bg-[#F3F8FF] dark:bg-primary-darkDefault">
      <h1 className="text-primary-darkDefault dark:text-primary-light font-poppins font-bold text-[48px] leading-[55px] tracking-[-0.01em]">
        What<span className="mx-2"></span>
        <div className="relative inline-block">
          <span className="z-20 relative">they say</span>
          <div className='absolute bottom-[-1px] left-0 h-4 w-full bg-[#ffbe62] z-10' />
        </div>
        <span className="ml-2">about me</span>
      </h1>

      <div className="w-full px-[85px] pt-[64px] flex items-center justify-between">
        {/* Left Arrow */}
        <Image
          src={TestimonialArrowLeft}
          alt="arrow"
          width={56}
          height={56}
          className="flex justify-between self-center mr-[26px]"
        />

        {/* Center Content */}
        <div className="flex items-start justify-center space-x-4">
        {/* Image Container */}
        <Image
          src={richard}
          alt="Person's Image"
          width={328}
          height={350}
          className="rounded-lg mx-[26px]"  // Added margin for space between arrows and content.
        />

        {/* Quote and Attribution Container */}
        <div className="flex flex-col w-[749px] pt-[10px]">
          <Image
            src={Stars}
            alt="Star"
            width={116}
            height={20}
            className="mt-4.25"
          />

          <p className="font-poppins text-[24px] font-normal leading-[31px] text-left pt-[20px] text-[#6F74A7] dark:text-[#F3F8FF]">
            Daniel is a disciplined and problem-solving software developer focused on best practices and staying current with the latest technologies.
            Working alongside Daniel has been a pleasure as he is a team player and communicates efficiently.
            Under pressure, he has shown competence and dedication to the goal of delivering projects in a timely manner.
            I highly recommended Daniel to any organization looking for a passionate developer.
          </p>

          <p className="font-poppins text-[18px] font-semibold leading-[29px] text-left text-[#192333] dark:text-[#F3F8FF] pt-[4px]">
            — Richard Gabriel
          </p>

          <p className="font-poppins text-[18px] font-normal leading-[29px] text-left text-[#6F74A7] dark:text-[#F3F8FF] pt-[2px]">
            React Software Engineer
          </p>
        </div>
        </div>

        {/* Right Arrow */}
        <Image
          src={TestimonialArrowRight}
          alt="arrow"
          width={56}
          height={56}
          className="flex justify-between self-center ml-[60px]"
        />

      </div>
    </section>

  )
}

export default Recommendations