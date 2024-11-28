"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";

function About() {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("freelancing");
  const imageRef: any = useRef(null);

  const handleMouseMove = (e: any) => {
    try {
      if (imageRef && imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setImagePosition({ x: x * 0.01, y: y * 0.01 });
      } else {
        return;
      }
    } catch (error) {}
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const tabs = [
    { id: "freelancing", label: "Freelancing" },
    { id: "boyong-lab", label: "Boyong Lab" },
    { id: "zinger-system", label: "Zinger Systems" },
    { id: "education", label: "Education" },
  ];

  const content: any = {
    freelancing: (
      <div>
        <div className="flex gap-2">
          <h3 className="font-semibold">Freelancing</h3>
          <a
            className="text-blue"
            target="_blank"
            href="https://www.upwork.com/freelancers/~0198f390b8ab3fff21?mp_source=share"
          >
            @Upwork
          </a>
        </div>
        <h4 className="text-[#214151] text-sm font-poppins py-2">
          Dec 2024 - Present
        </h4>
        <ul className="list-disc pl-3 text-gray-600 marker:text-cyan-500">
          <li>
            I have worked on various freelance projects, including web
            development and design. My role often involved collaborating with
            clients to understand their needs and delivering tailored solutions
            that meet their requirements.
          </li>
        </ul>
      </div>
    ),
    "boyong-lab": (
      <div>
        {/* LEAD DEVELOPER */}
        <div className="flex gap-2">
          <h3 className="font-semibold">Lead Developer</h3>
          <a
            className="text-blue"
            target="_blank"
            href="http://www.boyonglab.com/"
          >
            @Boyong Lab
          </a>
        </div>
        <h4 className="text-[#214151] text-sm font-poppins py-2">
          Oct 2023 - May 2024
        </h4>
        <ul className="list-disc pl-3 text-gray-600 marker:text-cyan-500">
          <li>
            At Boyong Lab, I led a dynamic team to build projects through
            collaboration using GitLab and Jira.
          </li>
          <li>
            We utilized web technologies such as Angular, NestJS, and Next.js.
          </li>
        </ul>
        {/* INTERNSHIP */}
        <div className="flex gap-2 mt-2">
          <h3 className="font-semibold">Intern</h3>
          <a
            className="text-blue"
            target="_blank"
            href="http://www.boyonglab.com/"
          >
            @Boyong Lab
          </a>
        </div>
        <h4 className="text-[#214151] text-sm font-poppins py-2">
          Aug - Sept 2023
        </h4>
        <ul className="list-disc pl-3 text-gray-600 marker:text-cyan-500">
          <li>Learned the structure and organization of Boyong Lab.</li>
          <li>
            Developed static websites like{" "}
            <a
              className="text-blue"
              target="_blank"
              href="http://www.boyonglab.training/"
            >
              Boyong Training
            </a>{" "}
            and transitioned to dynamic websites using tools like Laravel and
            React.
          </li>
        </ul>
      </div>
    ),
    "zinger-system": (
      <div>
        {/* INTERNSHIP */}
        <div className="flex gap-2 mt-2">
          <h3 className="font-semibold">Intern</h3>
          <a
            className="text-blue"
            target="_blank"
            href="https://zingersystems.com/"
          >
            @Zinger systems
          </a>
        </div>
        <h4 className="text-[#214151] text-sm font-poppins py-2">
          Aug - Sept 2022
        </h4>
        <ul className="list-disc pl-3 text-gray-600 marker:text-cyan-500">
          <li>Learned the basics of web development.</li>
          <li>
            While working with Zinger System, I created static websites using
            HTML, CSS, Bootstrap, JavaScript, and PHP.
          </li>
        </ul>
      </div>
    ),
    education: (
      <div>
        <div className="flex flex-wrap gap-2 mt-2">
          <h3 className="font-semibold">Student</h3>
          <a className="text-blue" target="_blank" href="https://www.ubuea.cm/">
            @University of Buea
          </a>
          <a
            className="text-blue"
            target="_blank"
            href="https://www.ubuea.cm/index.php/faculties-schools/college-of-technology-cot/"
          >
            @College of Technology
          </a>
        </div>
        <h4 className="text-[#214151] text-sm font-poppins py-2">
          Oct 2021 - June 2024
        </h4>
        <ul className="list-disc pl-3 text-gray-600 marker:text-cyan-500">
          <li>Studied computer engineering as a whole.</li>
          <li>
            Engaged in hands-on projects that enhanced my practical skills in
            programming, software development, and system design.
          </li>
          <li>
            Participated in collaborative projects, fostering teamwork and
            communication skills essential for successful project delivery.
          </li>
        </ul>
      </div>
    ),
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4" id="about">
      {/* TITLE */}
      <div className="text-4xl md:text-5xl text-blue font-bold font-roboto flex items-center gap-8">
        <span className="whitespace-nowrap">About Me</span>
        <div className="w-full bg-blue h-[1px] rounded-xl opacity-70"></div>
      </div>
      <ScrollReveal>
        {/* ABOUT */}
        <div className="flex mt-10 gap-1">
          <div className="relative md:flex hidden justify-center pt-1 w-3/12 overflow-x-hidden">
            <div className="relative overflow-visible border-2 border-blue rounded-sm w-[200px] h-[200px] mt-8">
              <Image
                ref={imageRef}
                src="/images/about.jpg"
                alt="Profile Image"
                width="200"
                height="200"
                className={`rounded-sm shadow-2xl border-2 border-black border-opacity-5 transition-transform duration-300 ease-out -top-2 -left-2 md:top-0 md:left-0`}
                style={{
                  position: "absolute",
                  transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                }}
              />
            </div>
          </div>
          <div className="w-full md:ps-2 lg:ps-4">
            {/* STORY */}
            <h2 className="font-extrabold font-roboto text-[#214151] flex items-center mb-2 gap-2">
              <div className="bg-pink w-4 h-[2px]"></div> MY STORY
            </h2>
            <div className="text-gray-700 text-justify text-md md:text-lg">
              I am a dedicated <b>Full-stack developer</b> based in Cameroon
              with over three years of experience in web and mobile application
              development.
              <span> </span>
              <div className="overflow-hidden md:hidden border-2 border-blue rounded-sm w-[150px] h-[150px] m-2 float-right flex items-center justify-center">
                <Image
                  src="/images/about.jpg"
                  alt="Profile Image"
                  width="170"
                  height="170"
                  className={`rounded-sm shadow-2xl border-2 border-black border-opacity-5 transition-transform duration-300 ease-out`}
                />
              </div>
              As a proud graduate with a degree in Computer Engineering, I have
              honed my skills in various programming languages and frameworks,
              enabling me to build efficient and innovative solutions. <br />
              My expertise spans both front-end and back-end technologies,
              allowing me to create seamless user experiences and robust
              server-side logic. I thrive in collaborative environments and
              enjoy working on diverse projects that challenge my skills and
              creativity.
            </div>
            {/* WORKED */}
            <h2 className="font-extrabold font-roboto text-[#214151] flex items-center gap-2 mb-5 mt-5">
              <div className="bg-pink w-4 h-[2px]"></div> WHERE I'VE WORKED
            </h2>
            <div className="mt-4 flex">
              {/* Tabs for larger screens (vertical layout) */}
              <div className="hidden md:flex flex-col mr-4 border-l-2 border-cyan-300">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`py-2 text-left md:px-4 text-md  ${
                      activeTab === tab.id
                        ? "border-l-4 border-cyan-400  text-blue relative -left-[3px] font-semibold "
                        : "text-gray-600 hover:text-blue"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              {/* Content area */}
              <div className="flex-1 overflow-x-auto">
                <div className="flex md:hidden space-x-4 border-b border-cyan-300 overflow-x-auto overflow-y-visible">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`py-2 px-2 text-sm font-medium  ${
                        activeTab === tab.id
                          ? "border-b-4 border-cyan-400  text-blue font-semibold"
                          : "text-gray-600 hover:text-blue"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <div className="mt-5 md:mt-0 min-h-[200px]">
                  {content[activeTab]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default About;
