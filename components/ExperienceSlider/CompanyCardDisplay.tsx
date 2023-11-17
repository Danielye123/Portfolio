import Image from "next/image";
import { UCMLogo, JSMLogo } from "@/assets";

const CompanyCardDisplay = ({ companies, selectedCompany }) => {
  if (!companies || companies.length === 0)
    return <div>No companies available</div>;

  return (
    <div className="w-[607px]">
      {companies.map((company, index) => (
        <div
          key={index}
          className={`company-card bg-[#F3F8FF] rounded-[10px] flex items-center ${
            selectedCompany?.id === company.id ? "selected-class" : ""
          } hover:bg-[#5CAFFC] rounded-[1px] p-[10px] mb-[10px]`}
        >
          <div className="flex flex-row">
            <Image
              src={company.image}
              alt="companyImage"
              width={58}
              height={58}
            />
            <div className="pl-[32px]">
              <h3 className="font-poppins font-semibold text-[24px] leading-[31px] text-[#151E2C]">{company.name}</h3>
              <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#6F74A7]">{company.position} -- {company.details}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyCardDisplay;
