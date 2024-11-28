"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Project({ LoadingSpinner, project }) {
  const [loading, setLoading] = useState(true); // Loading state for images
  const [loadProject, setLoadProject] = useState(false);
  useEffect(() => {
    setLoadProject(true);
  }, []);
  return (
    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <LoadingSpinner />
        </div>
      )}
      {loadProject && (
        <Image
          src={"/images/projects/" + project.images[0]}
          fill
          alt={project.name}
          className="w-full h-full object-cover object-top"
          onLoad={() => {
            setLoading(false);
          }} // Update loading state when the image is loaded
          onError={() => {
            setLoading(false);
          }} // Ensure loading state is reset on error
        />
      )}
    </>
  );
}

export default Project;
