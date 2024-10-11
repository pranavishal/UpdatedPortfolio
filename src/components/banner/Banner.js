import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      {/* <div className="w-1/2 flex flex-col gap-20">
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
            I'm a 3rd year Computer Science student at UWaterloo. Through
            multiple internships in Canada and the US, I've developed interest
            and experience in: distributed systems, machine learning, full-stack
            development, and real-time data processing. I've built APIs and
            event processing systems, implemented ML models for customer
            behavior prediction, and currently focus on optimizing large-scale
            data systems.
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              FIND ME ON
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </div>
          </div>
          <div></div>
        </div>
      </div> */}
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
