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
      <div className="w-full flex flex-col lgl:flex-row gap-20">
        <div>
          {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            The University of Waterloo
          </h2>
        </div> */}
          <div className="mt-6 lgl:mt-14 xl:w-[600px] xl:h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Software Engineering Intern"
              subTitle="Lincoln Electric"
              result="Cleveland, US"
              des="September 2024 - December 2024"
            />
            <ResumeCard
              title="Software Engineering Intern"
              subTitle="Partho Technologies"
              result="Mississauga, CAN"
              des="May 2024 - August 2024"
            />
            <ResumeCard
              title="Software Development Coop"
              subTitle="ATS Automation"
              result="Cambridge, CAN"
              des="January 2023 - April 2023"
            />
          </div>
        </div>
        <div>
          {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Wilfrid Laurier University
          </h2>
        </div> */}
          <div className="mt-6 lgl:mt-14 xl:w-[600px] xl:h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Machine Learning Engineer"
              subTitle="WAT.ai"
              result="Waterloo, CAN"
              des="September 2024 - December 2024"
            />
            <ResumeCard
              title="Technical Lead"
              subTitle="UW Blueprint"
              result="Waterloo, CAN"
              des="January 2024 - April 2024"
            />
            <ResumeCard
              title="Game Developer"
              subTitle="Panama Ink"
              result="Waterloo, Ontario"
              des="May 2022 - August 2022"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
