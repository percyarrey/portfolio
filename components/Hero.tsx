"use client";
import React, { useEffect } from "react";
import TypeWriterCustom from "./Hero Components/typewriter";
import HeroThumbnail from "./Hero Components/heroThumbnail";
import { Meteors } from "./ui/meteors";

function Hero(props) {
  useEffect(() => {
    props.handle();
  }, [props]);
  return (
    <div
      className="md:flex items-center mx-auto max-w-screen-xl px-4 text-center md:text-left relative overflow-x-hidden"
      style={{ minHeight: "calc(100vh - 80px)" }}
      id="hero"
    >
      <div className="w-full md:w-7/12 pt-20 md:pt-0">
        <div className="flex justify-center md:justify-start gap-2 font-semibold text-pink">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Fullstack Developer</span>
        </div>
        <div className="text-5xl md:text-8xl text-blue font-bold font-poppins mt-3">
          Hi
          <span role="img" aria-label="high five" className="ml-2">
            👋,
          </span>
        </div>
        <div className="text-4xl md:text-7xl font-roboto text-[#223d4a] font-semibold mt-6">
          {"I'm"} Percy,
        </div>
        <div className="text-4xl md:text-5xl flex lg:text-7xl whitespace-nowrap font-roboto mt-3 text-[#122e3c] font-bold justify-center md:justify-start">
          <div className="w-0 overflow-hidden">|</div>
          <TypeWriterCustom />
        </div>
        <p className="mt-4 text-lg md:text-xl text-gray-700 md:border-s-2 md:ps-2 lg:ps-4 py-1 border-pink rounded-l-md">
          I design and develop experiences that make {"people's"} lives simpler
          through web and mobile apps. I work with Figma, HTML, CSS, JavaScript,
          React, Angular, React Native, Flutter, Nest.js, and Next.js.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 md:ms-5 mt-3">
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/tanyitiku-arrey-652574270"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-[#223d4a] text-2xl"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M19.053 3H4.947C3.872 3 3 3.872 3 4.947v14.106C3 20.128 3.872 21 4.947 21h14.106C20.128 21 21 20.128 21 19.053V4.947C21 3.872 20.128 3 19.053 3zm-11.1 15.564H7.207V10.24h1.746v8.324zM7.956 9.47a1.28 1.28 0 1 1 1.255-1.281 1.256 1.256 0 0 1-1.255 1.281zM18.016 18.564h-1.746v-4.5c0-1.069-.038-2.448-1.493-2.448-1.493 0-1.721 1.166-1.721 2.367v4.681h-1.746V10.24h1.746v1.134h.025c.243-.46.839-1.134 1.736-1.134 1.862 0 2.208 1.344 2.208 3.093v5.231z" />
            </svg>
          </a>
          {/* GitHub Link */}
          <a
            href="https://github.com/percyarrey?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-[#223d4a] text-2xl"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.304 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.236-.017-2.238-3.338.725-4.043-1.607-4.043-1.607-.546-1.387-1.333-1.757-1.333-1.757-1.089-.743.083-.727.083-.727 1.205.085 1.838 1.235 1.838 1.235 1.07 1.832 2.807 1.303 3.493.996.108-.775.419-1.303.762-1.603-2.665-.303-5.467-1.332-5.467-5.935 0-1.314.469-2.39 1.236-3.236-.124-.303-.537-1.525.115-3.176 0 0 1.007-.322 3.301 1.228a11.535 11.535 0 0 1 3.006-.404c1.019.004 2.045.138 3.006.404 2.294-1.55 3.301-1.228 3.301-1.228.653 1.651.239 2.873.115 3.176.767.846 1.236 1.922 1.236 3.236 0 4.619-2.807 5.628-5.474 5.927.43.371.815 1.097.815 2.207 0 1.594-.014 2.878-.014 3.27 0 .319.218.693.825.577C20.563 22.1 24 17.604 24 12.297c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          {/* Upwork Link */}
          <a
            href="https://www.upwork.com/freelancers/~0198f390b8ab3fff21?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-[#223d4a] text-2xl"
            aria-label="Upwork"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.7 56.7"
              className="w-8 h-8"
            >
              <path d="M42.4,17.7c-5.3,0-9.3,3.5-10.9,9c-2.5-3.9-4.5-8.3-5.6-12.1h-5.6v14.7c0,2.9-2.4,5.3-5.3,5.3c-2.9,0-5.3-2.4-5.3-5.3V14.7  H4.3v14.7c0,6.1,4.9,11,10.9,11c6,0,10.9-4.9,10.9-11v-2.5c1.1,2.2,2.5,4.6,4,6.7l-3.5,16.3h5.7L34.7,38c2.2,1.4,4.7,2.2,7.7,2.2  c6.1,0,11.1-5,11.1-11.4C53.5,22.7,48.5,17.7,42.4,17.7z M42.4,34.6c-2.2,0-4.5-1-6.3-2.5l0.6-2.2v-0.1c0.4-2.4,1.7-6.4,5.8-6.4  c3.1,0,5.6,2.5,5.6,5.6C48,32.1,45.3,34.6,42.4,34.6z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="w-full md:w-5/12 h-full flex items-center overflow-hidden">
        <HeroThumbnail />
      </div>
      {/* Meaty part - Meteor effect */}
      <Meteors number={10} className="bg-blue" />
    </div>
  );
}

export default Hero;
