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
        { id: 1, link: "", linkName: "Home" },
        { id: 2, link: "", linkName: "About" },
        { id: 3, link: "", linkName: "Contact" },
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

  const SocialsData = [
    { id: 1, icon: "", link: "" },
    { id: 1, icon: "", link: "" },
    { id: 1, icon: "", link: "" },
    { id: 1, icon: "", link: "" },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-between lg:px-24 px-[30px]">
        <div className="text-white lg:w-[30%] lg:mb-0 mb-12">
          <div className="flex items-center">
            <Image src={WhiteLogo} alt="renmiss logo" />
            <span className=" bg-clip-text italic bg-gradient-to-r text-lg font-extrabold text-transparent bg-white">RenmissTech</span>
          </div>
          <p className="text-justify mt-[25px] font-light text-[#596067]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit </p>
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
              <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>

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
