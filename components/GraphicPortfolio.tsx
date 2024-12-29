"use client";
import React, { useEffect, useState } from "react";
import graphics from "../data/GraphicData.json";
import ScrollReveal from "./ui/ScrollReveal";
/* import Image from "next/image";  */ // Import Next.js Image component
/* import ImageItem from "./Portfolio components/ImageItem"; */
import { FocusCards } from "./ui/focus-cards";

// Loading Spinner Component
/* const LoadingSpinner = () => (
  <div className="loader animate-spin rounded-full border-4 border-t-4 border-blue h-12 w-12 overflow-hidden flex justify-center items-center ">
    <div className="w-full h-[2px] bg-blue"></div>
  </div>
); */

function GraphicPortfolio(props) {
  useEffect(() => {
    props.handle();
  }, [props]);

  // State to manage the number of visible cards
  const [visibleCount, setVisibleCount] = useState(4); // Start with 8 cards

  // Function to load more cards
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Increase by 4
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-16">
      <ScrollReveal>
        {/* SUBTITLE */}
        <div className="font-bold mt-3 font-poppins text-center text-green-600">
          <span className="flex items-center justify-end">
            <svg
              fill="currentColor"
              height="23px"
              width="23px"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 289 289"
            >
              <g id="SVGRepo_iconCarrier">
                <path d="M244.373,79.021c-0.792,2.691-3.022,4.715-5.776,5.246l-41.006,7.911l-13.678,40.098c2.328,2.643,3.569,6.102,3.569,9.901 V274c0,8.284-6.349,15-14.633,15H97.523c-8.284,0-15.04-6.716-15.04-15V142.177c0-4.231,1.778-8.046,4.596-10.772l-13.16-52.387 c-0.329,0.012-0.616,0.041-0.946,0.041c-11.763,0-22.286-7.435-26.215-18.501l-0.198-0.592c-7.385-21.441,5.813-49.582,6.377-50.77 c0.866-1.819,2.43-3.216,4.336-3.871c1.905-0.658,3.995-0.523,5.797,0.379c1.175,0.588,28.86,14.635,36.231,36.034l0.217,0.615 c4.066,12.176-0.872,25.272-11.188,32.043L101.504,127h24.979V35.479L112.661,11.25c-1.34-2.32-1.257-5.18,0.083-7.5 S116.643,0,119.322,0h29.445c2.68,0,5.155,1.43,6.495,3.75s1.173,5.18-0.167,7.5l-13.614,23.291V127h28.505l13.548-40.144 L160.463,51.89c-1.532-2.327-1.647-5.312-0.3-7.75c1.349-2.438,3.947-3.91,6.722-3.871c28.255,0.592,55.061,11.677,75.48,31.215 C244.393,73.422,245.166,76.33,244.373,79.021z"></path>
              </g>
            </svg>
            <span className="whitespace-nowrap">GRAPHIC PROJECT</span>
          </span>
        </div>

        {/* GRAPHIC IMAGES */}
        <div /* className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16" */>
          <FocusCards cards={graphics.slice(0, visibleCount)} />
          {/* {graphics.slice(0, visibleCount).map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden min-h-[300px] flex items-center justify-center relative"
              >
                
                <ImageItem LoadingSpinner={LoadingSpinner} item={item} />
              </div>
            );
          })} */}
        </div>

        {/* Show More Button */}
        {visibleCount < graphics.length && (
          <div className="text-center mt-6">
            <button
              onClick={loadMore}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
            >
              Show More
            </button>
          </div>
        )}
      </ScrollReveal>
    </div>
  );
}

export default GraphicPortfolio;
