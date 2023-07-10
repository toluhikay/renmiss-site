import React from "react";
import Africa from "../../public/images/Africa.png";
import Image from "next/image";
import RingArrow from "../../public/images/RingArrow.png";

const Repeaters = () => {
  const RepeatersData = [
    { id: 1, name: "Osakpolor Momoh", region: "East", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" },
    { id: 2, name: "Osakpolor Momoh", region: "West", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.", img: "https://plus.unsplash.com/premium_photo-1664304878313-90217946a9f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },
    { id: 3, name: "Osakpolor Momoh", region: "North", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.", img: "https://images.unsplash.com/photo-1636910043919-c3792c7a0f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW4lMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },
    { id: 4, name: "Osakpolor Momoh", region: "South", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.", img: "https://images.unsplash.com/photo-1598264294394-ba29cf557627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFuJTIwcHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
  ];

  return (
    <div className="bg-[#B3C4B2] relative lg:px-[89px] px-[30px] w-full lg:py-[180px] md:py-[70px] py-12 flex flex-col justify-center items-center">
      <div className="absolute w-full flex z-[20] justify-center items-center top-0">
        <Image className="h-auto w-[50%]" src={Africa} alt="side bg" width={200} height={400} />
      </div>
      <div className="flex items-start z-[300]">
        <div className="flex items-center">
          <div className="w-[20px] mr-6 h-[20px] bg-gradient-radial p-1 from-[#1A4E18] to-[#1A4E18]/10 rounded-full">
            <div className="w-full h-full bg-[#1A4E18] rounded-full"></div>
          </div>
          <h2 className="lg:text-5xl font-bold text-white">Repeaters</h2>
        </div>
        <div className="pt-5 ml-6">
          <Image src={RingArrow} alt="ring arrow" />
        </div>
      </div>
      <div className="z-[300] w-full lg:px-[100px] py-12 flex flex-wrap justify-between">
        {RepeatersData.map((item, index) => {
          return (
            <div className="bg-white md:w-[48%] w-full mb-12 py-12 px-4 rounded-[20px]" key={index}>
              <div className="flex flex-col relative sm:flex-row w-full justify-between pb-4 mb-4 border-b border-[#c4c4c4] sm:items-center">
                <div className="w-[126px] shadow-xl h-[126px] mr-1 rounded-full overflow-hidden">
                  <Image className="object-cover w-full h-full" src={item.img} alt={item.name} width={100} height={100} />
                </div>
                <p className="sm:w-[80%] text-xl text-[#7F8589] tracking-wider leading-relaxed">{item.content}</p>
              </div>
              <div>
                <p className="font-bold md:text-xl ">{item.region}</p>
                <p className="text-base md:text-xl text-[#7F8589]">{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Repeaters;
