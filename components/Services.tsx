import { services } from "@/constants";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="flex flex-col justify-start items-center py-[72px] bg-[#F3F8FF] dark:bg-[#192333] w-full h-[513px]">
      <h1 className="text-primary-darkDefault dark:text-primary-light font-poppins font-bold text-[48px] leading-[55px] tracking-[-0.01em]">
        What
        <span className="mr-[10px]"></span>
        <div className="inline-block relative">
          <span className="relative z-10">Service</span>
          <div className="absolute left-0 bottom-[0px] h-[15px] w-full bg-[#ffbe62] z-0" />
        </div>
        <span className="ml-[10px]"></span>
        do I provide
      </h1>
      <div>
        <div className="flex flex-wrap gap-[40px] pt-[40px] rounded-lg text-black">
          {services.map((service, index) => (
            <div
              key={index}
              className={`w-[285px] h-[265px] border rounded-lg shadow-md dark:border-[#1F2E48] dark:shadow-md p-4 flex flex-col items-start bg-[#F3F8FF] dark:bg-[#192333] hover:bg-[#0252CD] dark:hover:bg-[#428DFF] hover:text-primary-light service-card transition-transform transform hover:scale-105 ${
                index % 2 === 0 ? "" : "mt-[20px]" // Apply margin to even cards
              }`}
            >
              <Image
                src={service.imgUrl}
                alt={service.title}
                width={85}
                height={85}
                className="pb-[18px] pt-[15px]"
              />
              <h3 className="font-semibold text-lg mb-1 dark:text-primary-light">
                {service.title}
              </h3>
              <p className="text-sm text-[#6F74A7] dark:text-[#F3F8FF] pb-30px description-text">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
