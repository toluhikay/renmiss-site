import React from "react";
import FooterUp from "./FooterUp";
import FooterMain from "./FooterMain";
import FacebookIcon from "../../public/images/FacebookIcon.png";
import InstagramIcon from "../../public/images/InstagramIcon.png";
import TwitterIcon from "../../public/images/TwitterIcon.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialsDetails = [
    { id: 1, link: "", icon: FacebookIcon },
    { id: 1, link: "", icon: TwitterIcon },
    { id: 1, link: "", icon: InstagramIcon },
  ];

  return (
    <div className="bg-[#0C240B] p-[11px]">
      <div className="py-16 border-b lg:px-24 md:px-[30px] px-[15px] border-[#2C3D2B]">
        <FooterUp />
      </div>
      <div className="pt-[124px] pb-[57px] border-b border-[#2C3D2B]">
        <FooterMain />
        <div className="w-full flex-wrap justify-center items-center flex">
          {socialsDetails.map((item, index) => {
            return (
              <Link href={item.link} key={index}>
                <div className="mx-3">
                  <Image src={item.icon} alt={item.link} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="py-5 flex items-center justify-center text-white text-sm">2023 Renmiss tech - All rights reserved</div>
    </div>
  );
};

export default Footer;
