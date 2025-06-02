import { award, mine } from "@/award_mine";
import { flyer } from "@/flyer";
import { dm_sans, roboto, sora } from "@/font";
import EmailSection from "@/layout/EmailSection";
import LetTalk from "@/layout/LetTalk";
// import { engage } from "@/s_engage";
import { top_people } from "@/top_people";
import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <section className="w-ful h-full flex flex-col ">
      <header className="text-center flex flex-col gap-[18px] py-[44px] text-[#222] px-[10px]">
        <h1
          className={`text-[22px] sm:text-[40px] font-bold ${dm_sans.className}`}
        >
          Gallery
        </h1>
        {/* <p
          className={`text-[16px] md:text-[18px] font-normal ${roboto.className} leading-[2]`}
        >
          See through my Lens
        </p> */}
      </header>
      <div className="flex flex-col items-center pt-5">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 px-6 mx-auto">
          {mine.map((item, index) => (
            <div key={index} className="">
              <Image
              src={item.image}
              width={1000}
              height={1000}
              alt="AramideAbe"
              className="w-[100%] h-[100%]  sm:w-[100%] sm:h-[1005] mx-auto rounded-sm "
            />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-14 pt-16">
        <h1
          className={`text-[#2D2D2D] font-bold text-[25px] sm:text-[35px] ${dm_sans.className}`}
        >
            Recognition
        </h1>
        <div className=" justify-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-4 mx-auto">
          {award.map((item, index) => (
            <div key={index} className="w-[90%] sm:w-[400px] h-[30em]">
              <Image
              src={item.image}
              width={1000}
              height={1000}
              alt="AramideAbe"
              className=" w-full sm:w-[90%] h-full mx-auto rounded-lg object-cover"
            />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 pt-20">
        <h1
          className={`text-[#2D2D2D] font-bold text-[25px] sm:text-[35px] ${dm_sans.className}`}
        >
          With Global Leaders
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 mx-auto">
          {top_people.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4 px-6">
              <Image
              src={item.image}
              width={1000}
              height={1000}
              alt="AramideAbe"
              className=" w-[400px] h-[400px] sm:w-[400px] sm:h-[420px] mx-auto rounded-lg object-cover"
            />
            <p className="sm:w-[60%] md:w-[90%] text-center  text-[#2D2D2D] text-[13px] sm:text-[17px] font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 pt-20 mb-10">
        <h1
          className={`text-[#2D2D2D] font-bold text-[25px] sm:text-[35px] ${dm_sans.className}`}
        >
          Panels and Webinars
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 mx-auto">
          {flyer.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4 px-6">
              <Image
              src={item.image}
              width={1000}
              height={1000}
              alt="AramideAbe"
              className=" sm:w-[80%] h-[100%]] mx-auto rounded-lg object-cover"
            />
            </div>
          ))}
        </div>
      </div>
      <div >
        <LetTalk/>
      </div>
    </section>
  );
};

export default GalleryPage;
