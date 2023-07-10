import React from "react";
import MessageForm from "./MessageForm";

const AboutHero = () => {
  return (
    <div className="flex flex-wrap  justify-center md:min-h-[80vh] h-auto items-center md:py-[auto] lg:pt-40 pt-32 lg:px-[89px] md:px-[30px] px-[15px] w-full bg-gradient-to-tr flex-col from-yellow-200/40 via-gray-200 to-green-300/70">
      <div className="flex items-center sm:text-5xl text-[#1A4E18] text-2xl font-bold mb-[67px]">
        <h1 className="mr-2">About</h1> <div className=" sm:bg-about-green bg-about-green-mobile bg-cover sm:p-[49px] flex items-center justify-center p-4 w-auto sm:min-w-[410px]">Renmiss Tech</div>
      </div>
      <p className="md:text-2xl text-base text-center lg:px-12 tracking-wider leading-loose pb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed d Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
        mattis tellus. Sed d Etiam eu turpis molestie, dictum est a, mattis tellus.{" "}
      </p>
    </div>
  );
};

export default AboutHero;
