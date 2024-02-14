import React from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import {FaLinkedinIn,FaReact,FaEnvelope,FaInstagram,FaBrain} from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si';


const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Full Stack Developer.", "Machine Learning Engineer.", "Programmer.", ],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    })
    const openLinkedIn = () => {
      window.open('https://github.com/vasudha2', '_blank');
    };
  
    const openGmail = () => {
      window.location.href = 'mailto:yendavasudha@gmail.com';
    };
  
    const showFeedbackAlert = () => {
      window.alert('You can give feedback below');
    };
  return (
    <div className='w-1/2 flex flex-col gap-20'>
    <div className='flex  flex-col gap-5'>
        <h4 className='text-lg font-normal'>MY PORTFOLIO</h4>
        <h1 className='text-6xl font-bold text-white'>
            Hi, I'm{" "}
            <span className='text-designColor capitalize'>Vasudha</span>
        </h1>
        <h2 className='text-4xl font-bold text-white'>a <span>{text}</span>
        <Cursor
        cursorBlinking='false'
        cursorStyle='|'
        cursorColor='#FF014f'/></h2>
        <p className='text-base  font-bodyFont leading-6 tracking-wide'>
        I am an enthusiastic learner with a passion for diving into the worlds of both full-stack development
        and machine learning, eager to explore and master these captivating fields.
        </p>
    </div>
    <div className=' flex justify-between'>
        <div>
       <h2 className='text-base uppercase font-titleFont mb-4'>Connect me in
       </h2>
        <div className='flex gap-4'>
          <span className='bannerIcon' onClick={openLinkedIn} >
            <FaLinkedinIn/>
           </span>
          <span className='bannerIcon' onClick={openGmail}>
            <FaEnvelope/>
          </span>
          <span className='bannerIcon'  onClick={showFeedbackAlert}>
            <FaInstagram/>
          </span>
          </div>
        </div>
        <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>Skilled in</h2>
            <div className='flex gap-4'>
            <span className='bannerIcon'>
            <  SiTailwindcss/>
            </span>
            <span className='bannerIcon'>
              <FaReact/>
            </span>
            <span className='bannerIcon'>
              <FaBrain/>
            </span>
        </div>

    </div>
</div>
</div>
  )
}

export default LeftBanner