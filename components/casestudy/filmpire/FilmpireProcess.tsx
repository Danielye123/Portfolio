import Image from "next/image";
import { def, design, plan, dev, deploy, def2, design2, plan2, dev2, deploy2 } from "@/assets";

const FilmpireProcess = () => {
  return (
    <section className="px-[280px] py-[72px] bg-[#FFFFFF] dark:bg-[#151E2C]">
      <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins font-semibold text-[14px] leading-[20px] pb-[10px]">
        Way of work
      </div>
      <div className="text-[#151E2C] dark:text-[#FFFFFF] font-poppins font-semibold text-[32px] leading-[34px] pb-[40px]">
        My Process
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-[#F3F8FF] dark:bg-[#192333] w-[100px] h-[100px] flex items-center justify-center">
            <Image
              src={def2}
              alt="Definition"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="pt-[20px] text-[#192333] dark:text-[#FFFFFF] font-poppins font-semibold text-[20px] leading-[26px]">
            Definition
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-[#F3F8FF] dark:bg-[#192333] w-[100px] h-[100px] flex items-center justify-center">
            <Image
              src={design2}
              alt="Design"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="pt-[20px] text-[#192333] dark:text-[#FFFFFF] font-poppins font-semibold text-[20px] leading-[26px]">
            Design
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-[#F3F8FF] dark:bg-[#192333] w-[100px] h-[100px] flex items-center justify-center">
            <Image
              src={plan2}
              alt="Planning"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="pt-[20px] text-[#192333] dark:text-[#FFFFFF] font-poppins font-semibold text-[20px] leading-[26px]">
            Planning
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-[#F3F8FF] dark:bg-[#192333] w-[100px] h-[100px] flex items-center justify-center">
            <Image
              src={dev2}
              alt="Development"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="pt-[20px] text-[#192333] dark:text-[#FFFFFF] font-poppins font-semibold text-[20px] leading-[26px]">
            Development
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-[#F3F8FF] dark:bg-[#192333] w-[100px] h-[100px] flex items-center justify-center">
            <Image
              src={deploy2}
              alt="Deployment"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="pt-[20px] text-[#192333] dark:text-[#FFFFFF] font-poppins font-semibold text-[20px] leading-[26px]">
            Deployment
          </p>
        </div>
      </div>
    </section>
  );
};

export default FilmpireProcess;