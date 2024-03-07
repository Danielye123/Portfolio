import Image from "next/image";
import React from "react";
import Link from "next/link";

type CaseStudyData = {
  otherProjects: {
    map(arg0: (project: any) => React.JSX.Element): React.ReactNode;
    id: string;
    name: string;
    description: string;
    image: any;
    link: string;
    [key: string]: any;
  };
};

const ProjectCaseStudiesOther = ({ otherProjects }: CaseStudyData) => {
  return (
    <section className="w-full bg-[#F3F8FF] dark:bg-[#192333]">
      <div className="container 2xl:px-[280px] lg:px-[72px] px-[24px] py-[72px]">
        <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins font-semibold md:text-[14px] text-[12px] md:leading-[20px] leading-[17px] pb-[10px]">
          Projects
        </div>
        <div className="text-[#151E2C] dark:text-[#FFFFFF] font-poppins font-semibold md:text-[32px] text-[28px] md:leading-[34px] leading-[29px] pb-[40px]">
          Other Case Studies
        </div>

        <div className="flex flex-col lg:flex-row gap-[50px]">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="lg:w-[430px] lg:h-[460px] w-full h-auto bg-[#FFFFFF] dark:bg-[#192333] rounded-[20px] flex flex-col shadow-md shadow-[#E0ECFF] dark:shadow-xl dark:shadow-[#1F2C41]"
            >
              <Image
                src={project.image}
                alt="other studies"
                className="w-full object-cover justify-start rounded-t-lg"
                layout="responsive"
                height={200}
              />
              <div className="p-[24px] flex flex-col justify-between flex-grow">
                <div>
                  <p className="font-poppins font-semibold text-[24px] leading-[31px] text-[#0252CD] dark:text-[#428DFF]">
                    {project.name}
                  </p>
                  <p className="font-poppins font-normal text-[18px] leading-[29px] text-[#6F74A7]">
                    {project.description}
                  </p>
                </div>
                <Link href={project.link}>
                  <div className="mt-4 lg:w-96 lg:h-[48px] w-full py-[14px] rounded-full border border-[#0252CD] gap-[10px] bg-[#0252CD] hover:bg-[#428DFF] dark:bg-[#428DFF] dark:hover:bg-[#0252CD] text-white flex justify-center items-center">
                    <p className="text-[#FFFFFF] font-poppins font-semibold text-[14px] leading-[20px] text-center">
                      See Case Study
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCaseStudiesOther;
