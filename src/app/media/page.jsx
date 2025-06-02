"use client";
import { dm_sans, inter } from "@/font";
import LetTalk from "@/layout/LetTalk";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { Fade } from "react-awesome-reveal";

const AboutPage = () => {
  const videoRef = useRef(null);

  return (
    <section className={`w-full h-full ${inter.className}`}>
      <div className="bg-image flex flex-col lg:flex-row gap-10 items-center justify-between px-6 sm:px-14 lg:px-20 xl:px-32 py-[20px]">
        <div className=" w-full lg:w-[50%] flex flex-col gap-5 md:gap-[40px] items-center lg:items-start">
          <Fade
            triggerOnce
            fraction={0.3}
            duration={1000}
            direction="up"
            delay={200}
            className=""
          >
            <h2 className="text-[40px] lg:text-[50px] lg:text-left text-center font-[600] text-[#fff]">
              Business Sense with Aramide{" "}
            </h2>
          </Fade>
          <Fade
            triggerOnce
            fraction={0.3}
            duration={1000}
            direction="up"
            delay={400}
            className=""
          >
            <p
              className={`text-[16px] lg:text-left text-center text-[#fff] md:text-[18px] font-light`}
            >
              At Business Sense, we delve into the dynamic world of business
              through insightful and engaging interviews with entrepreneurs who
              are shaping the future. Our show goes beyond the surface,
              providing an in-depth look into the journeys, challenges, and
              triumphs of successful business leaders.
            </p>
          </Fade>
          <Fade
            triggerOnce
            fraction={0.3}
            duration={1000}
            direction="up"
            delay={600}
            className=""
          >
            <div className="flex items-center gap-[24px] flex-col sm:flex-row">
              <Link href="https://www.youtube.com/@businesssensewitharamide4065">
                <button className="w-[180px] text-[15px] font-normal h-[50px] text-white bg-[#C8AC80] rounded-[5px]">
                  Watch on youtube
                </button>
              </Link>
            </div>
          </Fade>
        </div>
        <Image
          src={"/images/5.png"}
          width={400}
          height={500}
          alt="about-me"
          className="sm:w-[350px] lg:w-[400px] rounded-lg sm:h-[450px] lg:h-[500px] w-[80%] h-[100%] scale-x-[-1]"
        />
      </div>

      <div className=" overflow-hidden flex lg:flex-row flex-col items-center justify-between gap-10 bg-cover bg-center bg-no-repeat bg-[url('/b2.png')] py-[49px] px-5 sm:px-10 lg:px-20 xl:px-32 2xl:px-40">
        <Image
          src="/ar2.png"
          alt="aramide"
          width={1000}
          height={1000}
          className="w-[400px] lg:w-[35%]"
        />
        <Fade
          triggerOnce
          fraction={0.3}
          duration={1000}
          direction="up"
          delay={200}
          className=""
        >
          <div className="flex flex-col items-start  gap-10 border rounded-lg p-4 sm:p-8 ">
            <h1
              className={`text-[#fff] text-[24px] lg:text-[35px] font-semibold ${dm_sans.className}`}
            >
              Writing
            </h1>

            <div className="flex flex-col gap-6 w-full lg:w-[500px]">
              <div className="flex items-center gap-4">
                <Image
                  src="/w1.png"
                  alt="aramide"
                  width={1000}
                  height={1000}
                  className="size-[100px] object-cover rounded"
                />
                <div className="flex flex-col gap-2">
                  <h1
                    className={`text-[#fff] font-semibold pb-1 text-[16px] md:text-[18px] ${dm_sans.className}`}
                  >
                    Networking content for BusinessDay
                  </h1>
                  <Link href="https://businessday.ng/bd-weekender/article/the-connection-code/">
                    <p
                      className={`text-[#fff] text-[14px] underline ${dm_sans.className}`}
                    >
                      Read more
                    </p>
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src="/w2.png"
                  alt="aramide"
                  width={1000}
                  height={1000}
                  className="w-[100px] rounded"
                />
                <div className="flex flex-col gap-2">
                  <h1
                    className={`text-[#fff] font-semibold pb-1 text-[16px] md:text-[18px] ${dm_sans.className}`}
                  >
                    Networking content for This Day style
                  </h1>

                  <Link href="#">
                    <p
                      className={`text-[#fff] text-[14px] underline ${dm_sans.className}`}
                    >
                      Read more
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/w3.png"
                  alt="aramide"
                  width={1000}
                  height={1000}
                  className="w-[100px] rounded"
                />
                <div className="flex flex-col gap-2">
                  <h1
                    className={`text-[#fff] font-semibold pb-1 text-[16px] md:text-[18px] ${dm_sans.className}`}
                  >
                    Networking Newsletter on Linkedin
                  </h1>

                  <Link href="https://www.linkedin.com/newsletters/beyond-the-handshake-7296480881207050240/">
                    <p
                      className={`text-[#fff] text-[14px] underline ${dm_sans.className}`}
                    >
                      Read more
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="w-full overflow-hidden flex lg:flex-row flex-col items-center justify-between gap-5 bg-[#fff] py-[49px] px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40">
        <Fade
          triggerOnce
          fraction={0.3}
          duration={1000}
          direction="up"
          delay={200}
          className=""
        >
          <div className="flex flex-col gap-5 border border-[#83838348] rounded p-4 sm:p-8">
            <h1
              className={`text-[#000]  text-[24px] lg:text-[35px] font-semibold ${dm_sans.className}`}
            >
              Features
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-20 ">
              <div className="flex flex-col gap-6 w-full lg:w-[500px]">
                <Link
                  href="https://leadingladiesafrica.org/i-believe-women-should-rise-up-and-own-themselves-lla-meets-aramide-abe-founder-naijastartups/"
                  className="flex items-center gap-4"
                >
                  <Image
                    src="/w1.png"
                    alt="aramide"
                    width={1000}
                    height={1000}
                    className="w-[100px] rounded"
                  />
                  <div className="flex flex-col gap-2">
                    <h1
                      className={`text-[#000] font-semibold text-[16px] md:text-[18px] ${dm_sans.className}`}
                    >
                      Leading Ladies Africa Interview
                    </h1>
                    <p
                      className={`text-[15px] sm:text-[16px] text-[#000] font-light leading-[2] ${dm_sans.className}`}
                    >
                      Aramide LLA Interview spotlight as the Leading Lady of the
                      week.
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://www.bellanaija.com/2018/04/bellanaijawcw-aramide-abe-naija-startups-helping-entrepreneurs-africa-succeed/"
                  className="flex items-center gap-4"
                >
                  <Image
                    src="/w4.png"
                    alt="aramide"
                    width={1000}
                    height={1000}
                    className="size-[100px] object-cover rounded"
                  />
                  <div className="flex flex-col gap-2">
                    <h1
                      className={`text-[#C8AC80] font-semibold text-[16px] md:text-[18px] ${dm_sans.className}`}
                    >
                      Bella Naija Feature
                    </h1>
                    <p
                      className={`text-[15px] sm:text-[16px] text-[#000] font-light leading-[2] ${dm_sans.className}`}
                    >
                      How Aramide is helping Businesss scale
                    </p>
                  </div>
                </Link>

                <Link
                  href="https://blog.mipad.org/aramide-abe/"
                  className="flex items-center gap-4"
                >
                  <Image
                    src="/w5.png"
                    alt="aramide"
                    width={1000}
                    height={1000}
                    className="size-[100px] object-cover rounded"
                  />
                  <div className="flex flex-col gap-2">
                    <h1
                      className={`text-[#C8AC80] font-semibold text-[16px] md:text-[18px] ${dm_sans.className}`}
                    >
                      Spotlight by Most Influential People of African Descent
                      (MIPAD)
                    </h1>
                    <p
                      className={`text-[15px] sm:text-[16px] text-[#000] font-light leading-[2] ${dm_sans.className}`}
                    >
                      Business & Enterprenuership inside Africa{" "}
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://www.visualcollaborative.com/aramide_abe/"
                  className="flex items-center gap-4"
                >
                  <Image
                    src="/w6.png"
                    alt="aramide"
                    width={1000}
                    height={1000}
                    className="size-[100px] object-cover rounded"
                  />
                  <div className="flex flex-col gap-2">
                    <h1
                      className={`text-[#C8AC80] font-semibold text-[16px] md:text-[18px] ${dm_sans.className}`}
                    >
                      Interview with Visual Collaborative
                    </h1>
                    <p
                      className={`text-[15px] sm:text-[16px] text-[#000] font-light leading-[2] ${dm_sans.className}`}
                    >
                      Aramide feature in our Voyager interview series, we
                      discuss her company and probable future as a
                      businesswoman.
                    </p>
                    <p
                      className={`text-[#fff] text-[14px] underline ${dm_sans.className}`}
                    >
                      Read more
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Fade>

        <Fade
          triggerOnce
          fraction={0.3}
          duration={1000}
          direction="up"
          delay={200}
          className="lg:w-[40%]"
        >
          <Image
            src="/ar.jpg"
            width={584}
            height={688}
            alt="Aramide Abe"
            className="w-full  rounded-lg"
          />
        </Fade>
      </div>

      <LetTalk />
    </section>
  );
};

export default AboutPage;
