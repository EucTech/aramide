import React, { useRef } from "react";
import Link from "next/link";
import { dm_sans } from "@/font";
import { useRouter } from "next/navigation";

const FeaturedInterviews = () => {
  const videoRef = useRef(null);

  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col items-center px-[15px] lg:px-[1rem] xl:px-[6rem] mt-8 ">
        <h1
          className={`text-[#2D2D2D] text-[24px] lg:text-[35px] font-semibold mb-[52px] ${dm_sans.className}`}
        >
          Featured Talks
        </h1>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2  justify-items-center lg:grid-cols-3 w-full gap-y-10 sm:gap-x-[30px]">
          <div className="flex flex-col items-center gap-[27px]">
            <video
              preload="none"
              controls
              muted
              autoPlay
              height="190px"
              width="300px"
              className=" object-cover w-[300px] sm:w-[340px] h-[190px]"
            >
              <source src="/videos/aramide.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="flex flex-col items-center gap-[10px]">
              <h4 className="text-[#2D2D2D] w-[80%]  sm:w-[60%] text-center md:w-[90%] text-[16px] font-normal">
                Moderating for the Federal Government of Nigeria at the Dubai
                Expo 2020.
              </h4>
              <Link
                href={"#"}
                className="text-[#2D2D2D] font-normal text-[14px] underline"
              ></Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[27px]">
            <div>
              <iframe
                // src="https://youtu.be/embed/51asPTBRVx0/si=nXrB5kC24MUzGofg?autoplay=1&mute=1"
                src="https://www.youtube.com/embed/51asPTBRVx0?autoplay=1&mute=1"
                title="YouTube video player"
                width={332}
                height={313}
                allow="accelerometer; 
                autoPlay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture; 
                web-share"
                // allowFullScreen
                ref={videoRef}
                // onEnded={handleVideoEnded}
                className="w-[300px] sm:w-[340px] h-[190px]"
              ></iframe>
            </div>
            <div className="flex flex-col items-center gap-[10px]">
              <h4 className="text-[#2D2D2D] text-[16px] text-center w-[80%] sm:w-[60%] md:w-[90%] font-normal">
                Partnership with Leading Financial Institution, FCMB on their
                Top 5 in 5 series
              </h4>
              <Link
                href={"#"}
                className="text-[#2D2D2D] font-normal text-[14px] underline"
              ></Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[27px]">
            <iframe
              width={332}
              height={313}
              className="w-[300px] sm:w-[340px] h-[190px]"
              src="https://www.youtube.com/embed/VZtGKme1JNM"
              title="Aramide Abe Discusses Her Work in Facilitating Small Business Growth In Sub-Saharan Africa"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div className="flex flex-col items-center gap-[10px]">
              <h4 className="text-[#2D2D2D] text-[16px] text-center w-[80%] md:w-[90%] font-normal">
                Discussing Naija Startups on Arise Television
              </h4>
              <Link
                href={"#"}
                className="text-[#2D2D2D] font-normal text-[14px] underline"
              ></Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[27px]">
            <iframe
              width={332}
              height={313}
              className="w-[300px] sm:w-[340px] h-[190px]"
              src="https://www.youtube.com/embed/XvmbvshY6SA"
              title="Impact of Corona Virus on Businesses - Aramide Abe"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              ref={videoRef}
            ></iframe>
            <div className="flex flex-col items-center gap-[10px]">
              <h4 className="text-[#2D2D2D] text-[16px] text-center w-[80%] md:w-[100%] font-normal">
                Discussing the impact of the COVID-19 Pandemic on businesses and
                entrepreneurship
              </h4>
              <Link
                href={"#"}
                className="text-[#2D2D2D] font-normal text-[14px] underline"
              ></Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[27px]">
            <iframe
              width={332}
              height={313}
              className="w-[300px] sm:w-[340px] h-[190px]"
              src="https://www.youtube.com/embed/fpvfJxGdnGY"
              title="SMEs Are The Real Engines Of Nigeria’s Economic Growth - Aramide Abe | Charles Odii"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              ref={videoRef}
            ></iframe>
            <div className="flex flex-col items-center gap-[10px]">
              <h4 className="text-[#2D2D2D] text-[16px] text-center w-[80%] md:w-[90%] font-normal">
                Speaking with the Director General of the SME Development Agency
                on Economic Growth
              </h4>
              <Link
                href={"#"}
                className="text-[#2D2D2D] font-normal text-[14px] underline"
              ></Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[27px]">
            <iframe
              width="332"
              height="312"
              className="w-[300px] sm:w-[340px] h-[190px]"
              src="https://www.youtube.com/embed/GjCBpnzxAGU"
              title="Stanford Africa Business Forum 2021: Entrepreneurship Panel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              //   allowfullscreen
            ></iframe>
            <div className="flex flex-col items-center gap-[10px]">
              <h4 className="text-[#2D2D2D] text-[16px] text-center w-[80%] md:w-[86%] font-normal">
                Panel moderation at the Stanford Africa Business Forum 2021
              </h4>
              <Link
                href={"#"}
                className="text-[#2D2D2D] font-normal text-[14px] underline"
              ></Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[27px]">
            <a
              href="https://tinyurl.com/37a9dc57"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video
                className="h-[12em] w-[332px] object-cover"
                poster="/poster.jpg"
              >
                <source src="https://tinyurl.com/37a9dc57" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>
            <div className="flex flex-col items-center gap-[10px]">
              <h4 className="text-[#2D2D2D] text-[16px] text-center w-[80%] md:w-[86%] font-normal">
                Launch to Seed - Fundraising Pathways With First Check Africa
              </h4>
              <Link
                href={"#"}
                className="text-[#2D2D2D] font-normal text-[14px] underline"
              ></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInterviews;
