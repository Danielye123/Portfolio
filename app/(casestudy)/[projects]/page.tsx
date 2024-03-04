

import React from "react";
import ProjectsHero from "@/components/casestudy/projects/ProjectsHero";
import { projectData } from "@/constants";

const Page = ({ params }: { params: { projects: string } }) => {
    const projectId = params.projects

    // Find the project by ID
    const project = projectData.find(p => p.id === projectId);
  
    // handle the case where no project matches the given ID
    if (!project) {
      return <div>Project not found</div>;
    }

  return (
  <div className="dark:bg-[#151E2C] bg-[#FFFFFF] w-full">
    <ProjectsHero project={project}  />
    {/* {project} */}
  </div>
  )
};

export default Page;
