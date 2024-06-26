import React from 'react'

interface ProjectRoleProps {
  project?: {
    role: string,
    startDate: string,
    endDate: string,
  }
}

const ProjectRole = ({ project }: ProjectRoleProps ) => {
  if (!project) {
    return <div className="text-black dark:text-white">No data available</div>;
  }

  return (
    <div className="container w-full 2xl:px-[280px] lg:px-[72px] px-[24px] py-16 bg-[#FFFFFF] dark:bg-[#151E2C] flex flex-col md:flex-row md:gap-[191px] gap-[36px] justify-between">
        <div className="font-poppins">
            <p className="pb-[10px] font-semibold text-[18px] leading-[29px] text-[#778295]">
                My Role
            </p>
            <h1 className="font-semibold text-[24px] leading-[31px] text-[#151E2C] dark:text-[#FFFFFF]">
                {project.role}
            </h1>
        </div>
        <div className="font-poppins">
        <p className="pb-[10px] font-semibold text-[18px] leading-[29px] text-[#778295]">
                Start Date
            </p>
            <h1 className="font-semibold text-[24px] leading-[31px] text-[#151E2C] dark:text-[#FFFFFF]">
                {project.startDate}
            </h1>
        </div>
        <div className="font-poppins">
        <p className="pb-[10px] font-semibold text-[18px] leading-[29px] text-[#778295]">
                End Date
            </p>
            <h1 className="font-semibold text-[24px] leading-[31px] text-[#151E2C] dark:text-[#FFFFFF]">
                {project.endDate}
            </h1>
        </div>
    </div>
  )
}

export default ProjectRole