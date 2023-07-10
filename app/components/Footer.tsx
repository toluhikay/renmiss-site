import React from "react";
import FooterUp from "./FooterUp";
import FooterMain from "./FooterMain";

const Footer = () => {
  return (
    <div className="bg-[#0C240B] p-[11px]">
      <div className="py-16 border-b lg:px-24 md:px-[30px] px-[15px] border-[#2C3D2B]">
        <FooterUp />
      </div>
      <div className="pt-[124px] pb-[57px] border-b border-[#2C3D2B]">
        <FooterMain />
      </div>
      <div className="py-5"></div>
    </div>
  );
};

export default Footer;
