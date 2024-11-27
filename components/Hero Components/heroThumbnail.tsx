"use client";
import { useEffect, useState } from "react";
import {
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaAngular,
  FaNode,
} from "react-icons/fa";
import Image from "next/image";

const icons = [
  { Icon: FaFigma, alt: "Figma", color: "text-purple-600" },
  { Icon: FaHtml5, alt: "HTML", color: "text-orange-600" },
  { Icon: FaCss3Alt, alt: "CSS", color: "text-blue-600" },
  { Icon: FaJsSquare, alt: "JavaScript", color: "text-yellow-600" },
  { Icon: FaReact, alt: "React", color: "text-cyan-500" },
  { Icon: FaAngular, alt: "Angular", color: "text-red-600" },
  { Icon: FaNode, alt: "Node.js", color: "text-green-600" },
];

const HeroThumbnail = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full mt-3 sm:mt-0 mb-5">
      <div className="absolute -z-10 flex justify-center items-center rotate mt-[95px]">
        {icons.map(({ Icon, alt, color }, index) => {
          const angle = (index / icons.length) * 2 * Math.PI;
          const x = Math.cos(angle) * 218; // x for larger screens
          const y = Math.sin(angle) * 218; // y for larger screens
          const smx = Math.cos(angle) * 195; // x for smaller screens
          const smy = Math.sin(angle) * 195; // y for smaller screens

          return (
            <div
              key={index}
              className="absolute"
              style={{
                transform: `translate(${windowWidth < 400 ? smx : x}px, ${
                  windowWidth < 400 ? smy : y
                }px) rotate(0deg)`,
              }}
            >
              <div
                className="rotate-icons top-20"
                style={{ transform: `rotate(0deg)` }}
              >
                <Icon className={`text-4xl ${color}`} title={alt} />
              </div>
            </div>
          );
        })}
      </div>
      <Image
        src="/images/profile.png"
        alt="Main Thumbnail"
        height={400}
        width={400}
        priority
        className="rounded-full z-10 w-auto h-auto"
      />

      <style jsx>{`
        .rotate-icons {
          animation: rotate-counter 40s linear infinite;
          transform-origin: center;
        }

        @keyframes rotate-counter {
          0% {
            transform: rotate(0deg);
            scale: 0.75;
          }
          50% {
            scale: 0.9;
          }
          100% {
            transform: rotate(-360deg);
            scale: 0.75;
          }
        }

        .rotate {
          animation: rotate 40s linear infinite;
          transform-origin: center;
        }

        @keyframes rotate {
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
};

export default HeroThumbnail;
