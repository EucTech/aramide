import Link from "next/link";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { dm_sans, inter } from "@/font";
import { Fade } from "react-awesome-reveal";

const LetTalk = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-6 items-start justify-center py-16 px-8 sm:px-10 md:px-32 bg-cover bg-center bg-no-repeat bg-[url('/b2.png')]">
       <Fade
          triggerOnce
          fraction={0.3}
          duration={1000}
          direction="up"
          delay={100}
          className=""
        >
      <h1
        className={` text-[40px] sm:text-[60px] text-[#FFFDD0] font-extrabold ${dm_sans.className} `}
      >
        Let&apos;s Talk
      </h1>
      </Fade>
      <Fade
          triggerOnce
          fraction={0.1}
          duration={1000}
          direction="up"
          delay={200}
          className=""
        >
      <p
        className={` w-full sm:w-[80%] md:w-[70%] xl:w-[50%] text-[16px] text-white ${inter.className} `}
      >
        Want to reach out to Aramide for Public speaking or consultation?
      </p>
      </Fade>
      <Fade
          triggerOnce
          fraction={0.1}
          duration={1000}
          direction="up"
          delay={300}
          className=""
        >
      <Link href="mailto:aramide@aramideng">
        <button className="flex items-center gap-5 cursor-pointer bg-[#191919] text-white hover:bg-[#191919]/80 transition-colors duration-300 !px-6 py-4 rounded-md">
          <FaEnvelope className="text-[#E1E8ED] size-7" />
          <p className={`text-[16px] font-[400] ${inter.className}`}>
            Contact Aramide
          </p>
        </button>
      </Link>
      </Fade>
    </div>
  );
};

export default LetTalk;
