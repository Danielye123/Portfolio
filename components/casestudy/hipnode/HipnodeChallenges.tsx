import Image from "next/image";
import { check, challenge } from "@/assets";

const HipnodeChallenges = () => {
  return (
    <section className="px-[280px] py-[72px] bg-[#FFFFFF] dark:bg-[#151E2C]">
      <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins font-semibold text-[14px] leading-[20px] pb-[10px]">
        Problem
      </div>
      <div className="text-[#151E2C] dark:text-[#FFFFFF] font-poppins font-semibold text-[32px] leading-[34px] pb-[40px]">
        Challenges & Learnings
      </div>

      <div className="w-full py-[30px] bg-[#F3F8FF] dark:bg-[#192333] rounded-md">
        <p className="text-[#E15A46] font-poppins font-semibold text-[20px] leading-[26px] text-left pl-[40px]">
          CHALLENGES
        </p>
        <div className="pt-[36px] px-[40px] flex gap-4 items-start text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal text-[18px] leading-[29px]">
          <Image
            src={challenge}
            width={18}
            height={18}
            alt="challenge"
            className="object-contain mt-[6px] flex-none"
          />
          Gained extensive knowledge of full authentication and authorization
          implementation, including the use of industry-standard security
          protocols such as JSON Web Tokens.
        </div>
        <div className="pt-[20px] px-[40px] flex gap-4 items-start text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal text-[18px] leading-[29px]">
          <Image
            src={challenge}
            width={18}
            height={18}
            alt="challenge"
            className="object-contain mt-[6px] flex-none"
          />
          We conducted brainstorming and carefully weighed our options before
          making a decision. Furthermore, using NextJS was a new experience for
          us, and we encountered difficulties while implementing its features.
          Finally, we had to work under time constraints, which added pressure
          to the project.
        </div>
        <div className="pt-[20px] pb-[30px] px-[40px] flex gap-4 items-start text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal text-[18px] leading-[29px]">
          <Image
            src={challenge}
            width={18}
            height={18}
            alt="challenge"
            className="object-contain mt-[6px] flex-none"
          />
          However, we collaborated effectively to overcome these obstacles and
          ultimately delivered a high-quality product within the given timeline.
        </div>
      </div>

      <div className="w-full mt-[30px] pt-[30px] bg-[#F3F8FF] dark:bg-[#192333] rounded-md">
        <p className="text-[#02BC7D] font-poppins font-semibold text-[20px] leading-[26px] text-left pl-[40px]">
          LEARNINGS
        </p>
        <div className="pt-[36px] px-[40px] flex gap-4 items-start text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal text-[18px] leading-[29px]">
          <Image
            src={check}
            width={18}
            height={18}
            alt="check"
            className="object-contain mt-[6px] flex-none"
          />
          Gained extensive knowledge of full authentication and authorization
          implementation, including the use of industry-standard security
          protocols such as JSON Web Tokens.
        </div>
        <div className="pt-[20px] px-[40px] flex gap-4 items-start text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal text-[18px] leading-[29px]">
          <Image
            src={check}
            width={18}
            height={18}
            alt="check"
            className="object-contain mt-[6px] flex-none"
          />
          Sharpened my backend skills, specifically in optimizing database
          queries, improving performance, and handling server-side logic.
        </div>
        <div className="pt-[20px] px-[40px] flex gap-4 items-start text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal text-[18px] leading-[29px]">
          <Image
            src={check}
            width={18}
            height={18}
            alt="check"
            className="object-contain mt-[6px] flex-none"
          />
          Learned how to properly handle files, including file upload, storage,
          and retrieval, ensuring that the app's data is organized & easily
          accessible while keeping it secure.
        </div>
        <div className="pt-[20px] pb-[30px] px-[40px] flex gap-4 items-start text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal text-[18px] leading-[29px]">
          <Image
            src={check}
            width={18}
            height={18}
            alt="check"
            className="object-contain mt-[6px] flex-none"
          />
          Acquired proficiency in NextJS and implemented various features
          utilizing industry-standard best practices.
        </div>
      </div>
    </section>
  );
};

export default HipnodeChallenges;
