import { abhaya_libre, italianno, sora } from "@/font";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full h-screen justify-center items-center flex-col lg:flex-row flex gap-[30px] lg:gap-[58px] p-4 bg-[#e6f2ff29]">
      <Image
        src={"/logo.png"}
        alt="Aramide Abe"
        width={500}
        height={500}
        className="w-[8em] lg:hidden block mr-auto ml-14"
      />
      <Image
        src={"/images/big-woman.jpeg"}
        width={743}
        height={800}
        alt="AramideAbe"
        className="flex mx-auto lg:mx-0 w-[80%] lg:w-[50%] object-cover rounded-md sm:h-full"
      />
      <div className="w-full flex flex-col gap-[10px] pb-5 px-[36px] bg-[#e6f2ff29]">
        {/* <h1
          className={`text-[40px] text-[#C8AC80] md:text-[50px] font-semibold ${abhaya_libre.className}`}
        >
          Aramide <span>Abe</span>
        </h1> */}
        <Image
        src={"/logo.png"}
        alt="Aramide Abe"
        width={500}
        height={500}
        className="w-[8em] hidden lg:block"
      />
        <blockquote className="flex flex-col  gap-[18px]">
          <h2
            className={`text-[17px] md:text-[24px] font-normal leading-[2] ${sora.className}`}
          >
            No one is you , that is your power
          </h2>
          <p
            className={`text-[14px] md:text-[18px] font-normal leading-[2] ${sora.className}`}
          >
            -- Dave Grohl
          </p>
        </blockquote>
        <Link
          href={"/landing"}
          className="uppercase text-[#fff] leading-[2] font-normal bg-[#C8AC80] py-[10px] sm:py-[16px] w-[140px] sm:w-[180px] text-center"
        >
          Enter
        </Link>
      </div>
    </section>
  );
}
