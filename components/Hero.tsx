import React from "react";

function Hero() {
  return (
    <div className="flex md:min-h-[100vh] max-h-[1000px] items-center mx-auto max-w-screen-xl px-4 text-center md:text-left">
      <div className="w-full md:w-2/3">
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
        <div className="text-4xl md:text-7xl font-roboto text-[#223d4a] font-semibold">
          I'm Percy,
        </div>
        <div className="text-4xl md:text-5xl lg:text-7xl font-roboto mt-2 text-[#122e3c] font-bold">
          Fullstack Developer.
        </div>
        <p className="mt-4 text-lg md:text-xl text-gray-700 md:border-s-2 md:ps-2 lg:ps-4 py-1 border-pink rounded-l-md">
          I design and develop experiences that make people's lives simpler
          through web and mobile apps. I work with HTML, CSS, JavaScript, React,
          Angular, React Native, Flutter, Nest.js and Next.js.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 md:ms-5 mt-3">
          {/* LinkedIn Link */}
          <a
            href="www.linkedin.com/in/tanyitiku-arrey-652574270"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-blue-600"
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
            className="flex items-center text-gray-700 hover:text-blue-600"
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
        </div>
      </div>
    </div>
  );
}

export default Hero;
