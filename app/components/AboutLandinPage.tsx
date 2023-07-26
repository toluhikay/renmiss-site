import React from "react";

const AboutLandinPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center sm:text-4xl text-xl px-[15px] font-bold mb-[67px]">
        <h1 className="mr-2">Renmiss</h1> <div className=" sm:bg-about-white bg-about-white-mobile bg-cover sm:p-[49px] flex items-center justify-center p-4 sm:min-w-[480px] min-w-[250px] sm:min-h-[170px] min-h-[90px]">Mobile Application</div>
      </div>
      <p className="text-center tracking-wider text-2xl sm:w-[90%] text-[#AABBC7]">Renmiss Mobile app is a multifunctional all in one information sharing and on-demand mobile application integrated with a payment system, learning management system and ecommerce, designed for interaction, cultural cross-pollination, grass root human capital development and socio-economic and political growth.</p>
    </div>
  );
};

export default AboutLandinPage;
