import React from 'react'
import { HFHipnode } from "@/assets"
import Image from "next/image"

const HipnodeFigmaDesign = () => {
  return (
    <div className="w-full text-center bg-[#0252CD] dark:bg-[#428DFF]">
        <div className="text-[#FFFFFF] font-poppins font-semibold text-[32px] leading-[34px] text-center items-center justify-center py-[36px]">
            HIGH-FIDELITY FIGMA DESIGN
        </div>

        <div>
            <Image 
                src={HFHipnode}
                alt="Figma design"
                height={767}
                width={1440}
                className="object-contain w-full"
            />
        </div>

    </div>
  )
}

export default HipnodeFigmaDesign