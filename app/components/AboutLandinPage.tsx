import React from "react";

const AboutLandinPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center sm:text-5xl text-2xl font-bold mb-[67px]">
        <h1 className="mr-2">About</h1> <div className=" sm:bg-about-white bg-about-white-mobile bg-cover sm:p-[49px] flex items-center justify-center p-4 w-auto sm:min-w-[410px]">Renmiss Tech</div>
      </div>
      <p className="text-center tracking-wider text-2xl sm:w-[90%] text-[#AABBC7]">
        A limited liability company comprising of a team of entrepreneurs, developers, AI experts, ex-bankers, and academicians, who have come together to use information technology, automation software, and “trado-tech” means, to develop innovations that cause disruption of modus operandi in existing and emerging industries, within the economic spectrum to bring forth, national and continental
        developments, that would foster the socio-economic and political prosperity of individuals, in Nigeria and Africa At large
      </p>
    </div>
  );
};

export default AboutLandinPage;
