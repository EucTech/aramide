import { dm_sans } from "@/font";
import Link from "next/link";
import React from "react";

const EmailSection = () => {
  return (
    <div className="px-[30px] sm:px-[100px] py-20 w-full">
      <div className="bg-[#C8AC80] rounded-[20px] w-full h-[174px] flex flex-col md:flex-row items-center gap-10  md:gap-0 md:justify-between px-[30px] py-[16px] lg:px-[60px]">
        <p className={`text-[#fff] text-[20px] sm:text-[28px] font-semibold ${dm_sans.className}`}>
        Contact Aramide
        </p>
        <Link
          href={"mailto:aramide@aramideng"}
          className={`text-[14px] sm:text-[16px] px-[25px] bg-[#F9F9F9] font-semibold w-[160px] h-[40px] md:p-0 rounded-[10px] flex items-center justify-center ${dm_sans.className}`}
        >
          Email
        </Link>
      </div>
    </div>
  );
};

export default EmailSection;
