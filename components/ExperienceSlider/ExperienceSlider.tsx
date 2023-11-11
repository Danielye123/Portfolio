"use client"

import React, { useState } from 'react';
import CompanyCard from './CompanyCard';
import { Slider } from "..";// Your custom SVG slider component

const workExperiences = [
  { id: 1, name: 'Slack', position: 'Full-Stack Developer', details: 'January 2023 - Present' },
  { id: 2, name: 'Firefox', position: 'Sr. Web Developer', details: 'September 2021 - December 2022' },
  // ... Add more experiences as needed
];

const ExperienceSlider = () => {
  const [value, setValue] = useState(0);

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  // Calculate which card to show based on the slider value
  const currentExperienceIndex = Math.floor((value / 100) * workExperiences.length);
  const currentExperience = workExperiences[currentExperienceIndex];

  return (
    <div className="experience-slider-container">
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={handleSliderChange}
      step="25"
      className="custom-range-slider"
    />
    {/* <Slider className="custom-slider-handle" style={{ left: `${value}%` }} /> */}
    {/* The company card should be displayed here */}
    <CompanyCard company={currentExperience} />
  </div>
  );
};

export default ExperienceSlider;
