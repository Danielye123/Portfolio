import { morrentSkills } from "@/constants";
import Image from "next/image";

const MorrentTech = () => {
  return (
    <section className="2xl:px-[280px] lg:px-[72px] px-[24px] py-[72px] bg-[#FFFFFF] dark:bg-[#151E2C]">
      <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins font-semibold md:text-[14px] text-[12px] md:leading-[20px] leading-[17px] pb-[10px]">Techologies used</div>
      <div className="text-[#151E2C] dark:text-[#FFFFFF] font-poppins font-semibold md:text-[32px] text-[28px] md:leading-[34px] leading-[29px]">Tech Stack</div>

      <div className="flex flex-wrap justify-center pt-[48px] lg:gap-[30px] gap-[20px]">
        {morrentSkills.map((skill, index) => (
          <div
            key={index}
            className={`md:m-4 m-1 bg-[#F3F8FF] hover:bg-[#FFFFFF] hover:drop-shadow-2xl dark:hover:drop-shadow-2xl transform transition-transform duration-300 hover:scale-200 dark:bg-[#192333] w-[93px] h-[93px] rounded-full flex items-center justify-center`}
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

export default MorrentTech;
