import React from "react";

function Portfolio() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 pt-8">
      {/* TITLE */}
      <div className="text-4xl md:text-5xl text-blue font-bold font-roboto flex items-center gap-8">
        <span className="whitespace-nowrap">Portfolio</span>
        <div className="w-full bg-blue h-[1px] rounded-xl opacity-70"></div>
      </div>
    </div>
  );
}

export default Portfolio;
