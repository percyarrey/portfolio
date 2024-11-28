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
    <div className="animate-spin rounded-full border-4 border-t-4 border-blue-500 border-gray-200 w-16 h-16"></div>
  </div>
);

export default function Home() {
  const [loadedSections, setLoadedSections] = useState([]);
  const sections = [
    { component: <Hero />, key: "hero" },
    { component: <About />, key: "about" },
    { component: <Portfolio />, key: "portfolio" },
    { component: <Contact />, key: "contact" },
    { component: <Copyright />, key: "copyright" },
  ];

  useEffect(() => {
    const loadSections = async () => {
      for (const section of sections) {
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate loading
        setLoadedSections((prev) => [...prev, section]);
      }
    };

    loadSections();
  }, []);

  return (
    <div>
      {/* HEADER */}
      <Header />

      <div className="mt-[80px]">
        {loadedSections.length < sections.length ? (
          <LoadingSpinner />
        ) : (
          loadedSections.map((section) => (
            <div key={section.key}>{section.component}</div>
          ))
        )}
      </div>
    </div>
  );
}
