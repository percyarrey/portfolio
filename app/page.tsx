import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <Header />

      <div className=" mt-[80px]">
        {/* HERO */}
        <Hero />
      </div>
    </div>
  );
}
