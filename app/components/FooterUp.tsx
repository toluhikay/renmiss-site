import GooglePlay from "@/public/GooglePlay";
import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";

const FooterUp = () => {
  return (
    <div className="w-full flex justify-between items-center flex-wrap bg-white xl:px-24 md:px-6 py-14 rounded-[20px]">
      <div className="lg:w-[49%] w-full flex items-center justify-center lg:mb-0 mb-12">
        <Image src={"/images/FooterBg.png"} className="lg:w-[80%] w-1/2 h-auto" alt="icon of a girl using renmiss app" width={100} height={100} />
      </div>
      <div className="lg:w-[49%] w-full flex items-center flex-col">
        <p className="text-2xl text-center leading-10 xl:w-[50%] w-[90%] mb-10">To get started download the Renmiss mobile app on playstore and appstore</p>
        <div className="flex md:items-start items-center md:justify-start justify-center mb-20">
          <div className="bg-[#1A4E18] sm:mr-6 mr-2 flex items-center w-fit sm:py-3 py-2 sm:px-5 px-3 rounded-[10px] text-white">
            <div>
              <GooglePlay />
            </div>
            <div className="sm:ml-[13px] ml-1">
              <p className="sm:text-[15px] text-xs">Get it on</p>
              <p className="xl:text-[35px] md:text-[16px] sm:text-[18px] text-[12px]">Google Play</p>
            </div>
          </div>
          <div className="bg-[#1A4E18] flex items-center w-fit sm:py-3 py-2 sm:px-5 px-3 rounded-[10px] text-white">
            <div>
              <FaApple className="text-2xl" />
            </div>
            <div className="sm:ml-[13px] ml-1">
              <p className="sm:text-[15px] text-xs">Get it on</p>
              <p className="xl:text-[35px] md:text-[16px] sm:text-[18px] text-[12px]">Google Play</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterUp;
