"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


const LayoutWrapper = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" ? (
        <>{children}</>
      ) : (
        <section className="w-full h-full bg-[#fff]">
          <Navbar />
          <>{children}</>
          <Footer />
        </section>
      )}
    </>
  );
};

export default LayoutWrapper;
