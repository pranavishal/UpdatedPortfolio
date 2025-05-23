import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({ title, des, src, lnkG, lnkD, display, half }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-[#1a1d20] group hover:bg-gray-900 transition-colors duration-500">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer object-cover"
          src={src}
          alt="Project"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            {display && (
              <div className="flex gap-2">
                <a
                  href={lnkG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                >
                  <BsGithub />
                </a>

                <a
                  href={lnkD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                >
                  <FaGlobe />
                </a>
              </div>
            )}
            {half && (
              <a
                href={lnkG}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
              >
                <BsGithub />
              </a>
            )}
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
