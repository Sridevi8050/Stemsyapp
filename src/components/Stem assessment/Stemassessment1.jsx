

import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

function Stemassessment1() {
  return (
    <div>
      <Header />

      {/* Title Bar */}
      <div className="bg-amber-400 h-10 flex justify-center items-center">
        <span className="text-2xl">STEM Assessment</span>
      </div>

      {/* Category Buttons */}
      <div className="shadow-sm flex flex-wrap justify-center gap-4 p-4">
        <button className="rounded-sm px-4 py-2 text-[#3066BE] border border-[#3066BE] hover:bg-[#3066BE] hover:text-white">
          Information-Technology
        </button>
        <button className="rounded-sm px-4 py-2 text-[#3066BE] border border-[#3066BE] hover:bg-[#3066BE] hover:text-white">
          Maths
        </button>
        <button className="rounded-sm px-4 py-2 text-[#3066BE] border border-[#3066BE] hover:bg-[#3066BE] hover:text-white">
          Science
        </button>
        <button className="rounded-sm px-4 py-2 text-[#3066BE] border border-[#3066BE] hover:bg-[#3066BE] hover:text-white">
          Artificial-Intelligence
        </button>
        <button className="rounded-sm px-4 py-2 text-[#3066BE] border border-[#3066BE] hover:bg-[#3066BE] hover:text-white">
          Saved Challenges
        </button>
      </div>

      {/* Main Container */}
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {/* Card 1 */}
        <Link to="/stemassessment2">
          <div className="bg-[#3066BE] text-white p-6 rounded-lg max-w-[600px] w-full">
            <h1 className="text-2xl md:text-3xl">
              <span className="text-[#FFCD5D]">Invent </span>an automated tool
              to grow food indoors
            </h1>
            <h2 className="text-xl mt-4">About Assessment</h2>
            <p className="mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>
          </div>
        </Link>

        {/* Card 2 */}
        <div className="bg-[#29A098] text-white p-6 rounded-lg max-w-[600px] w-full">
          <h1 className="text-2xl md:text-3xl">
            <span className="text-[#FFCD5D]">Invent </span>an automated tool to
            grow food indoors
          </h1>
          <h2 className="text-xl mt-4">About Assessment</h2>
          <p className="mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#309CBE] text-white p-6 rounded-lg max-w-[600px] w-full">
          <h1 className="text-2xl md:text-3xl">
            <span className="text-[#FFCD5D]">Invent </span>an automated tool to
            grow food indoors
          </h1>
          <h2 className="text-xl mt-4">About Assessment</h2>
          <p className="mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#297CA0] text-white p-6 rounded-lg max-w-[600px] w-full">
          <h1 className="text-2xl md:text-3xl">
            <span className="text-[#FFCD5D]">Invent </span>an automated tool to
            grow food indoors
          </h1>
          <h2 className="text-xl mt-4">About Assessment</h2>
          <p className="mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stemassessment1;
