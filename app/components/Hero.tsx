"use client";

import React from "react";
import { FaApple } from "react-icons/fa";
import GooglePlay from "@/public/GooglePlay";
import UsersImage from "../../public/Users.png";
import HeroImage from "../../public/Hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-wrap md:justify-between justify-center md:min-h-screen h-auto items-start md:py-[auto] lg:pt-40 pt-32 lg:px-[89px] md:px-[30px] px-[15px] w-full bg-gradient-to-tr from-yellow-200/40 via-gray-200 to-green-300/70">
      <div className="lg:w-[48%] md:w-[50%] w-full md:mb-0 mb-20">
        <div className="flex w-full md:items-start sm:items-center flex-col">
          <h1 className="xl:text-6xl lg:text-5xl  text-4xl md:text-start text-center bg-clip-text pr-[2px] text-transparent bg-gradient-to-r from-[#1A4E18] to-[#013356] font-bold  xl:w-[75%] lg:w-auto sm:w-4/5">Creating financial product solutions for Africa </h1>
          <p className="pb-[30px] md:text-start text-center">Download our app to keep you updated</p>
        </div>
        <div className="flex md:items-start items-center md:justify-start justify-center mb-20">
          <div className="bg-[#1A4E18] sm:mr-6 mr-2 flex items-center w-fit sm:py-3 py-1 sm:px-5 px-2 rounded-[10px] text-white">
            <div>
              <GooglePlay />
            </div>
            <div className="sm:ml-[13px] ml-1">
              <p className="sm:text-[15px] text-xs">Get it on</p>
              <p className="xl:text-[35px] md:text-[16px] sm:text-[18px] text-[12px]">Google Play</p>
            </div>
          </div>
          <div className="bg-[#1A4E18] flex items-center w-fit sm:py-3 py-1 sm:px-5 px-2 rounded-[10px] text-white">
            <div>
              <FaApple className="text-2xl" />
            </div>
            <div className="sm:ml-[13px] ml-1">
              <p className="sm:text-[15px] text-xs">Get it on</p>
              <p className="xl:text-[35px] md:text-[16px] sm:text-[18px] text-[12px]">Google Play</p>
            </div>
          </div>
        </div>
        <div className="flex md:justify-start justify-center w-auto items-center">
          <div className="bg-[#000] sm:py-5 mr-2 p-2 sm:text-base text-xs sm:px-6 w-fit text-white">
            <p>100k+ userss</p>
          </div>
          <div>
            <Image src={UsersImage} alt="users image" className="" />
          </div>
        </div>
      </div>
      <div className="xl:pr-[200px] md:w-[50%] md:flex justify-center items-center">
        <Image src={HeroImage} alt="hero-img" className="w-auto lg:w-[70%] md:w-[70%]" />
      </div>
    </div>
  );
};

export default Hero;
