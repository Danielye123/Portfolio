import Image from "next/image";
import { def, design, plan, dev, deploy, def2, design2, plan2, dev2, deploy2 } from "@/assets";

const HipnodeProcess = () => {
  return (
    <section className="2xl:px-[280px] lg:px-[72px] px-[24px] py-[72px] bg-[#FFFFFF] dark:bg-[#151E2C]">
      <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins font-semibold md:text-[14px] text-[12px] md:leading-[20px] leading-[17px] pb-[10px]">
        Way of work
      </div>
      <div className="text-[#151E2C] dark:text-[#FFFFFF] font-poppins font-semibold md:text-[32px] text-[28px] md:leading-[34px] leading-[29px] pb-[40px]">
        My Process
      </div>

      <div className="flex flex-row flex-wrap justify-center md:justify-between gap-[50px]">
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

export default HipnodeProcess;