"use client";
import MessageForm from "../about/components/MessageForm";

export default function Contact() {
  return (
    <div className="flex flex-wrap md:justify-between justify-center md:min-h-screen h-auto items-start md:py-[auto] lg:py-40 py-32 lg:px-[89px] md:px-[30px] px-[15px] w-full bg-gradient-to-tr from-yellow-200/40 via-gray-200 to-green-300/70">
      <p className="text-[#1A4E18] font-bold mb-[52px] lg:text-5xl md:text-4xl text-2xl w-full text-center">Contact</p>
      <MessageForm />
    </div>
  );
}
