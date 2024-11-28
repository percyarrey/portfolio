"use client";
import { useEffect, useState } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Copyright from "@/components/Copyright";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-16">
    <div className="loader"></div>
    <style jsx>{`
      .loader {
        border: 8px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top: 8px solid #3498db;
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [sectionsLoaded, setSectionsLoaded] = useState(0);
  const sections = [
    <Hero key="hero" />,
    <About key="about" />,
    <Portfolio key="portfolio" />,
    <Contact key="contact" />,
    <Copyright key="copyright" />,
  ];

  useEffect(() => {
    const loadSections = async () => {
      for (const section of sections) {
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate loading
        setSectionsLoaded((prev) => prev + 1);
      }
      setLoading(false);
    };

    loadSections();
  }, []);

  return (
    <div>
      {/* HEADER */}
      <Header />

      <div className="mt-[80px]">
        {loading ? <LoadingSpinner /> : sections.slice(0, sectionsLoaded)}
      </div>
    </div>
  );
}
