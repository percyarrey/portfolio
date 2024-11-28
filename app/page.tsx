import About from "@/components/About";
import Contact from "@/components/Contact";
import Copyright from "@/components/Copyright";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

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
        {/* CONTACT */}
        <Contact />
        {/* COPYRIGHT */}
        <Copyright />
      </div>
    </div>
  );
}
