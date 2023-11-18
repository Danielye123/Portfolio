import React from 'react'

const ExperienceDetails = (selectedCompany) => {
  return (
    <div>
      <h2 className="font-bold xl:text-[48px] lg:text-[44px] text-[36px] xl:leading-[55px] lg:leading-[50px] leading-[41px] tracking-[-0.01em] relative pt-[80px] font-poppins text-[#151E2C] dark:text-[#FFFFFF] pb-[26px]">
        <span className="relative inline-block z-10">
          {selectedCompany.title}
          <div className="absolute bottom-[0px] left-0 h-[15px] w-full bg-[#ffbe62] z-[-1]"></div>
        </span>{" "}
        <span className="relative inline-block">
          <span className="" />
          <h1 className="relative">{selectedCompany?.title2}</h1>
        </span>
      </h2>
      <div className="flex flex-col gap-4 xl:text-[18px] lg:text-[14px] font-normal font-poppins xl:leading-[29px] lg:leading-[21px] text-[#6F74A7] dark:text-[#F3F8FF] pb-[17px]">
        <p> {selectedCompany?.text.split(' ').map((word, index) => (
                    // Apply highlighting to specific words here
                    (word === 'projects' || word === 'fundamentals' || word === 'skills' || word === 'algorithms' || word === 'Full Stack') ? (
                      <span key={index} className="font-semibold text-[#0252CD] dark:text-[#428DFF]">{word} </span>
                    ) : (
                      <span key={index}>{word} </span>
                    )
                  ))}
        </p>
        <p>{selectedCompany?.text2.split(' ').map((word, index) => (
                    // Apply highlighting to specific words here
                    (word === 'projects' || word === 'fundamentals' || word === 'skills' || word === 'algorithms' || word === 'Full Stack') ? (
                      <span key={index} className="font-semibold text-[#0252CD] dark:text-[#428DFF]">{word} </span>
                    ) : (
                      <span key={index}>{word} </span>
                    )
                  ))}
        </p>
      </div>
    </div>
  )
}

export default ExperienceDetails