import { dm_sans, inter } from "@/font";
import LetTalk from "@/layout/LetTalk";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaCircleCheck } from "react-icons/fa6";

const page = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-image overflow-hidden">
      <div className="w-full flex lg:flex-row flex-col items-center py-20 px-5 sm:px-[30px] md:px-[80px] bg-image">
        <div className="flex flex-col gap-5 items-start w-full">
          <Fade
            triggerOnce
            fraction={0.3}
            duration={1000}
            direction="up"
            delay={200}
            className=""
          >
            <h2
              style={{
                letterSpacing: "-0.72px",
              }}
              className={`text-[40px] md:text-[50px] text-[#C8AC80] font-semibold text-center   ${inter.className}`}
            >
              About
            </h2>
          </Fade>

          <div className="flex flex-col gap-2 font-[500]">
            <Fade
              triggerOnce
              fraction={0.3}
              duration={1000}
              direction="up"
              delay={100}
              className=""
            >
              <p
                className={`text-[15px] md:text-[16px] text-[#fff] ${inter.className}`}
                style={{ lineHeight: "1.5" }}
              >
                Aramide studied Computer Science at the University of Nottingham
                and possesses a 20-year background in technology,
                entrepreneurship and strategy – three functional areas she is
                deeply passionate about. She also has a full time Masters in
                Business Administration (MBA) from the prestigious INSEAD in
                France, where she specialised in entrepreneurial strategies for
                emerging markets.
              </p>
            </Fade>

            <Fade
              triggerOnce
              fraction={0.3}
              duration={1000}
              direction="up"
              delay={200}
              className=""
            >
              <p
                className="text-[15px] text-[#fff] md:text-[16px]"
                style={{ lineHeight: "1.5" }}
              >
                Post-MBA, she notably led the strategy implementation of a
                multi-million dollar program for a pan-African financial
                services organisation (ETI-Ecobank Group), across its 36
                countries in Africa.
              </p>
            </Fade>

            <Fade
              triggerOnce
              fraction={0.3}
              duration={1000}
              direction="up"
              delay={300}
              className=""
            >
              <p
                className="text-[15px] text-[#fff] md:text-[16px]"
                style={{ lineHeight: "1.5" }}
              >
                As co-founder of Naija Startups, an African business network
                with 95,000-member startups and business leaders in Africa and
                the Diaspora, she focused on promoting investment readiness,
                access to opportunities, and capacity-building for Africans. Her
                leadership fostered collaborations with major organisations such
                as Google, Microsoft and the World Bank, providing accessible
                development to thousands of African entrepreneurs.
              </p>
            </Fade>
          </div>
        </div>
        <Fade
          triggerOnce
          fraction={0.3}
          duration={1000}
          direction="right"
          delay={400}
          className=" w-[400px]"
        >
          <Image
            src={"/images/woman-native.png"}
            alt="Aramide Abe"
            width={1000}
            height={1000}
            className="w-full rounded"
          />
        </Fade>
      </div>
      <div className="flex flex-col bg-white items-center py-8 md:py-20 gap-8 px-5 sm:px-[30px] md:px-[80px]">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-10">
          <div className="flex flex-col gap-5 overflow-hidden">
            <Fade
              triggerOnce
              fraction={0.3}
              duration={1000}
              direction="up"
              delay={200}
              className=""
            >
              <p
                className={` text-[16px] text-[#1A1313] leading-[1.8] ${inter.className}`}
                style={{ lineHeight: "2.3" }}
              >
                As a key influencer in the African SME ecosystem, Aramide is
                actively involved in the United Nations committee on private
                sector development for Africa and consults on policy development
                for the African Continental Free Trade Area (AfCFTA) country
                business index with United Nations Economic Commission for
                Africa (UNECA). Additionally, she serves as an Independent
                Non-Executive Director of SKLD Limited, a West African
                manufacturing company, and on the advisory board of
                StartUpAfrica, a non-profit in Delaware focused on
                capacity-building for African youth and entrepreneurs. <br />
                Aramide was named one of the most influential Africans under 40
                by MiPAD in 2020 and was awarded the Wonder Woman in Technology
                Award by Investing in Women UK.
              </p>
            </Fade>
          </div>
 
            <Image
              src={"/aa2.svg"}
              alt="Aramide Abe"
              width={1000}
              height={1000}
              className="w-[500px] rounded "
            />
        </div>

        <div className="w-full flex flex-col gap-10 justify-start">
        <Fade
              triggerOnce
              fraction={0.3}
              duration={1000}
              direction="up"
              delay={200}
              className="lg:w-[60%]"
            >
          <h3
            className={`w-full  text-[20px] font-[600] text-[#000] leading-[1.8] ${dm_sans.className}`}
            style={{ lineHeight: "2.3" }}
          >
            Outside of work, she is a renowned speaker and has been privileged
            to speak on several global platforms:
          </h3>
        </Fade>
          <div className="flex flex-col gap-5">
          <Fade
              triggerOnce
              fraction={0.3}
              duration={1000}
              direction="up"
              delay={200}
              className="flex flex-col gap-5"
            >
            <p className="flex  gap-4">
              <span className="text-[#c8ac80] text-[24px]">
                <FaCircleCheck />
              </span>{" "}
              The African Union
            </p>
            <p className="flex  gap-4">
              <span className="text-[#c8ac80] text-[24px]">
                <FaCircleCheck />
              </span>{" "}
              The European Union
            </p>
            <p className="flex  gap-4">
              <span className="text-[#c8ac80] text-[24px]">
                <FaCircleCheck />
              </span>{" "}
              The African Development Bank
            </p>
            <p className="flex  gap-4">
              <span className="text-[#c8ac80] text-[24px]">
                <FaCircleCheck />
              </span>{" "}
              UNCTAD
            </p>
            <p className="flex  gap-4">
              <span className="text-[#c8ac80] text-[24px]">
                <FaCircleCheck />
              </span>{" "}
              UNDP
            </p>
            <p className="flex  gap-4">
              <span className="text-[#c8ac80] text-[24px]">
                <FaCircleCheck />
              </span>{" "}
              UN Climate Change Conference
            </p>
            <p className="flex  gap-4">
              <span className="text-[#c8ac80] text-[24px]">
                <FaCircleCheck />
              </span>{" "}
              UN FAO World Food Forum
            </p>
            <p className="flex  gap-4">
              <span className="text-[#c8ac80] text-[24px]">
                <FaCircleCheck />
              </span>{" "}
              Bank of Italy G7
            </p>
            <p className="flex  gap-4">
              <span className="text-[#c8ac80] text-[24px]">
                <FaCircleCheck />
              </span>{" "}
              African Leadership Network
            </p>
            <p className="flex  gap-4">
              <span className="text-[#c8ac80] text-[24px]">
                <FaCircleCheck />
              </span>{" "}
              GSMA Mobile World Congress
            </p>
            <p className="flex  gap-4">
              <span className="text-[#c8ac80] text-[24px]">
                <FaCircleCheck />
              </span>{" "}
              Stanford Africa Business Conference
            </p>
            <p className="flex  gap-4">
              <span className="text-[#c8ac80] text-[24px]">
                <FaCircleCheck />
              </span>{" "}
              INSEAD Africa Business Conference
            </p>
            <p className="flex  gap-4">
              <span className="text-[#c8ac80] text-[24px]">
                <FaCircleCheck />
              </span>{" "}
              Acumen
            </p>
            <p className="flex  gap-4">
              <span className="text-[#c8ac80] text-[24px]">
                <FaCircleCheck />
              </span>{" "}
              University of Nottingham
            </p>
            </Fade>
          </div>
        </div>
      </div>
      <LetTalk />
    </div>
  );
};

export default page;
