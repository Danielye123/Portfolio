import React from 'react'

const MorrentRole = () => {
  return (
    <div className="container w-full 2xl:px-[280px] lg:px-[72px] px-[24px] py-16 bg-[#FFFFFF] dark:bg-[#151E2C] flex flex-col md:flex-row md:gap-[191px] gap-[36px] justify-between">
        <div className="font-poppins">
            <p className="pb-[10px] font-semibold text-[18px] leading-[29px] text-[#778295]">
                My Role
            </p>
            <h1 className="font-semibold text-[24px] leading-[31px] text-[#151E2C] dark:text-[#FFFFFF]">
                Software Engineer
            </h1>
        </div>
        <div className="font-poppins">
        <p className="pb-[10px] font-semibold text-[18px] leading-[29px] text-[#778295]">
                Start Date
            </p>
            <h1 className="font-semibold text-[24px] leading-[31px] text-[#151E2C] dark:text-[#FFFFFF]">
                October - 2022
            </h1>
        </div>
        <div className="font-poppins">
        <p className="pb-[10px] font-semibold text-[18px] leading-[29px] text-[#778295]">
                End Date
            </p>
            <h1 className="font-semibold text-[24px] leading-[31px] text-[#151E2C] dark:text-[#FFFFFF]">
                November - 2022
            </h1>
        </div>
    </div>
  )
}

export default MorrentRole