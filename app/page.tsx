import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <Header />

      <div className=" mt-[80px]">
        {/* HERO */}
        <Hero />
        {/* ABOUT */}
        <About />
        {/* PORTFOLIO */}
        <Portfolio />
      </div>
    </div>
  );
}
