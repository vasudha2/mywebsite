import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { contactImg } from '../../assets/index';

const Contact = () => {
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/vasudha-yenda-978727192', '_blank');
  };

  const openGithub = () => {
    window.open('https://github.com/vasudha2', '_blank');
  };

  const openGmail = () => {
    window.location.href = 'mailto:yendavasudha@gmail.com';
  };


  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black items-center justify-center">
      <div className="flex justify-center items-center text-center" style={{ fontSize: "300%", fontWeight: "bold", color: "white" }}>
        Feedback Form
      </div>

      <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
        <img className="w-full h-64 object-cover rounded-lg mb-2" src={contactImg} alt="contactImg" />
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold text-white">Yenda Vasudha</h3>
          <p className="text-lg font-normal text-gray-400">Developer</p>
          <p className="text-base text-gray-400 tracking-wide">
            Thank you for your time. You can contact me, or you can give me feedback.
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Phone: <span className="text-lightText">+91 9848697074</span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Email: <span className="text-lightText">yendavasudha@gmail.com</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-base uppercase font-titleFont mb-4">Give Feedback through</h2>
          <div className="flex gap-4">
            <span className="bannerIcon" onClick={openGmail}>
              <FaEnvelope />
            </span>
            <span className="bannerIcon" onClick={openLinkedIn}>
              <FaLinkedinIn />
            </span>
            <span className="bannerIcon" onClick={openGithub}>
              <FaGithub />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
