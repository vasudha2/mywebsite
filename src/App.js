import React from "react";
import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar/>
        <Background/>
        <Features/>
        <Projects/>
        <Resume/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
