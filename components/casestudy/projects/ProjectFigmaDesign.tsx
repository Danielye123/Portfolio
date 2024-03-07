import React from 'react'
import { HF2 } from "@/assets"
import Image from "next/image"

interface figmaProp{
    figma: {
        image: any,
    }
}

const ProjectFigmaDesign = ({figma}: figmaProp) => {
  return (
    <div className="container w-full text-center bg-[#0252CD] dark:bg-[#428DFF]">
        <div className="text-[#FFFFFF] font-poppins font-semibold md:text-[32px] text-[14px] md:leading-[34px] leading-[20px] text-center items-center justify-center md:py-[36px] py-[9px]">
            HIGH-FIDELITY FIGMA DESIGN
        </div>

        <div>
            <Image 
                src={figma.image}
                alt="Figma design"
                height={767}
                width={1440}
                className="object-contain w-full"
            />
        </div>

    </div>
  )
}

export default ProjectFigmaDesign