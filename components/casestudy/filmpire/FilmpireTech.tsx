import { morrentSkills } from "@/constants";
import Image from "next/image";

const FilmpireTech = () => {
  return (
    <section className="px-[280px] py-[72px] bg-[#FFFFFF] dark:bg-[#151E2C]">
      <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins font-semibold text-[14px] leading-[20px] pb-[10px]">Techologies used</div>
      <div className="text-[#151E2C] dark:text-[#FFFFFF] font-poppins font-semibold text-[32px] leading-[34px]">Tech Stack</div>

      <div className="flex flex-wrap justify-center pt-[48px] gap-[30px]">
        {morrentSkills.map((skill, index) => (
          <div
            key={index}
            className={`m-4 bg-[#F3F8FF] hover:bg-[#FFFFFF] hover:drop-shadow-2xl dark:hover:drop-shadow-2xl transform transition-transform duration-300 hover:scale-200 dark:bg-[#192333] w-[93px] h-[93px] rounded-full flex items-center justify-center`}
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

export default FilmpireTech;
