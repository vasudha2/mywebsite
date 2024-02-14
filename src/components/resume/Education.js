import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016-2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Details</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Engineering-Computer Science & Engineering"
            subTitle="Vasireddy Venkatadri Institue of Technology(2019-2023)"
            result="8.79/10"
            des="I graduated from VVIT, honing my CSE skills over four years, 
            acquiring diverse competencies crucial for my career growth."/>
          <ResumeCard
            title="Intermediate-MPC"
            subTitle="Vignan Girls Junior College(2017-2019)"
            result="9.84/10"
            des="I completed my intermediate education with a focus on MPC (Mathematics, Physics, and Chemistry) 
            subjects, gaining a solid foundation for my academic journey and future pursuits."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Modern High School(2016-2017)"
            result="9.7/10"
            des="In my 10th class, I not only excelled academically but also developed valuable skills 
            such as time management, problem-solving, and effective communication, which further enhanced my 
            teamwork and leadership abilities."
          />
        </div>
      </div>

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Virtusa-Internship"
            subTitle="Full Stack (April 2023-July 2023)"
            result="Chennai"
            des="Created a online shopping experience at our Nameboard Gift Shop. 
            Customer can Browse and purchase personalized nameboards effortlessly, 
            while our admin ensures order management with the ability to delete and maintain orders 
            directly on the website."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;