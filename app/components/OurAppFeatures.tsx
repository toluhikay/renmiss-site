import Image from "next/image";
import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import AboutLandinPage from "./AboutLandinPage";

const OurAppFeatures = () => {
  const StringArr = ["Easy Payment", "fast transaction", "Variety of service"];
  return (
    <div className="bg-[#0C240B] w-full flex flex-col items-center lg:px-[89px] md:px-[30px] px-[15px] text-white py-[181px] md:rounded-tr-[300px] rounded-tr-[200px]">
      <h1 className="mb-[61px] text-3xl font-bold md:text-4xl lg:text-5xl">Our App Features</h1>
      <div className="flex flex-wrap w-full lg:w-full sm:w-[80%]  items-center justify-between">
        <div className="lg:w-[49%] lg:mb-0 mb-12 w-full">
          <Image className="w-full h-auto" src={"/images/Group1.png"} alt="woman calling" width={100} height={100} />
        </div>
        <div className="xl:w-[45%] lg:w-[49%]">
          <div className="xl:w-[78%] mb-9">
            <h2 className="text-3xl lg:text-5xl font-bold mb-9">convenience of shopping from home </h2>
            <p className="text-2xl tracking-wider font-light text-[#AABBC7] leading-10">Discover a world of convenience with Renmiss app. Shop from the comfort of your home, explore endless choices, and enjoy seamless transactions. Elevate your shopping experience with just a few taps!</p>
          </div>
          <div>
            {StringArr.map((item, index) => {
              return (
                <div className="flex items-center font-bold mb-5" key={index}>
                  {/* <IoMdCheckmarkCircle className="text-[#B3C4B2] text-2xl  mr-4" /> */}
                  <Image src={"/images/MarkSvg.svg"} alt="mark" className="mr-4" width={30} height={30} />
                  <p className="capitalize">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse w-full my-32 lg:w-full sm:w-[80%]  items-center justify-between">
        <div className="xl:w-[45%] lg:w-[49%]">
          <h2 className="text-3xl lg:text-5xl font-bold mb-9">seamless interoperability</h2>
          <p className="text-2xl tracking-wider font-light text-[#AABBC7] leading-10">
            "Unleash the potential of seamless interoperability and ignite a new era of limitless connectivity. Break free from barriers, as systems effortlessly unite, empowering innovation and transforming the way you collaborate, communicate, and thrive. Embrace the power of seamless interoperability and revolutionize your digital experience."
          </p>
          <button className="border border-white tracking-wider my-16 py-4 px-5 rounded-[10px]">Learn More</button>
        </div>
        <div className="lg:w-[49%] lg:mb-0 mb-12 flex items-center justify-center w-full">
          <Image className="w-[80%] h-auto" src={"/images/Group2.png"} alt="image 2" width={200} height={200} />
        </div>
      </div>
      <AboutLandinPage />
    </div>
  );
};

export default OurAppFeatures;
