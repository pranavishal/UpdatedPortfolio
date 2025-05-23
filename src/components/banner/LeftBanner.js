import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer.",
      "Machine Learning Engineer.",
      "Graphics Programmer.",
      "Game Developer.",
      "Student.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">Welcome to my portfolio!</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Pranav Vishal</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p>
          I'm a 4th year Computer Science student at UWaterloo. Through multiple
          internships in Canada and the US, I've developed interest and
          experience in: distributed systems, machine learning, full-stack
          development, and real-time data processing. I've built APIs and event
          processing systems, implemented ML models for customer behavior
          prediction, and currently focus on optimizing large-scale data
          systems.
        </p>
      </div>
      <div className="flex flex-col lgl:flex-row gap-6 lgl:ap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            FIND ME ON
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/pranav-vishal/"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/pranavishal"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LeftBanner;
