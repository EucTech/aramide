import { italianno, roboto_mono } from "@/font";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const linksItem = [
    {
      id: 1,
      name: "About",
      route: "/about",
    },
    {
      id: 2,
      name: "Speaking-engagements",
      route: "/speaking-engagement",
    },
    {
      id: 3,
      name: "Media",
      route: "/media",
    },
    {
      id: 4,
      name: "Gallery",
      route: "/gallery",
    },
  ];
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(true);
    console.log("oppen");
  };
  const handleToggleClose = () => {
    setToggleMenu(false);
    console.log("close");
  };

  return (
    <nav className="w-full  px-[20px] lg:px-[80px] bg-[#101010]/80 relative z-30">
      <div
        onClick={() => handleToggleClose()}
        className="py-[14px] md:py-[18px] flex justify-between items-center"
      >
        <div className="flex items-center w-full lg:w-[50%] relative z-50">
          <div className="flex items-center justify-between w-full lg:w-fit">
            <Link href={"/landing"} 
            className="w-[8em]"
            >
              <Image
                src={"/logo.png"}
                alt="Aramide Abe"
                width={500}
                height={500}
                className="w-full"/>
            </Link>

            <Image
              src="/menu.svg"
              width={35}
              height={35}
              alt="menu"
              role="button"
              className="flex lg:hidden filter invert"
              onClick={(e) => {
                e.stopPropagation();
                handleToggle();
              }}
            />
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`items-center gap-[42px] fixed bg-[#2E2A23] w-[80%] sm:w-[60%] h-full right-0 top-0 z-50 flex justify-center flex-col ${
              toggleMenu ? "translate-x-[0%]" : "translate-x-[100%]"
            } transition-all duration-300 lg:relative lg:left-[-230px] lg:bg-transparent lg:flex-row lg:w-[90%]`}
          >
            <Image
              src="/close.svg"
              width={35}
              height={35}
              alt="close"
              role="button"
              className="absolute right-0 top-0 m-8 flex lg:hidden filter invert"
              onClick={() => handleToggleClose()}
            />
            <ul className="flex flex-col text-[17px] text-[#fff] lg:flex-row items-start lg:items-center gap-[20px] sm:whitespace-nowrap">
              {linksItem.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      onClick={() => handleToggleClose()}
                      className={`text-[16px] font-normal ${
                        pathname.includes(item.route) ? "text-[#C8AC80]" : ""
                      }`}
                      href={item.route}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            
            <Link className="" href="mailto:aramide@aramide.ng">
              <button
                style={{ letterSpacing: "-0.64px" }}
                className="lg:hidden  block font-semibold  bg-[#C8AC80] rounded-md px-[24px] py-[10px] text-[13px] md:text-[15px] text-[#fff]"
              >
                Contact Aramide
              </button>
            </Link>
          </div>
        </div>
        
        
        <Link href="mailto:aramide@aramide.ng">
          <button
            style={{ letterSpacing: "-0.64px" }}
            className="hidden  lg:block font-semibold bg-[#C8AC80]  rounded-md px-[24px] py-[10px] text-[13px] md:text-[15px] text-[#fff]"
          >
            Contact Aramide
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
