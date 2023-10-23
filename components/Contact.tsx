import React from "react";
import Image from "next/image";
import {
  ellipse,
  rectangle,
  rectangle2,
  rectangle4403,
  rectangle4404,
  ellipse116,
  ellipse118,
  ellispe119,
} from "../assets/contact/index";

const Contact = () => {
  return (
    <div className="w-full px-[24px] md:px-[85px] h-[474px] bg-[#FFFFFF] dark:bg-[#151E2C] relative flex items-center justify-center">
      <div className="bg-[#FFBE62] w-full md:px-[85px] px-auto h-[330px] flex items-center flex-col md:flex-row md:justify-between rounded-3xl z-0 overflow-hidden relative">
        <div className="absolute top-[-1.1200000000000045px] left-[1282.96px] transform z-8">
          <Image
            src={ellipse}
            alt="Pattern Ellipse"
            width={180}
            height={180.86}
          />
        </div>
        <div className="absolute top-[181.39px] left-[1467.98px] transform z-8">
          <Image
            src={ellipse116}
            alt="Pattern ellipse116"
            width={180}
            height={180.86}
          />
        </div>
        <div className="absolute top-[-124.23px] left-[-2px] transform rotate-[270deg] md:rotate-[0deg] z-8">
          <Image
            src={ellipse118}
            alt="Pattern ellipse118"
            width={260}
            height={180.86}
          />
        </div>
        <div className="absolute top-[132px] left-[1099px] transform z-8">
          <Image
            src={ellispe119}
            alt="Pattern ellispe119"
            width={180}
            height={180.86}
          />
        </div>
        <div className="absolute top-[5.439999999999998px] left-[1463.11px] z-8 overflow-hidden">
          <Image
            src={rectangle}
            alt="Pattern Rectangle"
            width={181.19}
            height={168.29}
            className="overflow-hidden"
          />
        </div>
        <div className="absolute top-[1.4399999999999977px] left-[1462.11px] z-8 overflow-hidden">
          <Image
            src={rectangle2}
            alt="Pattern rectangle2"
            width={181.19}
            height={168.29}
            className="overflow-hidden"
          />
        </div>
        <div className="absolute top-[163.38px] left-[1276.97px] z-8 overflow-hidden">
          <Image
            src={rectangle4403}
            alt="Pattern rectangle4403"
            width={181.19}
            height={168.29}
            className="overflow-hidden"
          />
        </div>
        <div className="absolute top-[93.35px] left-[1279.79px] z-8 overflow-hidden">
          <Image
            src={rectangle4404}
            alt="Pattern rectangle4404"
            width={181.19}
            height={168.29}
            className="overflow-hidden"
          />
        </div>

        <div
          className="font-poppins md:text-[48px] text-[30px] font-bold md:leading-[55px] leading-[31px] md:tracking-[-0.01em] tracking-[-0.05em] text-[#151E2C]
         md:w-[520px] md:h-[165px] md:ml-[75px] mt-[77px] md:mt-0 text-left px-[17px] md:px-0 z-20 mb-5 md:mb-0"
        >
          Have a project in mind that requires technical expertise?
        </div>
        <button className="md:w-[323px] w-[310px] md:h-auto py-[20px] px-[12px] rounded-full bg-[#0252CD] dark:bg-[#428DFF] text-white z-20">
          Get in touch with me
        </button>
      </div>
    </div>
  );
};

export default Contact;
