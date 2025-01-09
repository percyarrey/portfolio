/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import React, { useEffect, useState } from "react";
try {
  require("flowbite/dist/flowbite.min.js");
} catch (error) {
  console.log(error);
}
import Image from "next/image";

const sections = [
  { id: "hero", title: "Section 1" },
  { id: "about", title: "Section 2" },
  { id: "portfolio", title: "Section 3" },
  { id: "contact", title: "Section 3" },
];
export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const { offsetTop, clientHeight } = element;

        if (scrollPosition >= offsetTop - clientHeight / 3) {
          setActiveSection(section.id);
        }
      }
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, clientHeight } = element;

          if (element.id === "contact") {
          }
          if (scrollPosition >= offsetTop - clientHeight / 3) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offsetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - 80; // Calculate the position with offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Smooth scroll to the target position
      });
    }
  };
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/icon.png"
              width={32}
              height={32}
              alt="TAN SOLUTION Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TAN <span className="hidden sm:inline-block ml-1"> SOLUTION</span>
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-[#E57F84] bg-[linear-gradient(110deg,#ffffff,45%,#E57F84,45.1%,#ffffff)] bg-[length:200%_100%] px-6 font-medium text-[#223d4a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E57F84] focus:ring-offset-2 focus:ring-offset-white"
            >
              Resume
            </a>
            <button
              className="text-[#E57F84] border border-[#E57F84] bg-transparent hover:bg-[#E57F84] hover:text-white focus:ring-4 focus:ring-[#E57F84] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none md:hidden"
              type="button"
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleSmoothScroll(e, "hero")}
                  className={
                    "block py-2 px-3 rounded md:hover:text-[#E57F84] md:p-0  " +
                    (activeSection === "hero"
                      ? " text-[#E57F84] font-bold"
                      : "text-gray-900 opacity-70")
                  }
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleSmoothScroll(e, "about")}
                  className={
                    "block py-2 px-3 rounded md:hover:text-[#E57F84] md:p-0  " +
                    (activeSection === "about"
                      ? " text-[#E57F84] font-bold"
                      : "text-gray-900 opacity-70")
                  }
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleSmoothScroll(e, "portfolio")}
                  className={
                    "block py-2 px-3 rounded md:hover:text-[#E57F84] md:p-0  " +
                    (activeSection === "portfolio"
                      ? " text-[#E57F84] font-bold"
                      : "text-gray-900 opacity-70")
                  }
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "contact")}
                  className={
                    "block py-2 px-3 rounded md:hover:text-[#E57F84] md:p-0  " +
                    (activeSection === "contact"
                      ? " text-[#E57F84] font-bold"
                      : "text-gray-900 opacity-70")
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        id="drawer-navigation"
        className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
        tabIndex="'-1'"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Menu
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#hero"
                onClick={(e) => handleSmoothScroll(e, "hero")}
                className={
                  "flex items-center p-2 rounded-lg group " +
                  (activeSection === "hero" ? "text-white bg-[#E57F84]" : "")
                }
                aria-current="page"
              >
                <svg
                  className={
                    "w-5 h-5 " +
                    (activeSection === "hero" ? "text-white" : "text-gray-500")
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className={
                  "flex items-center p-2 rounded-lg group " +
                  (activeSection === "about" ? "text-white bg-[#E57F84]" : "")
                }
              >
                <svg
                  className={
                    "w-5 h-5 " +
                    (activeSection === "about" ? "text-white" : "text-gray-500")
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">About</span>
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={(e) => handleSmoothScroll(e, "portfolio")}
                className={
                  "flex items-center p-2 rounded-lg group " +
                  (activeSection === "portfolio"
                    ? "text-white bg-[#E57F84]"
                    : "")
                }
              >
                <svg
                  className={
                    "w-5 h-5 " +
                    (activeSection === "portfolio"
                      ? "text-white"
                      : "text-gray-500")
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Projects</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className={
                  "flex items-center p-2 rounded-lg group " +
                  (activeSection === "contact" ? "text-white bg-[#E57F84]" : "")
                }
              >
                <svg
                  className={
                    "w-5 h-5 " +
                    (activeSection === "contact"
                      ? "text-white"
                      : "text-gray-500")
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
