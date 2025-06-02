import { jost } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-image flex flex-col md:justify-between md:items-center pt-2 px-5 sm:px-10">
      <div className="w-full flex flex-col md:flex-row md:justify-between gap-8  md:px-[30px] md:pt-[35px] pb-[50px] p-[20px]">
        <div className="flex flex-col gap-5">
        <Link href={"/landing"} 

            className="w-[8em]"
            >
              <Image
                src={"/logo.png"}
                alt="Aramide Abe"
                width={500}
                height={500}
                className="w-full "/>
            </Link>
          <div className="flex items-center gap-[26px] text-[#f5f5f5] text-[24px]">
            <Link href={"https://x.com/arams?s=11"}>
            <FaSquareXTwitter  />
            </Link>
            <Link
              href={
                "https://www.instagram.com/aramideabe?igsh=M3dtM2xsam4xOWZy"
              }
            >
             <FaSquareInstagram />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/aramide?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              }
            >
             <FaLinkedin />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-[40px] lg:min-w-[500px]">
          <div className="text-[#fff] ">
            <ul className="flex sm:flex-row flex-col gap-[10px]">
              <li>
                <Link
                  href={"/landing"}
                  className="text-[14px] md:text-[17px] font-normal"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="text-[14px] md:text-[17px] font-normal"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/speaking-engagement"}
                  className="text-[14px] md:text-[17px] font-normal"
                >
                  Speaking Engagements
                </Link>
              </li>
              <li>
                <Link
                  href={"/media"}
                  className="text-[14px] md:text-[17px] font-normal"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href={"/gallery"}
                  className="text-[14px] md:text-[17px] font-normal"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="border-t border-t-[#fff] flex justify-center w-full px-[20px] py-[10px]">
        <h1
            className={`text-[16px] text-[#FFF] mb-5 mt-10  font-light ${jost.className}`}
          >
            &copy;2025 Aramide. All rights reserved
          </h1>
      </div>
    </footer>
  );
};

export default Footer;
