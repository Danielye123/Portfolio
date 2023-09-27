import React from 'react';
import Image from 'next/image';
import {ellipse, rectangle} from "../assets/contact/index";

const Contact = () => {
    return (
        <div className="w-full px-[85px] h-[474px] bg-[#FFFFFF] dark:bg-[#151E2C] relative flex items-center justify-center">
            
            <div className="bg-[#FFBE62] w-full px-[85px] h-[330px] flex items-center justify-between rounded-3xl z-0">
            <div className="absolute top-[98.88px] left-[897.96px] transform rotate-90 z-10">
                <Image src={ellipse} alt="Pattern Ellipse" width={97.35} height={180.86} />
            </div>

            <div className="absolute top-[0.44px] left-[1247.11px] z-10">
                <Image src={rectangle} alt="Pattern Rectangle" width={181.19} height={168.29} />
            </div>
            
                <div className="font-poppins text-[48px] font-bold leading-[55px] tracking-[-0.01em] text-[#151E2C] w-[520px] h-[165px] ml-[75px]">
                    Have a project in mind that requires technical expertise?
                </div>
                <button className="w-[323px] h-auto py-[20px] px-[12px] rounded-full bg-[#0252CD] text-white">
                    Get in touch with me
                </button>
            </div>
        </div>
    )
}

export default Contact;
