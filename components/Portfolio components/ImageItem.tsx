"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function ImageItem({ LoadingSpinner, item }) {
  const [loading, setLoading] = useState(true); // Loading state for images
  const [loadProject, setLoadProject] = useState(false);
  useEffect(() => {
    setLoadProject(true);
  }, []);
  return (
    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-70 z-20">
          <LoadingSpinner />
        </div>
      )}{" "}
      {/* Show spinner while loading */}
      <Image
        src={"/images/graphic/" + item.image}
        alt={item.name}
        width={500} // Set appropriate width
        height={300} // Set appropriate height
        className={`w-full h-full object-cover ${
          loading ? "opacity-0" : "opacity-100"
        }`} // Hide image until loaded
        onLoad={() => setLoading(false)} // Set loading to false on image load
        onError={() => {
          setLoading(false);
        }}
      />
    </>
  );
}

export default ImageItem;
