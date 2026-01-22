import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
    >
      <div className="py-6 lgl:py-12 font-titleFont text-center">
        <p className="text-sm text-designColor tracking-[4px]">
          What I've Done
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">My Experiences</h2>
      </div>

      {/* Changed from two columns to one centered column */}
      <div className="w-full flex justify-center">
        <div className="mt-6 lgl:mt-14 w-full max-w-4xl border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 px-4">
          <ResumeCard
            title="Software Engineering Intern"
            subTitle="Xtillion"
            result="San Juan, PR, US"
            des="September 2025 - December 2025"
          />
          <ResumeCard
            title="Software Engineering Intern"
            subTitle="ether.fi"
            result="Toronto, ON, CAN"
            des="May 2025 - August 2025"
          />
          <ResumeCard
            title="Machine Learning Engineer"
            subTitle="WAT.ai"
            result="Waterloo, ON, CAN"
            des="January 2025 - April 2025"
          />
          <ResumeCard
            title="Software Engineering Intern"
            subTitle="Lincoln Electric"
            result="Cleveland, OH, US"
            des="September 2024 - December 2024"
          />
          <ResumeCard
            title="Technical Lead"
            subTitle="UW Blueprint"
            result="Waterloo, ON, CAN"
            des="January 2024 - April 2024"
          />
          <ResumeCard
            title="Software Development Coop"
            subTitle="ATS Automation"
            result="Cambridge, ON, CAN"
            des="January 2023 - April 2023"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
