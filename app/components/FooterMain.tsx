import React from "react";
import WhiteLogo from "../../public/LogoWhite.png";
import Image from "next/image";
import Link from "next/link";

const FooterMain = () => {
  const NavigateContactData = [
    {
      id: 1,
      header: "Navigate",
      links: [
        { id: 1, link: "/", linkName: "Home" },
        { id: 2, link: "about", linkName: "About" },
        { id: 3, link: "contact", linkName: "Contact" },
        { id: 4, link: "", linkName: "Testimonials" },
        { id: 5, link: "", linkName: "Blog" },
      ],
    },
    {
      id: 2,
      header: "Contact",
      links: [
        { id: 1, link: "", linkName: "Renmiss app" },
        { id: 2, link: "", linkName: "Product enquirey" },
        { id: 3, link: "", linkName: "Live chat" },
        { id: 4, link: "", linkName: "Careers" },
        { id: 5, link: "", linkName: "Email" },
      ],
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap justify-between lg:px-24 px-[30px]">
        <div className="text-white lg:w-[30%] lg:mb-0 mb-12">
          <div className="flex items-center">
            <Image src={WhiteLogo} alt="renmiss logo" />
            <span className=" bg-clip-text italic bg-gradient-to-r text-lg font-extrabold text-transparent bg-white">RenmissTech</span>
          </div>
          <p className="text-justify mt-[25px] font-light text-[#596067]">Renmiss Tech: Unleash the power of innovation in the palm of your hand. Our mobile app is your gateway to groundbreaking solutions, seamless connectivity, and limitless possibilities. Embrace the future with Renmiss Tech and unlock a world of digital transformation.</p>
        </div>

        <div className="lg:w-[62%]">
          <div className="flex flex-wrap justify-between">
            {NavigateContactData.map((item, index) => {
              return (
                <div className="text-white" key={index}>
                  <h3 className="font-semibold mb-3">{item.header}</h3>
                  <div>
                    {item.links.map((link, linkId) => {
                      return (
                        <Link href={link.link} key={linkId}>
                          <p className="font-light mb-2">{link.linkName}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div className="text-white xl:w-[40%] md:w-[48%] md:mt-0 mt-12 w-full">
              <h3 className="font-semibold mb-3">Join our community</h3>
              <p className="font-light">Join our vibrant Renmiss mobile app community and dive into a world of connection, engagement, and endless possibilities.</p>

              <div className="border border-white w-fit mt-8 h-fit text-xs flex justify-between items-center rounded overflow-hidden">
                <input type="text" className="bg-inherit h-full py-[10px] px-4 outline-none text-white" placeholder="Enter Your Email Here" />
                <button type="button" className="bg-white py-[10px] px-4 text-green-950">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-[123px] mb-12"></div>
    </div>
  );
};

export default FooterMain;
