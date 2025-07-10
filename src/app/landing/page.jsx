"use client";
import { abhaya_libre, dm_sans, inter, poppins, sora } from "@/font";
import EmailSection from "@/layout/EmailSection";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "@/app/globals.css";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa6";
import { BsCheck2Square } from "react-icons/bs";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import LetTalk from "@/layout/LetTalk";
import { Fade } from "react-awesome-reveal";

const LandingPage = () => {
  const [currentIndexSlider, setCurrentIndexSlider] = useState(0);
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

    // {
    //   id: 12,
    //   url: "/IP-12.svg",
    //   alt: "spend",
    // },

    // {
    //   id: 15,
    //   url: "/IP-15.svg",
    //   alt: "food",
    // },
  ];
  const itemImages2 = [
    {
      id: 3,
      url: "/Untitled/image53.svg",
      alt: "jet",
    },
    {
      id: 6,
      url: "/Untitled/image72.svg",
      alt: "bph",
    },
    {
      id: 7,
      url: "/Untitled/image73.svg",
      alt: "food",
    },
    {
      id: 9,
      url: "/Untitled/image76.svg",
      alt: "footwear",
    },

    {
      id: 2,
      url: "/Untitled/image51.svg",
      alt: "mend",
    },
    {
      id: 5,
      url: "/Untitled/image71.svg",
      alt: "footwear",
    },
    {
      id: 14,
      url: "/Untitled/image81.svg",
      alt: "bph",
    },
    {
      id: 13,
      url: "/Untitled/image80.svg",
      alt: "footwear",
    },
    {
      id: 8,
      url: "/Untitled/image75.svg",
      alt: "spend",
    },
    {
      id: 11,
      url: "/Untitled/image78.svg",
      alt: "food",
    },
    {
      id: 12,
      url: "/Untitled/image79.svg",
      alt: "spend",
    },
    {
      id: 10,
      url: "/Untitled/image77.svg",
      alt: "bph",
    },
    {
      id: 4,
      url: "/Untitled/image70.svg",
      alt: "spend",
    },
    // {
    //   id: 1,
    //   url: "/Untitled/image1.svg",
    //   alt: "mail-drip",
    // },
  ];

  const slides = [
    {
      url: "/images/cnbe.png",
    },
    {
      url: "/images/tech-start.jpeg",
    },
    {
      url: "/images/cafe-one.png",
    },
    {
      url: "/images/EIC-B.jpeg",
    },
    {
      url: "/images/top-100.jpeg",
    },
    {
      url: "/images/global.jpeg",
    },
    // {
    //   url: "https://www.youtube.com/watch?v=9urKdEcw4AE",
    // },
  ];
  const imagesSlides = [
    {
      url: "/images/s/Frame48095857-1.png",
    },
    {
      url: "/images/s/Frame48095857-2.png",
    },
    {
      url: "/images/s/Frame48095857-3.png",
    },
    {
      url: "/images/s/Frame48095857.png",
    },
  ];
  const videoRef = useRef(null);

  useEffect(() => {
    if (currentIndexSlider < slides.length - 1) {
      setTimeout(() => {
        setCurrentIndexSlider(currentIndexSlider + 1);
      }, 1000);
    }
    if (currentIndexSlider >= slides.length - 1) {
      setTimeout(() => {
        setCurrentIndexSlider(0);
      }, 65000);
    }
  }, [currentIndexSlider, slides.length]);

  const goToSlides = (slideIndex) => {
    setCurrentIndexSlider(slideIndex);
  };

  const options = {
    type: "loop",
    drag: "free",
    focus: "center",
    arrows: false,
    fixedWidth: "15rem",
    fixedHeight: "7rem",
    width: "100%",
    perPage: 4,
    pagination: false,
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
    <section className="w-full h-full">
      <div className="w-full h-full flex flex-col gap-x-20 relative  overflow-hidden lg:flex-row items-center lg:justify-center py-20 pt-10 md:px-[30px] xl:px-20 bg-image">
        <div className="flex flex-col items-start  gap-4 pt-5 px-[20px] max-w-[622px]  z-10">
          {/* <div className="flex flex-col">
            <h1
              className={`absolute hidden lg:block -rotate-90 top-[10%] right-[45%] text-[#5a4f4334] text-[60px] font-bold ${abhaya_libre.className}`}
            >
              Abe
            </h1>

            <Fade
              triggerOnce
              fraction={0.1}
              duration={1000}
              direction="up"
              delay={200}
              className=""
            >
              <h1
                style={{ letterSpacing: "-2.88px" }}
                className={`text-[#C8AC80] text-[60px] md:text-[120px] text-left  leading-[5rem] font-ebold`}
              >
                Aramide
              </h1>
            </Fade>
          </div> */}
          <div
            className={`flex flex-col items-start gap-[5px] pt-3 lg:pl-3 text-[#fff] ${dm_sans.className}`}
          >
            <Fade
              triggerOnce
              fraction={0.1}
              duration={1000}
              direction="up"
              delay={300}
              className=""
            >
              <div className="flex flex-col items-start gap-[5px]">
                <h2 className="text-[18px] font-semibold text-[#C8AC80]">
                  Professional Expertise:
                </h2>
                <p className="text-[15px]">
                  Economic Development Programs | Donors & Philanthropy | Job
                  Creation & Entrepreneurship | Public Adviser
                </p>
              </div>

              <div className="flex flex-col items-start gap-[5px]">
                <h2 className="text-[18px] font-semibold text-[#C8AC80]">
                  Passion:{" "}
                </h2>
                <p className="text-[15px]">
                  Networking Expert | Speaker | Writer
                </p>
              </div>
            </Fade>
          </div>
          <Fade
            triggerOnce
            fraction={0.1}
            duration={1000}
            direction="up"
            delay={400}
            className=""
          >
            <h1
              className={`text-[#C8AC80] text-[26px] md:text-[30px] text-left lg:pl-3 mt-3 font-bold`}
            >
              About Aramide
            </h1>
            <p
              className={`text-[14px] md:text-[15px] text-[#fff] font-normal lg:pl-3 ${dm_sans.className}`}
            >
              Aramide is a business leader dedicated to driving macroeconomic
              growth across Africa through entrepreneurship, job creation, and
              strategic development initiatives. Her work spans economic
              development programs, philanthropy, and public advisory roles that
              create sustainable impact.
            </p>
            <p
              className={`text-[14px] md:text-[15px] text-[#fff] font-normal lg:pl-3 ${dm_sans.className}`}
            >
              Passionate about Africa and committed to the continent&apos;s
              progress, Aramide brings people together across sectors and
              cultures. As a seasoned networking expert, she convenes dynamic
              communities—ranging from business networks to Francophone and
              faith-based groups.
            </p>
            <p
              className={`text-[14px] md:text-[15px] text-[#fff] font-normal lg:pl-3 ${dm_sans.className}`}
            >
              Multilingual and deeply connected, she also shares her insights
              through a weekly article focused on purposeful and effective
              networking.
            </p>
          </Fade>

          <Fade
            triggerOnce
            fraction={0.1}
            duration={1000}
            direction="up"
            delay={500}
            className=""
          >
            <div className="flex items-center justify-start gap-[20px] lg:pl-3 mt-7 md:mt-14">
              <Link href="mailto:aramide@aramide.ng">
                <button
                  style={{ letterSpacing: "-0.64px" }}
                  className=" flex items-center gap-3 justify-center font-semibold bg-[#C8AC80] rounded px-[16px] py-[10px] text-[16px] text-[#fff] w-[250px] h-[50px]"
                >
                  <FaEnvelope size={28} />
                  <p>Contact Aramide</p>
                </button>
              </Link>
            </div>
          </Fade>
        </div>
        <div className="overflow-hidden ">
          <Fade
            triggerOnce
            fraction={0.1}
            duration={1000}
            direction="right"
            delay={200}
            className=""
          >
            <Image
              src={"/images/Hero-Image.png"}
              width={2000}
              height={2000}
              alt="Aramide "
              className="w-[600px] hidden lg:block"
            />
          </Fade>
          <Fade
            triggerOnce
            fraction={0.1}
            duration={1000}
            direction="right"
            delay={200}
            className=""
          >
            <Image
              src={"/images/woman-native.png"}
              width={385}
              height={200}
              alt="Aramide "
              className="mt-10 lg:hidden block"
            />
          </Fade>
        </div>
      </div>

      <div id="about-me" className="flex flex-col gap-5 mt-[30px]  bg-[#fff]">
        <div className="flex flex-col-reverse items-center lg:mb-10 gap-4 lg:gap-40 xl:gap-72 lg:flex-row  w-full">
          <div
            className={` text-[#1A1313] flex flex-col gap-[10px] w-full  ${dm_sans.className}`}
          >
            <div className="flex flex-col items-center gap-[50px] py-[50px] md:pt-[40px] relative">
              <div className="flex flex-col lg:pt-7 gap-[15px] items-center px-5 sm:px-10 lg:px-16">
                <Fade
                  triggerOnce
                  fraction={0.3}
                  duration={1000}
                  direction="up"
                  delay={200}
                  className=""
                >
                  <h1
                    className={`text-[#2D2D2D] font-semibold text-[18px] md:text-[30px] ${dm_sans.className}`}
                  >
                    Speaking engagements
                  </h1>
                </Fade>
                <Fade
                  triggerOnce
                  fraction={0.3}
                  duration={1000}
                  direction="up"
                  delay={400}
                  className="w-full sm:w-[80%]"
                >
                  <p
                    className={`w-full text-[#1A1313] font-normal text-center  text-[15px] lg:text-[16px]  ${dm_sans.className}`}
                  >
                    Renowned for her thought leadership and articulate nature,
                    Aramide is a sought-after keynote speaker, moderator, and
                    panelist on the global stage. She offers insightful and
                    authentic perspectives on a wide range of topics, including
                    technology, development, investment, and sustainability.
                    Passionate about emerging economies, she delivers impactful
                    talks across various platforms, such as:
                  </p>
                </Fade>
              </div>

              <div className="w-full items-center justify-center flex ">
                <Image
                  src={"/m2.png"}
                  width={1000}
                  height={1000}
                  alt="Media image"
                  className="w-full"
                />
              </div>

              {/* <Splide options={options} extensions={{ AutoScroll }}>
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
              </Splide> */}
            </div>

            <div
              className={`w-full flex flex-col items-center gap-10 ${dm_sans.className}`}
            >
              <Fade
                triggerOnce
                fraction={0.1}
                duration={1000}
                direction="up"
                delay={300}
                className=""
              >
                <h2 className="mt-5 px-6 sm:text-[26px] text-[18px] text-center  font-semibold bg-[#F5F5DC4D]/30 text-[#141011] ">
                  Thematic areas Aramide is sought out for include:
                </h2>
              </Fade>
              <div className="w-full md:w-[90%] xl:w-[80%] 2xl:w-[60%] gap-10 flex md:flex-row flex-col md:items-center justify-between px-5">
                <Fade
                  triggerOnce
                  fraction={0.3}
                  duration={1000}
                  direction="up"
                  delay={400}
                  className=""
                >
                  <div
                    className="w-full flex flex-col  items-start  text-[#141011] font-[500] text-[18px]"
                    style={{ lineHeight: "2.3" }}
                  >
                    <p className="flex items-center gap-4">
                      <span className="text-[#c8ac80] text-[24px]">
                        <BsCheck2Square />
                      </span>{" "}
                       Entrepreneurship & Job creation 

                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-[#c8ac80] text-[24px]">
                        <BsCheck2Square />
                      </span>{" "}
                      Investment
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-[#c8ac80] text-[24px]">
                        <BsCheck2Square />
                      </span>{" "}
                      Leadership
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-[#c8ac80] text-[24px]">
                        <BsCheck2Square />
                      </span>{" "}
                      Networking
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-[#c8ac80] text-[24px]">
                        <BsCheck2Square />
                      </span>{" "}
                      Technology & Innovation
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-[#c8ac80] text-[24px]">
                        <BsCheck2Square />
                      </span>{" "}
                      Women & Youth Development
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-[#c8ac80] text-[24px]">
                        <BsCheck2Square />
                      </span>{" "}
                      Sustainability
                    </p>
                  </div>
                </Fade>

                <Image
                  src={"/ar1.png"}
                  width={1000}
                  height={1000}
                  alt="Aramide image"
                  className="w-[400px] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#E5DBFF] items-center gap-[50px] py-[50px] px-[15px] lg:px-[4rem] md:pt-[40px] relative">
        <div className="w-full">
          <h1
            className={`text-[#000] text-center font-semibold text-[24px] md:text-[30px] ${dm_sans.className}`}
          >
            Media & Publicity Presence
          </h1>
        </div>

        <div className="w-full items-center justify-center flex ">
          <Image
            src={"/m1.png"}
            width={1000}
            height={1000}
            alt="Media image"
            className="w-[1000px]"
          />
        </div>

        <div className="w-full hidden">
          <Splide options={options} extensions={{ AutoScroll }}>
            {itemImages2.map((item, index) => {
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
      </div>

      <LetTalk />
    </section>
  );
};

export default LandingPage;
