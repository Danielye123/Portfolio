import { morrentSkills } from "@/constants";
import Image from "next/image";

const MorrentTech = () => {
  return (
    <section className="container 2xl:px-[280px] lg:px-[72px] px-[24px] py-[72px] bg-[#FFFFFF] dark:bg-[#151E2C]">
      <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins font-semibold md:text-[14px] text-[12px] md:leading-[20px] leading-[17px] pb-[10px]">
        Techologies used
      </div>
      <div className="text-[#151E2C] dark:text-[#FFFFFF] font-poppins font-semibold md:text-[32px] text-[28px] md:leading-[34px] leading-[29px]">
        Tech Stack
      </div>

      <div className="flex flex-wrap justify-center pt-[48px] lg:gap-[30px] gap-[20px]">
        {morrentSkills.map((skill, index) => (
          <div key={index} className="group sm:m-4">
            <div className="relative flex items-center justify-center">
              <div
                className={`absolute bottom-full mb-2 sm:mb-4 text-center bg-[#FFFFFF] dark:bg-[#192333] text-black dark:text-[#F3F8FF] font-poppins font-normal text-[12px] leading-[18px] md:text-lg
              sm:py-2 sm:px-6 py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 border transition-transform duration-500 border-[#0252CD] border-opacity-30
              ${
                skill.name === "Framer Motion"
                  ? "overflow-hidden whitespace-nowrap text-overflow-ellipsis max-w-[200px]"
                  : ""
              }`}
              >
                {skill.name}
              </div>
              <div
                className={`bg-[#F3F8FF] hover:bg-[#FFFFFF] sm:hover:drop-shadow-2xl sm:dark:hover:drop-shadow-2xl transform transition-transform duration-100 hover:scale-110
                  dark:bg-[#192333] w-[52px] h-[52px] sm:w-[100px] sm:h-[100px] rounded-full flex items-center justify-center ease-in border
                  border-[#0252CD] border-opacity-10 hover:border-opacity-30 sm:border-none ${
                    index === 0 && "md:order-1"
                  }`}
              >
                <Image
                  src={skill.imgURL}
                  alt={`Skill ${index}`}
                  className="sm:w-[50px] sm:h-[50px] w-[26px] h-[26px] grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MorrentTech;
