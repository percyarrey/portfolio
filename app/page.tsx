"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";

// Dynamically import components
const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/About"));
const WebPortfolio = dynamic(() => import("@/components/WebPortfolio"));
const GraphicPortfolio = dynamic(() => import("@/components/GraphicPortfolio"));
const Contact = dynamic(() => import("@/components/Contact"));
const Copyright = dynamic(() => import("@/components/Copyright"));

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-[15rem]">
    <div className="animate-spin  duration-1000 rounded-full border-4 border-t-4 border-blue-500 border-gray-200  w-10 h-10 flex items-center justify-center">
      <div className="w-full h-[2px] bg-gray-200"></div>
    </div>
  </div>
);

export default function Home() {
  const [component1Loaded, setComponent1Loaded] = useState(false);
  const [component2Loaded, setComponent2Loaded] = useState(false);
  const [component3Loaded, setComponent3Loaded] = useState(false);
  const [component4Loaded, setComponent4Loaded] = useState(false);
  const [component5Loaded, setComponent5Loaded] = useState(false);
  const [component6Loaded, setComponent6Loaded] = useState(false);

  useEffect(() => {
    setComponent1Loaded(true); // Load the Hero component first
  }, []);

  const handleComponent2 = () => {
    setComponent2Loaded(true); // Load the About component
  };

  const handleComponent3 = () => {
    setComponent3Loaded(true); // Load the Portfolio component
  };

  const handleComponent4 = () => {
    setComponent4Loaded(true); // Load the Contact component
  };

  const handleComponent5 = () => {
    setComponent5Loaded(true); // Load the Copyright component
  };
  const handleComponent6 = () => {
    setComponent6Loaded(true); // Load the Copyright component
  };

  return (
    <div>
      {/* HEADER */}
      <Header />

      <div className="mt-[80px]">
        {/* HERO */}
        {component1Loaded && <Hero handle={handleComponent2} />}

        {/* ABOUT */}
        {component2Loaded ? (
          <About handle={handleComponent3} />
        ) : (
          component1Loaded && <LoadingSpinner />
        )}

        {/* WEB PORTFOLIO */}
        {component3Loaded ? (
          <WebPortfolio handle={handleComponent4} />
        ) : (
          component2Loaded && <LoadingSpinner />
        )}

        {/* GRAPHIC PORTFOLIO */}
        {component4Loaded ? (
          <GraphicPortfolio handle={handleComponent5} />
        ) : (
          component3Loaded && <LoadingSpinner />
        )}

        {/* CONTACT */}
        {component5Loaded ? (
          <Contact handle={handleComponent6} />
        ) : (
          component4Loaded && <LoadingSpinner />
        )}

        {/* COPYRIGHT */}
        {component6Loaded ? (
          <Copyright />
        ) : (
          component5Loaded && <LoadingSpinner />
        )}
      </div>
    </div>
  );
}
