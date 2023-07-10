import Image from "next/image";
import React from "react";
import VisionImage from "../../../public/images/VisionImg.png";
import MissionImage from "../../../public/images/MissionImg.png";

const VisionMission = () => {
  const VisionMissionData = [
    { id: 1, img: VisionImage, title: "VISION", content: "A simplified network without financial borders for individuals and businesses to thrive, anytime, anywhere in Nigeria and beyond" },
    { id: 1, img: MissionImage, title: "Mission", content: "To create an all-in-one information sharing, socio-economic and political network, with a modern payment infrastructure that would improve digital users’ experience, introduce and inspire analogue demography to believe and plug into the global economy" },
  ];

  return (
    <div className="w-full relative lg:px-[86px] px-[30px] flex justify-center items-center bg-gradient-to-br min-h-[40vh] flex-col from-yellow-200/40 via-gray-200 to-gray-100">
      <div className="absolute right-0 z-[20] top-0">
        <Image className="lg:h-[1200px] h-auto w-auto" src={"/images/SideBg.png"} alt="side bg" width={200} height={400} />
      </div>
      <div className="flex flex-col">
        {VisionMissionData.map((item, index) => {
          return (
            <div className={`w-full flex ${index === 0 ? "justify-start" : "justify-end"} py-12`} key={index}>
              <div className={`lg:w-[53%] md:w-[65%] w-full relative flex ${index === 0 ? "flex-col" : "md:flex-col-reverse flex-col"} `}>
                <div className={`w-full relative flex flex-col ${index === 0 ? "text-center md:text-end" : "text-center md:text-start"} `}>
                  <h2 className="md:text-3xl text-2xl font-bold uppercase md:mt-12 md:mb-6 md:my-0 my-6">{item.title}</h2>
                  <p className="mb-[74px] text-[#232629] lg:text-2xl md:text-lg leading-loose tracking-wider">{item.content}</p>
                </div>
                <div className={`w-full flex relative ${index === 0 ? "justify-end" : "justify-start lg:pt-0 md:pt-28"}`}>
                  <div className={`w-full md:w-[70%] flex ${index === 0 ? "md:absolute z-[3000]" : ""}`}>
                    <Image className="w-full h-full" src={item.img} alt={item.title} width={100} height={100} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VisionMission;
