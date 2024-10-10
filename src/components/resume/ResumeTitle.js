import React from "react";
import { ron } from "../../assets/index";

const ResumeTitle = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">
        <a
          href={ron}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline hover:no-underline"
        >
          {des}
        </a>
      </h1>
    </div>
  );
};

export default ResumeTitle;
