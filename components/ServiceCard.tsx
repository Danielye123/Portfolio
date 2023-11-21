import { services } from "@/constants";

const ServiceCard = () => {
  return (
    <div className="flex flex-row flex-wrap gap-[40px] mt-8 md:mt-16 pb-14 md:pb-20 md:px-12 lg:px-0 xl:px-12 justify-center hover:overflow-hidden">
      {services.map((service, index) => (
        <div
          key={index}
          className={`group w-[285px] h-[265px] lg:w-[450px] lg:h-[239px] xl:w-[285px] xl:h-[265px] rounded-lg shadow-lg border custom-box-shadow-card dark:shadow-[#1F2E48] dark:border-[#1F2E48] dark:shadow-md p-4 flex flex-col items-start bg-[#F3F8FF] dark:bg-[#192333] text-black service-card transition-transform transform 
    hover:scale-105 hover:translate-y-4 hover:bg-[#0252CD] dark:hover:bg-[#428DFF] hover:text-[#F3F8FF] hover:shadow-lg custom-box-shadow dark:hover:shadow-lg serviceCard`}
        >
          <div
            className={`mt-2 md:mt-0 mb-4 md:mb-8 md:w-16 md:h-16 bg-[#0252CD] dark:bg-[#428DFF] rounded-lg hoverBgChange flex justify-center items-center shadow-lg custom-box-shadow-blue`}
          >
            <service.Component
              className="text-white group-hover:text-[#0252CD] dark:text-white dark:group-hover:text-[#428DFF] my-auto transform translate-x-7 translate-y-7 md:translate-x-[18px] md:translate-y-5"
              width="85"
              height="85"
            />
          </div>

          <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-4 dark:text-primary-light">
            {service.title}
          </h3>
          <p className="text-sm md:text-base text-[#6F74A7] dark:text-[#F3F8FF] pb-4 md:pb-8 description-text">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
