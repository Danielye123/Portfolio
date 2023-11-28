import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
  <section className="bg-primary-light dark:bg-primary-darkDefault w-full">
    <div className="flex flex-col md:flex-row w-full md:px-[150px] py-[72px] items-center justify-between bg-[#FFFFFF] dark:bg-[#151E2C] container">
      <div className="text-[#778295] dark:text-[#F3F8FF]">
        © 2023 Daniel. All rights reserved.
      </div>
      <div className="flex flex-start flex-cols justify-center items-center gap-4 mt-4 sm:mt-0">
        <div>
          <a target="_blank" href="https://github.com/Danielye123">
            <AiFillGithub size={40} color="#778295" />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/daniel-y-075014107/"
          >
            <AiFillLinkedin size={40} color="#778295" />
          </a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Footer;
