import Image from "next/image";
import Hero from "./components/Hero";
import RenmissApp from "./components/RenmissApp";
import Repeaters from "./components/Repeaters";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <RenmissApp />
      <Repeaters />
    </main>
  );
}
