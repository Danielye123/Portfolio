"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import { ChangeEvent } from 'react';
import { Company, ExperienceState } from "../Experience";

interface ExperienceSliderProps {
  workExperiences: Company[];
  onCompanyChange: (company: ExperienceState) => void;
  sliderValue: number;
}


// ExperienceSlider.js
const ExperienceSlider: React.FC<ExperienceSliderProps> = ({ workExperiences, onCompanyChange, sliderValue }) => {
  const { theme } = useTheme();
  const [value, setValue] = useState(0);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);

    // If the slider is at the initial position, set selectedCompany to null
    if (newValue === 0) {
      onCompanyChange(null);
    } else {
      // Use the slider value directly as an index (subtracting 1 because array indexes start at 0)
      const currentExperience = workExperiences[newValue - 1];
      onCompanyChange(currentExperience);
    }
  };

  // Calculate which card to show based on the slider value
  // const currentExperienceIndex = Math.floor(
  //   (value / 2) * workExperiences.length
  // );
  // const currentExperience = workExperiences[currentExperienceIndex];

  return (
    <div>
      <p className="font-poppins text-[14px] font-normal leading-[22px] text-[#6F74A7] dark:text-[#F3F8FF] pb-[30px] pl-[5px]">
        👉 Slide the bar to reveal details of my web experience.
      </p>
      <div className="experience-slider-container pb-[36px]">
        <input
          type="range"
          min="0"
          max={workExperiences.length}
          value={sliderValue}
          onChange={handleSliderChange}
          step="1"
          // className="custom-range-slider"
          className={
            theme === "dark"
              ? "custom-range-slider"
              : "custom-range-slider-dark"
          }
        />
      </div>
    </div>
  );
};

export default ExperienceSlider;
