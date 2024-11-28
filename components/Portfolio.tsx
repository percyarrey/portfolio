"use client"; // Ensure this is at the top if you're using Next.js with client components
import React, { useState } from "react";
import projects from "../data/projects.json";
import Project from "./Portfolio components/Project";
import ScrollReveal from "./ui/ScrollReveal";
import Image from "next/image";

function Portfolio() {
  const [selectedTool, setSelectedTool] = useState("All");
  const [visibleCount, setVisibleCount] = useState(2);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryLoading, setGalleryLoading] = useState(true); // Loading state for gallery images

  const tools = [
    "All",
    "Next.js",
    "Angular",
    "Laravel",
    "React Native",
    "Bootstrap",
  ];

  const filteredProjects =
    selectedTool === "All"
      ? projects
      : projects.filter((project) => project.tools.includes(selectedTool));

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  const openGallery = (project) => {
    setCurrentProject(project);
    setCurrentImageIndex(0); // Reset to the first image
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setCurrentProject(null);
  };

  const nextImage = () => {
    setGalleryLoading(true);
    if (currentProject) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % currentProject.images.length
      );
    }
  };

  const previousImage = () => {
    setGalleryLoading(true);
    if (currentProject) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + currentProject.images.length) %
          currentProject.images.length
      );
    }
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 pt-8 pb-16" id="portfolio">
      {/* TITLE */}
      <div className="text-4xl md:text-5xl text-blue font-bold font-roboto flex items-center gap-8">
        <span className="whitespace-nowrap">Portfolio</span>
        <div className="w-full bg-blue h-[1px] rounded-xl opacity-70"></div>
      </div>

      <ScrollReveal>
        {/* Tabs for filtering */}
        <div className="mt-9">
          <div className="flex space-x-4 w-full overflow-x-auto">
            {tools.map((tool) => (
              <button
                key={tool}
                onClick={() => setSelectedTool(tool)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedTool === tool
                    ? "bg-cyan-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-cyan-500 hover:text-white"
                }`}
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-[6rem]">
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <div
              key={index}
              className="relative border rounded-lg shadow-lg  h-[22rem]  transition-transform duration-300 hover:scale-[1.01]"
            >
              <Project LoadingSpinner={LoadingSpinner} project={project} />

              <div className="absolute rounded-lg bg-opacity-15 bg-cyan-400 inset-0 flex items-center cursor-pointer justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => openGallery(project)}
                  className="w-full h-full flex justify-center items-center"
                >
                  <span className="text-white bg-blue rounded-full p-2">
                    <svg
                      fill="none"
                      height="24"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 9L20 4M20 4V8M20 4H16"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 15L4 20M4 20V16M4 20H8"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="p-4 z-[11] bg-white absolute -bottom-[4.5rem]  w-[80%] md:w-[70%] rounded-md shadow-lg left-[10%] text-center md:left-[15%]">
                <h3 className="text-xl font-semibold text-blue">
                  {project.name}
                </h3>
                <p className="text-gray-500 text-md">{project.description}</p>
                <div className="mt-1">
                  <span className="text-sm font-medium text-gray-600">
                    Tools: {project.tools.join(", ")}
                  </span>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-pink underline px-4 py-2 rounded"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-24 text-center">
            <button
              onClick={handleShowMore}
              className="px-4 py-2 bg-blue text-white rounded hover:bg-cyan-700 transition-colors"
            >
              Show More
            </button>
          </div>
        )}
      </ScrollReveal>

      {/* Image Gallery Modal */}
      {isGalleryOpen && currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-[90vw] h-[90vh] flex items-center">
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white text-2xl bg-blue rounded-full w-[2rem] h-[2rem]"
            >
              &times;
            </button>
            {galleryLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-20">
                <LoadingSpinner />
              </div>
            )}
            <Image
              src={
                "images/projects/" + currentProject.images[currentImageIndex]
              }
              alt={`Gallery image ${currentImageIndex + 1}`}
              className="h-full w-full object-contain" // Maintains aspect ratio
              onLoad={() => setGalleryLoading(false)} // Update loading state when the image is loaded
              onError={() => setGalleryLoading(false)} // Ensure loading state is reset on error
            />
            {currentProject.images.length >= 2 && (
              <div className="flex justify-between w-full mt-4 absolute mb-4">
                <button
                  onClick={previousImage}
                  className="text-white text-3xl bg-blue rounded-full p-2"
                >
                  &lt; {/* Previous */}
                </button>

                <button
                  onClick={nextImage}
                  className="text-white text-3xl bg-blue rounded-full p-2"
                >
                  &gt; {/* Next */}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="loader animate-spin rounded-full border-4 border-t-4 border-blue h-12 w-12 overflow-hidden">
    <div className="w-full h-4 bg-white absolute -bottom-2"></div>
  </div>
);

export default Portfolio;
