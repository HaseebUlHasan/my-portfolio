import React from "react";
import { Row, Col } from "reactstrap";
import about from "./assets/about.png";

const About = () => {
  return (
    <>
      <Row
        style={{
          backgroundColor: "rgb(245, 101, 57)",
          color: "black",
          padding: "100px",
        }}
      >
        <h1 style={{ textAlign: "justify" }}> About </h1>

        <Col lg="7">
          <h4 style={{ textAlign: "justify", margin: "30px" }}>
            {" "}
            <h1 style={{ textAlign: "justify" }}> Who I Am</h1>I am a Front-End
            Developer. I have a passion for developing innovative programs that
            expedite the efficiency and effectiveness of organization success.
            Well-versed in technology and writing code to create systems that
            are reliable and user friendly.Well organized person, problem
            solver, empolyee with high atenton to detail. Strong Communication
            skills and the ability to listen carefully to user feedback to
            determine modification for optimal user-function.
          </h4>
        </Col>

        <Col lg="5">
          <img
            src={about}
            alt="About.png"
            style={{
              width: "100%",
              heigth: "100%",
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default About;
