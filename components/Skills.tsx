import { skills } from "@/constants"
import Image from "next/image"

const Skills = () => {
  return (
    <section className="flex flex-col justify-start items-center py-[72px] bg-primary-light dark:bg-primary-darkDefault w-full">
      <h1 className="text-primary-darkDefault dark:text-primary-light font-poppins font-bold text-[48px] leading-[55px] tracking-[-0.01em] underline underline-offset-1 decoration-[15px] decoration-[#FFBE62]">
      My skills
      </h1>
      <div className="flex flex-wrap justify-center pt-[48px] gap-[41px] px-[85px]">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`m-4 bg-[#F3F8FF] dark:bg-[#192333] w-[100px] h-[100px] rounded-full flex items-center justify-center`}
          >
            <Image src={skill.imgURL} alt={`Skill ${index}`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills