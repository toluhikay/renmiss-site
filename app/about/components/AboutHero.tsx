import React from "react";
import MessageForm from "./MessageForm";

const AboutHero = () => {
  return (
    <div className="flex flex-wrap  justify-center md:min-h-[80vh] h-auto items-center md:py-[auto] lg:pt-40 pt-32 lg:px-[89px] md:px-[30px] px-[15px] w-full bg-gradient-to-tr flex-col from-yellow-200/40 via-gray-200 to-green-300/70">
      <div className="flex items-center sm:text-5xl text-[#1A4E18] text-2xl font-bold mb-[67px]">
        <h1 className="mr-2">About</h1> <div className=" sm:bg-about-green bg-about-green-mobile bg-cover sm:p-[49px] flex items-center justify-center p-4 w-auto sm:min-w-[410px]">Renmiss Tech</div>
      </div>
      <p className="md:text-[24px] text-base text-center lg:px-12 tracking-wider leading-relaxed pb-12">
        A limited liability company comprising of a team of entrepreneurs, developers, AI experts, ex-bankers, and academicians, who have come together to use information technology, automation software, and “trado-tech” means, to develop innovations that cause disruption of modus operandi in existing and emerging industries, within the economic spectrum to bring forth, national and continental
        developments, that would foster the socio-economic and political prosperity of individuals, in Nigeria and Africa At large. <br /> <br /> In a bid to foster, political and socio-economic prosperity amongst young Nigerians, Renmiss Solutions seeks to deliberately proffer solutions to problems facing existing industries like communication, lending, finance, politics, and e-commerce, and
        novel industries, like blockchain, and artificial intelligence, amongst others, through automation of their value chains and the use of traditional and technological means, what we call “trado-tech”, to create systems within them that ensure the political and socio-economic prosperity of whoever from amongst its consumers desires so. <br /> <br />
        The embodiment of “Trado-tech”, in the model of our products enables, rural settlers, analogue users, and the underlooked larger population to become elevated in status in spheres of life that directly affect their individual development, while also solving problems existing within industries that have hindered the full maximization of the political and socio-economic potential of digital
        users. <br />
        <br />
        For example, one of our products, Renmiss mobile application, is designed to empower those at the grassroots (every polling unit) without third-party interference. At the same time, it gives room for those within the middle class to gain genuine financial independence if they so wish through a profound e-commerce model, the application embodies.
        <br />
        <br />
        One can find a similar trend in the variety of products that are created under the ecosystem of “Renmiss Solutions”
      </p>
    </div>
  );
};

export default AboutHero;
