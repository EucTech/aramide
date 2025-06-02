"use client";
import { dm_sans, inter, sora } from "@/font";
import EmailSection from "@/layout/EmailSection";
import FeaturedInterviews from "@/layout/FeaturedInterviews";
import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import LetTalk from "@/layout/LetTalk";

const page = () => {
  const itemImages = [
    {
      id: 2,
      url: "/IP-2.svg",
      alt: "mend",
    },
    {
      id: 3,
      url: "/IP-3.svg",
      alt: "jet",
    },
    {
      id: 4,
      url: "/IP-4.svg",
      alt: "spend",
    },
    {
      id: 5,
      url: "/IP-5.svg",
      alt: "footwear",
    },
    {
      id: 8,
      url: "/IP-8.svg",
      alt: "spend",
    },
    {
      id: 6,
      url: "/IP-6.svg",
      alt: "bph",
    },
    {
      id: 13,
      url: "/IP-13.svg",
      alt: "footwear",
    },
    {
      id: 14,
      url: "/IP-14.svg",
      alt: "bph",
    },
    {
      id: 17,
      url: "/IP-17.png",
      alt: "undp",
    },
    {
      id: 7,
      url: "/IP-7.svg",
      alt: "food",
    },
    {
      id: 1,
      url: "/IP-1.svg",
      alt: "mail-drip",
    },

    {
      id: 11,
      url: "/IP-11.svg",
      alt: "food",
    },
    {
      id: 10,
      url: "/IP-10.svg",
      alt: "bph",
    },
    {
      id: 9,
      url: "/IP-9.svg",
      alt: "footwear",
    },
  ];

  const options = {
    type: "loop",
    drag: "free",
    focus: "center",
    arrows: false,
    fixedWidth: "15rem",
    fixedHeight: "7rem",
    width: "99%",
    perPage: 4,
    autoScroll: {
      speed: 2,
    },
    breakpoints: {
      640: {
        perPage: 1,
      },
      850: {
        perPage: 2,
      },
      1024: {
        perPage: 3,
      },
    },
  };

  return (
    <div className="flex flex-col">
      <div className="">
        <video
          preload="none"
          controls
          muted
          autoPlay
          height="300px"
          width="400px"
          className=" object-cover w-full h-[32em]"
        >
          <source src="/videos/aramide.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center py-10 px-5 bg-[#f5e9d6]">
        <h1
          className={`text-[#2D2D2D] md:text-[28px] text-[20px] font-semibold ${dm_sans.className}`}
        >
          Speaking Engagements
        </h1>
        <p
          className={`md:w-[60%] text-[16px] text-center text-[#1A1313] ${dm_sans.className}`}
        >
          Renowned for her thought leadership and articulation, Aramide is in
          high demand as a keynote speaker, panelist and moderator, where she
          provides authentic and insightful opinions on a variety of thematic
          areas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <Image
            src={"/sp1.jpg"}
            alt="Aramide Abe"
            width={500}
            height={400}
            className=" w-[500px] h-[20em] object-cover rounded"
          />
          <Image
            src={"/sp2.jpg"}
            alt="Aramide Abe"
            width={500}
            height={400}
            className=" w-[500px] h-[20em] object-cover rounded"
          />
          <Image
            src={"/sp3.jpg"}
            alt="Aramide Abe"
            width={500}
            height={400}
            className=" w-[500px] h-[500px] object-cover rounded"
          />
          <Image
            src={"/sp4.jpg"}
            alt="Aramide Abe"
            width={500}
            height={400}
            className=" w-[500px] h-[500px] object-cover rounded"
          />
        </div>
      </div>

      <div className="py-16">
        <h1
          className={`text-[#2D2D2D] md:text-[28px] text-[20px] font-medium text-center ${dm_sans.className}`}
        >
          Platforms Aramide has spoken on
        </h1>
        <Splide options={options} extensions={{ AutoScroll }}>
          {itemImages.map((item, index) => {
            return (
              <SplideSlide
                key={index}
                style={{
                  overflow: "hidden",
                  // position: "relative",
                  margin: "2rem",
                  marginBottom: "3rem",
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="shadow-lg w-[200px]">
                  <Image
                    src={item.url}
                    width={300}
                    height={300}
                    alt={item.alt}
                    className="w-[100%] h-[100%]"
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <LetTalk />
      <FeaturedInterviews />
    </div>
  );
};

export default page;
