import Image from "next/image";

const CompanyCardDisplay = ({ companies, selectedCompany }) => {
  if (!companies || companies.length === 0)
    return <div>No companies available</div>;

  return (
    <div className="w-full">
      {companies.map((company, index) => (
        <div
          key={index}
          className={`company-card bg-[#F3F8FF] dark:bg-[#151E2C] flex items-center group ${
            selectedCompany?.id === company.id
              ? "selected-class group grayscale-0 bg-[#FFFFFF] dark:bg-[#192333]"
              : ""
          } rounded-[10px] mb-[35px] group 
          transition-transform transform md:hover:scale-105 md:hover:translate-x-8 hover:grayscale-0
         `}
        >
          {/* <div className="flex flex-row pl-[32px] grayscale group-hover:grayscale-0"> */}
          <div className="flex flex-col md:flex-row pl-[32px] py-[30px] w-full items-center">
            <div
              className={`${
                selectedCompany?.id !== company.id ? "grayscale group-hover:grayscale-0 bg-[#FFFFFF] dark:bg-[#192333]" : ""
              }`}
            >
              <Image
                src={company.image}
                alt="companyImage"
                width={58}
                height={58}
                className=""
              />
            </div>
            <div className="pl-[32px] sm:pr-[100px] pr-[40px]">
              <h3 className="font-poppins font-semibold text-[24px] leading-[31px] text-[#151E2C] dark:text-[#FFFFFF]">
                {company.name}
              </h3>
              <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#6F74A7] dark:text-[#F3F8FF]">
                {company.position} -- {company.details}
              </p>
            </div>
          </div>
        </div>
        // </div>
      ))}
    </div>
  );
};

export default CompanyCardDisplay;
