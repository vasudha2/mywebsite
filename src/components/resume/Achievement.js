import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019-present</p>
          <h2 className="text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-14 w-full h-[1400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Salesforce"
            subTitle="Salesforce Develper Virtual Internship"
            result="Success"
            des="It is a 3 months training certification where I learnt Salesforce fundamentals, Organization Setup, Relationship
            and Process Automation, Types of Flows and Security, Apex , Testing and Debugging, Vs code Setup & CLI Setup
            and Lightining Web Components (LWC) & API"
          />
            <ResumeCard
            title="CyberSecurity"
            subTitle="AICTE-N.E.A.T-EduSkills"
            result="Success"
            des="A 10 week Internship where the path moves from Introduction to fundamentals of cloud and CyberSecurity
            along with many examples."
          />
            <ResumeCard
            title="Coursera"
            subTitle="Python"
            result="Success"
            des="I have completed a Python basics, fundamentals, files, dictionaries, and object-oriented 
            programming (OOPS) course offered by the University of Michigan on Coursera.The curriculum 
            provided a comprehensive understanding of Python from basics to 
            advanced concepts, laying a solid foundation for practical application"
          />
          <ResumeCard
            title="OpenWeaver"
            subTitle="Introduction to javascript"
            result="Success"
            des=" This includes understanding fundamental concepts such as variables, data types, control flow, 
            and functions. Additionally, I have gained knowledge in working with the Document Object Model (DOM) 
            and utilizing modern JavaScript features like arrow functions and template literals. "
          />
          <ResumeCard
            title="Coursera"
            subTitle="Chatbot using chatfuel"
            result="Success"
            des="Creating a lead generation Messenger chatbot using Chatfuel involves several steps. 
            It is a popular chatbot-building platform that integrates with Facebook Messenger."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">  </p>
          <h2 className="text-4xl font-bold">  </h2>
        </div>
        <div className="mt-14 w-full h-[1400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Machine Learning"
            subTitle="Simplilearn"
            result="Success"
            des="It is a Course where I learnt from very basics like Introduction of Machine Learning,Types of ML,
            ML pipeline and MLOP's, Packages used, Supervised Learning, Unsupervised Learning and it's applications, 
            Detecting and Preventing Overfitting and Underfitting along with Regression and Classification Examples."
          />
          
          <ResumeCard
            title="Azure Fundamenals"
            subTitle="Microsoft-Certified"
            result="Success"
            des="
            Azure Fundamentals refers to the basic understanding of Microsoft Azure, 
            the cloud computing platform. Azure offers a wide range of cloud services, 
            including computing power, storage, databases, machine learning, networking, and more. "
          />
          <ResumeCard
            title="Coursera"
            subTitle="Database and SQL"
            result="Success"
            des="I have acquired knowledge in SQL (Structured Query Language) and database management. 
            The coursework included understanding SQL syntax, database design principles, and practical 
            skills in uerying databases. This training has equipped me with the ability to 
            work with relational databases, write SQL queries, and database concepts for effective 
            data manipulation and retrieval."
          />
          <ResumeCard
            title="Infysys SpringBoard"
            subTitle="Networking, html,css"
            result="Success"
            des="This combination of networking, HTML, and CSS knowledge provides a 
            solid foundation for developing and designing web applications, 
            ensuring effective communication between clients and servers ."
          />
          <ResumeCard
            title="Plasmid"
            subTitle="Machine Learning"
            result="Ongoing"
            des="Just Learning from Datascience"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;