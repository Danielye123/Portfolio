import { skills } from "@/constants";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="flex flex-col justify-start items-center md:py-[72px] md:px-[85px] py-[40px] bg-primary-light dark:bg-primary-darkDefault">
<h1 className="text-primary-darkDefault dark:text-primary-light font-poppins font-bold text-[36px] md:text-[48px] leading-[41px] md:leading-[55px] tracking-[-0.01em] sm:my-0 md:my-0 max-w-[390px] my-10">
        <div className="inline-block relative">
          <span className="relative z-10">My Skills</span>
          <div className="absolute left-0 bottom-0 h-[15px] w-full bg-[#ffbe62] z-0" />
        </div>
      </h1>
      {/*className="grid grid-cols-4 gap-x-[2.5rem] gap-y-12 md:flex md:flex-wrap md:justify-center lg:gap-[4rem] 
          xl:gap-x-[2.8916rem] xl:gap-y-[4.13rem]" */}
      <div className="grid grid-cols-4 gap-x-[2.5rem] gap-y-8 md:flex md:flex-wrap md:justify-center lg:gap-[4rem] 
          xl:gap-x-[2.8916rem] xl:gap-y-[4.13rem] py-10 px-6 md:px-[150px]">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`m-4 bg-[#F3F8FF] hover:bg-[#FFFFFF] hover:drop-shadow-2xl dark:hover:drop-shadow-2xl transform transition-transform duration-300 hover:scale-200 dark:bg-[#192333] w-[54px] h-[52px] md:w-[100px] md:h-[100px] rounded-full flex items-center justify-center
            grayscale hover:grayscale-0 opacity-50 hover:opacity-100
            ${index === 0 && 'md:order-1'}`}
          >
            <Image src={skill.imgURL} alt={`Skill ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
