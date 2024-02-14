import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023</p>
          <h2 className="text-4xl font-bold">Volunteer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="IUCEE_EWB_Vasireddy Venktadri Institute of Technology"
            subTitle="Teaching Coding Cause:Education"
            result="Nambur"
            des="As a member of EWB(Engineering Without Borders) we taken a project GWCC(Girls who can code) as a part of our project
            we chosen some Government Schools near our College and our VVIT college provided some computer infrastructure to
            that School. We the students teaches the computer classes to that children who don't know what computer is."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Volunteer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Student_Council_Vasireddy Venkatadri Institute of Technology"
            subTitle="Public Relation Council"
            result="Nambur"
            des="I worked in Student Activity Council. In Student Activity Council I worked under Public Relations Council
            a branch of Student Activity Council. It is a team work we provided hospitality to the people who came to our college. We arranged
            required facilities for them. All the social media, print media was controlled by us."
          />

        </div>
      </div>
    </motion.div>
  );
};

export default Experience;