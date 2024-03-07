

import React from "react";
import ProjectsHero from "@/components/casestudy/projects/ProjectsHero";
import { projectData } from "@/constants/projectData";
import ProjectRole from "@/components/casestudy/projects/ProjectsRole";
import ProjectTech from "@/components/casestudy/projects/ProjectTech";
import ProjectDescription from "@/components/casestudy/projects/ProjectDescription";
import ProjectProblem from "@/components/casestudy/projects/ProjectProblem";
import ProjectFigmaDesign from "@/components/casestudy/projects/ProjectFigmaDesign";
import ProjectProcess from "@/components/casestudy/projects/ProjectProcess";
import ProjectChallenges from "@/components/casestudy/projects/ProjectChallenges";
import ProjectCaseStudiesOther from "@/components/casestudy/projects/ProjectCaseStudiesOther";

const Page = ({ params }: { params: { projects: string } }) => {
    const projectId = params.projects

    // Find the project by ID
    const project = projectData.find(p => p.id === projectId);
  
    // handle the case where no project matches the given ID
    if (!project) {
      return <div>Project not found</div>;
    }

    const skillsKey = `${projectId}Skills`;
    const skills = (project as any)[skillsKey];


  return (
  <div className="dark:bg-[#151E2C] bg-[#FFFFFF] w-full">
    <ProjectsHero hero={project.hero}  />
    <ProjectRole project={project.role}  />
    <ProjectTech skills={skills} />
    <ProjectDescription description={project.description} />
    <ProjectProblem problem={project.problem} />
    <ProjectFigmaDesign figma={project.figma} />
    <ProjectProcess />
    <ProjectChallenges CL={project.challenges}  />
    <ProjectCaseStudiesOther otherProjects={project.otherProjects} />
  </div>
  )
};

export default Page;
