import Image from "next/image";

const CompanyCardDisplay = ({ companies, selectedCompany }) => {
  if (!companies || companies.length === 0)
    return <div>No companies available</div>;

  return (
    <div className="w-[607px]">
      {companies.map((company, index) => (
        <div
          key={index}
          className={`company-card bg-[#F3F8FF] flex items-center group ${
            selectedCompany?.id === company.id
              ? "selected-class group grayscale-0"
              : ""
          } rounded-[10px] mb-[35px] group transition-transform transform 
          hover:scale-105 hover:translate-x-8 hover:grayscale-0`}
        >
          {/* <div className="flex flex-row pl-[32px] grayscale group-hover:grayscale-0"> */}
          <div className="flex flex-row pl-[32px]">
            <div
              className={`${
                selectedCompany?.id !== company.id ? "grayscale group-hover:grayscale-0" : ""
              }`}
            >
              <Image
                src={company.image}
                alt="companyImage"
                width={58}
                height={58}
              />
            </div>
            <div className="pl-[32px]">
              <h3 className="font-poppins font-semibold text-[24px] leading-[31px] text-[#151E2C]">
                {company.name}
              </h3>
              <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#6F74A7]">
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
