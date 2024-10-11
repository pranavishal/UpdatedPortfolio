import React from "react";
import EducationCard from "./EducationCard";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className="w-full flex flex-col lgl:flex-row lgl:gap-20"
    >
      {/* part 1 */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            The University of Waterloo
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[333px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <EducationCard
            title="Bachelors of Computer Science"
            subTitle="Specialization in Machine Learning"
            result="3.00/4"
            des="Relevant Coursework: Designing Functional Programs, Elementary Algorithm Design and Data Abstraction, Object-Oriented Software Development (C++), Linear Algebra, Probability, Statistics"
          />
        </div>
      </div>
      {/* part 2 */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Wilfrid Laurier University
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[333px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <EducationCard
            title="Bachelors of Business Administration"
            subTitle="Specialization in Finance"
            result="3.00/4"
            des="Relevant Coursework: Financial Accounting, Managerial Accounting, Financial Management I&II, Organizational Behaviour I&II, Business Law, Human Resources Management, Introduction to Marketing Management"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
