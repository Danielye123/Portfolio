import { skills } from "@/constants";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="flex flex-col justify-start items-center py-[72px] bg-primary-light dark:bg-primary-darkDefault w-full">
      <h1 className="text-primary-darkDefault dark:text-primary-light font-poppins font-bold text-[48px] leading-[55px] tracking-[-0.01em]">
        <div className="inline-block relative">
          <span className="relative z-10">My Skills</span>
          <div className="absolute left-0 bottom-[0px] h-[15px] w-full bg-[#ffbe62] z-0" />
        </div>
      </h1>
      <div className="flex flex-wrap justify-center pt-[48px] gap-[41px] px-[85px]">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`m-4 bg-[#F3F8FF] hover:bg-[#FFFFFF] hover:drop-shadow-2xl dark:hover:drop-shadow-2xl transform transition-transform duration-300 hover:scale-200 dark:bg-[#192333] w-[100px] h-[100px] rounded-full flex items-center justify-center
            grayscale hover:grayscale-0 opacity-50 hover:opacity-100
            `}
          >
            <Image
              src={skill.imgURL}
              alt={`Skill ${index}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
