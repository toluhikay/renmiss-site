import Image from "next/image";
import React from "react";
import { AiOutlineTransaction, AiFillWechat } from "react-icons/ai";
import { SiShopee } from "react-icons/si";
import OurAppFeatures from "./OurAppFeatures";

const RenmissApp = () => {
  const Renmissdata = [
    {
      id: 1,
      title: "Transactions",
      details: `Effortlessly send and receive money, split bills with friends, and enjoy secure transactions. Unlock convenience with a single tap, while our app keeps your money moving smoothly. Join the future of effortless mobile payments today!"
    `,
      icon: <AiOutlineTransaction />,
    },
    {
      id: 2,
      title: "E-shop",
      details: `Discover a world of limitless shopping at your fingertips. Browse, buy, and indulge in the latest trends and exclusive deals with our mobile app. Elevate your shopping experience and unlock a universe of convenience with just a tap.
    `,
      icon: <SiShopee />,
    },
    {
      id: 3,
      title: "Chat messaging",
      details: `"Stay connected like never before with our chat messaging platform. Instantly chat with friends, share moments, and express yourself in real-time. Experience seamless communication that keeps you connected, anytime and anywhere."
    `,
      icon: <AiFillWechat />,
    },
  ];
  return (
    <div className=" bg-gradient-to-br h-auto from-yellow-200/40 via-gray-200 to-gray-100 relative w-full pt-[100px]">
      <div className="w-full flex flex-col justify-center items-center text-center lg:px-[89px] md:px-[30px] px-[15px] ">
        <h2 className="font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:w-[43%] lg:w-[60%] xl:mb-16 md:mb-10 mb-7 leading-10">"Renmiss App: Your Ultimate All-in-One Powerhouse!"</h2>
        <p className="text-[#596067] xl:w-3/5 md:w-4/5">Unlock the power of convenience with Renmiss app. From task management to social connections, shopping to endless possibilities, experience the ultimate all-in-one platform that revolutionizes your daily life.</p>
      </div>
      <div className="w-full relative flex z-[50000] lg:my-[156px] my-[70px] lg:px-[89px] md:px-[30px] px-[15px] lg:items-start md:my-[100px] flex-wrap lg:justify-between justify-center">
        {Renmissdata.map((item, index) => {
          return (
            <div className="lg:w-[30%] md:w-[60%] lg:min-h-[350px] lg:mb-0 mb-12 p-8 shadow-2xl w-full bg-white" key={index}>
              <div className="bg-[#B3C4B2] w-fit p-4 text-4xl rounded-[22px] mb-6">{item.icon}</div>
              <h1 className="text-xl font-bold mb-2">{item.title}</h1>
              <p className="text-[#596067]">{item.details}</p>
            </div>
          );
        })}
      </div>
      <OurAppFeatures />
      <div className="absolute right-0 z-[20] top-0">
        <Image className="lg:h-[1200px] h-auto w-auto" src={"/images/SideBg.png"} alt="side bg" width={200} height={400} />
      </div>
    </div>
  );
};

export default RenmissApp;
