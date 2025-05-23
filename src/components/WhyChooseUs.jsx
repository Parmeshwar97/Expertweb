import React from "react";
import { reasons } from "../data/reasons";
import { FaStar } from "react-icons/fa";
import SectionHeading from "./SectionHeadings";
import Stars from "./Stars";

const WhyChooseUs = () => {
  return (
    <div
      className="flex flex-col w-full gap-28 px-8 py-15 md:py-24 border-y-2 border-[#6B92F9]"
      style={{ fontFamily: "'Segoe UI'" }}
    >
      <div className="align-center justify-center flex flex-col text-center w-full">
        <Stars/>
        <SectionHeading heading={"Why Choose Exeperweb Over Competitions ?"} />
        <div className="grid mt-16  md:grid-cols-[550px_550px] text-black gap-y-8 gap-x-40 justify-center">
          {reasons.map((reason) => (
            <div
              className={`cursor-pointer hover:-translate-y-3 transition-all border-2 rounded-xl justify-center flex flex-col p-4 items-center gap-5 bg-[#F3F4F6]`}
            >
              <div className="text-4xl hover:bg-blue-500 hover:text-white flex justify-center py-3 rounded-full bg-blue-200 text-center w-full text-blue-500">
                {<reason.logo />}
              </div>
              <p className="font-semibold text-lg">{reason.reason}</p>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
