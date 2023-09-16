import React from 'react'
import { featuredProjects } from "@/constants"

const FeaturedProjects = () => {
  return (
    <section className="min-h-screen flex flex-col justify-start items-center py-[72px] bg-[#FFFFFF] dark:bg-[#151E2C] w-full">
      <h1 className="text-primary-darkDefault dark:text-primary-light font-poppins font-bold text-[48px] leading-[55px] tracking-[-0.01em]">
        Featured
        <span className="mr-[10px]"></span>
        <span className="underline underline-offset-1 decoration-[15px] decoration-[#FFBE62]">Projects</span>
      </h1>

      <div className="w-full px-[85px]">

      {/* Project 1 */}
      <div className="h-[444px] bg-[#416CEA] rounded">
        <div>
          Morrent - A Car Rental Application
        </div>
        <div>

        </div>
      </div>

      {/* Project 2 */}
      <div>

      </div>

      {/* Project 3 */}
      <div>

      </div>
      </div>
    </section>
  )
}

export default FeaturedProjects