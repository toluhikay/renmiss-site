"use client";
import React, { useState } from "react";
import Africa from "../../public/images/Africa.png";
import Image from "next/image";
import RingArrow from "../../public/images/RingArrow.png";

const image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";
const RepeatersData = [
  { id: 1, name: "Osakpolor Momoh", region: "East", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" },
  { id: 2, name: "Osakpolor Momoh", region: "West", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.", img: "https://plus.unsplash.com/premium_photo-1664304878313-90217946a9f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },
  { id: 3, name: "Osakpolor Momoh", region: "North", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.", img: "https://images.unsplash.com/photo-1636910043919-c3792c7a0f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW4lMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },
  { id: 4, name: "Osakpolor Momoh", region: "South", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.", img: "https://images.unsplash.com/photo-1598264294394-ba29cf557627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFuJTIwcHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
  { id: 5, name: "Osakpolor Momoh", region: "East", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" },
  { id: 6, name: "Osakpolor Momoh", region: "West", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.", img: "https://plus.unsplash.com/premium_photo-1664304878313-90217946a9f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },
  { id: 7, name: "Osakpolor Momoh", region: "West", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.", img: "https://plus.unsplash.com/premium_photo-1664304878313-90217946a9f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },
];
const Repeaters = () => {
  const [id, setId] = useState<number | null>(null);
  const [openState, setOpenState] = useState(false);

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
        <div className="w-full flex justify-between items-center flex-wrap mb-24">
          <RepeaterArray id={id} setId={setId} number={1} />
          <RepeaterArray id={id} setId={setId} number={2} />
          <RepeaterArray id={id} setId={setId} number={3} />
          <RepeaterArray id={id} setId={setId} number={4} />
          <RepeaterArray id={id} setId={setId} number={5} />
          <RepeaterArray id={id} setId={setId} number={6} />
        </div>
      </div>
    </div>
  );
};

export default Repeaters;

const RepeaterArray = ({ number, id, setId }: { id: null | number; setId: React.Dispatch<React.SetStateAction<number | null>>; number: number }) => {
  return (
    <div className={`lg:w-[48%] min-h-[450px] ${id === number ? "lg:my-auto my-36" : "my-auto"} w-full relative flex justify-center items-center`}>
      <div
        className=" flex items-center relative flex-col"
        onClick={() => {
          id !== number ? setId(number) : setId(0);
        }}
      >
        <div className="sm:w-[180px] w-[100px] h-[100px] sm:h-[180px] rounded-full cursor-pointer hover:scale-105 overflow-hidden">
          <Image className="w-full h-full object-cover" src={image} alt={""} width={100} height={100} />
        </div>
        <h1 className="md:text-base text-sm ">South west coordinator</h1>
        <p>Zuli Tijani</p>
      </div>
      <div className={`${id === number ? "flex" : "hidden"}`}>
        {RepeatersData.map((item, index) => {
          return (
            <div className={`absolute flex items-center flex-col ${index === 0 ? "left-0 bottom-[15%]" : index === 1 ? "left-0 top-[16%]" : index === 2 ? "top-[-15%] left-[50%] translate-x-[-50%]" : index === 3 ? "right-0 top-[17%]" : index === 4 ? "right-0 bottom-[10%]" : index === 5 ? "bottom-[-15%] right-[20%]" : index === 6 ? "bottom-[-15%] right-[50%]" : ""}`} key={index}>
              <div className={`sm:w-[90px] sm:h-[90px] w-[50px] h-[50px] rounded-full overflow-hidden`}>
                <Image className="object-cover w-full h-full" src={item.img} alt={item.region} width={100} height={100} />
              </div>
              <h1 className="text-[12px]">{item.region}</h1>
              <p className="text-[12px]">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
