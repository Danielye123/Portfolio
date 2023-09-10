import Image from "next/image"
import Link from "next/link";

import { hero, man } from '../assets/index';

const Hero = () => {
  return (
    <section className="w-full pt-16px px-[85px] flex flex-row min-h-screen text-black dark:bg-[#192333] bg-[#F3F8FF]">

      <div className="flex-1 flex flex-col items-left">

      <div className="flex-none h-1/5"></div> {/* Spacer div */}

        <div className="font-semibold text-[20px] leading-[26px] text-text-accentBlue dark:text-primary-darkmodeblue font-poppins tracking-[.3em]">
          <h2>HI, I AM DANIEL YE</h2>
        </div>

        <div className="pt-[27px] pb-[10px]">
          <h1 className="leading-[83px] font-bold text-[64px] dark:text-[#FFFFFF]">
            Professional 
            <br />
            <span className="underline underline-offset-1 decoration-[28px] decoration-[#FFBE62]">Web Developer </span> <br />
            based in USA
          </h1>
        </div>

        <div className="font-poppins font-normal text-lg text-text-body dark:text-[#F3F8FF] pb-[36px]">
        Transforming the web one line of code at a time: <br />
        Crafting cutting-edge digital experiences with precision, <br /> 
        passion, and a profound commitment to excellence 
        </div>

        <br />
        
        <div className="flex flex-row gap-[18px]">
        <Link href="/contact">
          <button>
          Contact me
          </button>
        </Link>

        <div>
          Social Media
        </div>
        </div>

      </div>

      <div className="justify-center items-center flex flex-1">
      <Image
            src={man}
            alt="hero"
            width={1000}
            height={1000}
            // className="object-contain relative"
          />
      </div>
    </section>
  )
}

export default Hero;