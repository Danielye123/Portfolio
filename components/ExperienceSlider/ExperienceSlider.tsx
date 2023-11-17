"use client";

import React, { useState } from "react";
import CompanyCard from "./CompanyCard";
import { Slider } from ".."; //SVG slider component

const ExperienceSlider = ({ workExperiences, onCompanyChange }) => {
  const [value, setValue] = useState(0);

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    const currentExperienceIndex = Math.floor(
      (newValue / 2) * workExperiences.length
    );
    const currentExperience = workExperiences[currentExperienceIndex];

    // Call the onCompanyChange prop function with the current experience
    onCompanyChange(currentExperience);
  };

  // Calculate which card to show based on the slider value
  const currentExperienceIndex = Math.floor(
    (value / 2) * workExperiences.length
  );
  const currentExperience = workExperiences[currentExperienceIndex];

  return (
    <div className="experience-slider-container pb-[36px]">
      <input
        type="range"
        min="0"
        max="1"
        value={value}
        onChange={handleSliderChange}
        step="1"
        className="custom-range-slider"
      />
    </div>
  );
};

export default ExperienceSlider;
