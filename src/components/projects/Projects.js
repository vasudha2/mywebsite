import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFive, projectFour, projectSix } from "../../assets/index";
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="My portfolio You can give feedback"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="NameBoardGiftShop"
          des="It's an online platform for custom nameboards and gifts where customers can order, 
          pay, and provide feedback. Admins manage orders, edit products, and enforce strict 
          email-based user validation to ensure one account per email.  "
          src={projectTwo}
        />
        <ProjectCard
          title="Notes taking website"
          des="A free note-taking website allowing users to create accounts for editing notes, 
          incorporating videos, YouTube links, photos, and customizable styles."
          src={projectFive}
        />
        <ProjectCard
          title="Emojify"
          des=" A Java Swing project for emotion selection, connecting users to relevant YouTube videos and 
          offering inspirational quotes, streamlining search and providing a mini-project experience."
          src={projectOne}
        />
        <ProjectCard
          title="Emotion Detection"
          des=" A machine learning project detecting user emotions for feedback systems, facilitating 
          insights from users who may not explicitly provide feedback by analyzing their emotions 
          during interactions."
          src={projectThree}
        />
        <ProjectCard
          title="E-Wishes"
          des=" A JavaScript and PHP-based website offering personalized electronic wishes for 
          occasions like birthdays, anniversaries, and condolences. Users can create custom cards 
          with an interactive confetti effect after login."
          src={projectFour}
        />
        <ProjectCard
          title="Portfolio Website"
          des="A digital portfolio showcasing my work, skills, and achievements, providing a comprehensive 
          overview of my professional and creative journey."
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects