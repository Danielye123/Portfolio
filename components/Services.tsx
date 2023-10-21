// import { services } from "@/constants";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Cursor } from "@/components";

// const Services = () => {
//   const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

//   return (
//     <section className="flex flex-col justify-start items-center py-[72px] bg-[#F3F8FF] dark:bg-[#192333] w-full h-[513px]">
//       <h1 className="text-primary-darkDefault dark:text-primary-light font-poppins font-bold text-[48px] leading-[55px] tracking-[-0.01em]">
//         What
//         <span className="mr-[10px]"></span>
//         <div className="inline-block relative">
//           <span className="relative z-10">Service</span>
//           <div className="absolute left-0 bottom-[0px] h-[15px] w-full bg-[#ffbe62] z-0" />
//         </div>
//         <span className="ml-[10px]"></span>
//         do I provide
//       </h1>

//       <div>
//         <div className="flex flex-wrap gap-[40px] pt-[40px] rounded-lg">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`group w-[285px] h-[265px] rounded-lg shadow-lg border shadow-[#E0ECFF] dark:shadow-[#1F2E48] dark:border-[#1F2E48] dark:shadow-md p-4 flex flex-col items-start bg-[#F3F8FF] dark:bg-[#192333] text-black service-card transition-transform transform
//     hover:scale-105 hover:mt-[20px] hover:bg-[#0252CD] hover:text-[#F3F8FF] hover:shadow-lg hover:shadow-[#0252CD] dark:hover:shadow-lg dark:hover:shadow-[#428DFF] serviceCard`}
//             >
//               <div
//                 className={`mt-[10px] mb-[15px] w-[62px] h-[62px] bg-[#0252CD] dark:bg-[#428DFF] rounded-lg hoverBgChange flex justify-center items-center`}
//               >
//                 <service.Component
//                   className="text-white group-hover:text-[#0252CD] dark:text-white dark:group-hover:text-[#0252CD] my-auto transform translate-x-4 translate-y-4"
//                   width="85"
//                   height="85"
//                 />
//               </div>

//               <h3 className="font-semibold text-lg mb-1 dark:text-primary-light">
//                 {service.title}
//               </h3>
//               <p className="text-sm text-[#6F74A7] dark:text-[#F3F8FF] pb-30px description-text">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import { services } from "@/constants";
import { ServiceCard } from ".";

const Services = () => {
  return (
    <section className="flex flex-col justify-start items-center py-[72px] bg-[#F3F8FF] dark:bg-[#192333] w-full md:h-[550px] h-[1400px] overflow-hidden">
      <h1 className="text-primary-darkDefault dark:text-primary-light font-poppins font-bold text-[48px] leading-[55px] tracking-[-0.01em] text-center md:text-left">
        What
        <span className="mr-[10px]"></span>
        <div className="inline-block relative">
          <span className="relative z-10">Service</span>
          <div className="absolute left-0 bottom-[0px] h-[15px] w-full bg-[#ffbe62] z-0" />
        </div>
        <span className="ml-[10px]"></span>
        do I provide
      </h1>

      <ServiceCard />
    </section>
  );
};

export default Services;
