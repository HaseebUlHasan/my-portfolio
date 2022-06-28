import React from "react";
import Personal_Information from "./Personal_Information";
import About from "./About";
import { Row } from "reactstrap";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";

const Config = () => {
  return (
    <>
     

      <Row>
        <Navbar/>
      </Row>

      <Row id="personal">
        <Personal_Information />
      </Row>
      

      <Row id="about">
        <About />
      </Row>

      <Row id="education">
        <Education />
      </Row>

      <Row id="skills">
        <Skills />
      </Row>

      <Row id="experience">
        <Experience />
      </Row>

      <Row id="project">
        <Projects />
      </Row>

      <Row id="contact">
        <Contact />
      </Row>

     
    </>
  );
};

export default Config;
