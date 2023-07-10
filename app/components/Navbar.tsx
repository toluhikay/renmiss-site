"use client";

import React, { useState } from "react";
import LogoImage from "../../public/Logo.png";
import Image from "next/image";
import { BiMenuAltRight, BiMoon } from "react-icons/bi";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const NavData = [
    { id: 1, label: "home", link: "" },
    { id: 2, label: "product", link: "" },
    { id: 3, label: "contact", link: "contact" },
    { id: 4, label: "about", link: "about" },
  ];

  const [navState, setNavState] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 bg-gradient-to-r z-[300000] backdrop-blur-xl flex md:flex-row flex-col justify-between items-center lg:px-[86px] md:px-[30px] px-[15px] md:py-[33px] py-3 font-extrabold">
      <div className="flex md:w-auto w-full justify-between items-center">
        <div className="flex items-center">
          <Image src={LogoImage} alt="renmiss logo" /> <span className=" bg-clip-text italic bg-gradient-to-r text-lg font-extrabold text-transparent from-[#013356] to-[#1A4E18]">RenmissTech</span>
        </div>
        <div className="md:hidden flex items-center">
          <p className="text-white bg-[#1A4E18] w-fit mr-3 p-[5px] rounded-full">
            <BiMoon className="" />
          </p>
          <BiMenuAltRight className="text-3xl cursor-pointer" onClick={() => setNavState(!navState)} />
        </div>
      </div>
      <nav className="lg:w-1/2 md:w-2/3  w-full md:flex hidden justify-between items-center">
        <ul className="flex justify-between lg:w-[70%] md:w-[80%] w-full md:flex-row flex-col md:items-center">
          {NavData.map((item, index) => {
            return (
              <Link href={item.link} key={index}>
                <p className="text-base md:my-0 my-4 font-semibold capitalize">{item.label}</p>
              </Link>
            );
          })}
        </ul>
        <div className="md:w-[10%] hidden md:flex">
          <p className="text-white bg-[#1A4E18] w-fit p-[11px] rounded-full">
            <BiMoon className="" />
          </p>
        </div>
      </nav>
      <nav className={`w-[100%] bg-gradient-to-tr transition-all flex-col from-gray-100 via-green-100 to-green-200 px-[30px] ${navState ? "left-0" : "left-[-100%]"} flex md:hidden fixed top-0 h-screen justify-center items-center`}>
        <div className="absolute top-5 w-full flex justify-between px-[15px]">
          <Image src={LogoImage} alt="logo" />
          <AiOutlineClose className="text-3xl" onClick={() => setNavState(false)} />
        </div>
        <ul className="flex justify-center w-full md:flex-row flex-col items-center">
          {NavData.map((item, index) => {
            return (
              <Link href={item.link} key={index}>
                <p className="text-base md:my-0 my-12 font-semibold capitalize" onClick={() => setNavState(false)}>
                  {item.label}
                </p>
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
