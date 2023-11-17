"use client";

import React, { useState } from "react";

// ExperienceSlider.js
const ExperienceSlider = ({ workExperiences, onCompanyChange }) => {
  const [value, setValue] = useState(0);

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);

    // If the slider is at the initial position, set selectedCompany to null
    if (newValue === 0) {
      onCompanyChange(null);
    } else {
      // Adjusted index calculation to start from 0
      const currentExperienceIndex = Math.floor(
        ((newValue - 1) / 2) * workExperiences.length
      );
      const currentExperience = workExperiences[currentExperienceIndex];
      // Call the onCompanyChange prop function with the current experience
      onCompanyChange(currentExperience);
    }
  };

  // Calculate which card to show based on the slider value
  // const currentExperienceIndex = Math.floor(
  //   (value / 2) * workExperiences.length
  // );
  // const currentExperience = workExperiences[currentExperienceIndex];

  return (
    <div className="experience-slider-container pb-[36px]">
      <input
        type="range"
        min="0"
        max="2"
        value={value}
        onChange={handleSliderChange}
        step="1"
        className="custom-range-slider"
      />
    </div>
  );
};

export default ExperienceSlider;
