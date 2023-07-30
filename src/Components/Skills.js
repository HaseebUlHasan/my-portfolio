import React from "react";
import skills from "./assets/skills.png";
import { Row, Col } from "reactstrap";
import Card from "react-bootstrap/esm/Card";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import angular from  "./assets/angular.png";
import next from  "./assets/next.png";
import material from  "./assets/material.png";
import bootstraf from  "./assets/bootstraf.png";
import window from "./assets/windows.png";
import react from "./assets/react.png";


const Skills = () => {
  return (
    <>
      <Row
        style={{
          backgroundColor: "rgb(245, 101, 57)",
          color: "black",
          width: "100%",
          height: "100%",
          padding: "100px",
        }}
      >
        <h1 style={{ textAlign: "justify" }}> Skills </h1>

        <Col lg="7">
          <h4 style={{ textAlign: "justify", margin: "30px" }}>
            {" "}
            Since beginning my journey as intern Front-End Developer nearly
            about a year ago, I have done remote small projects, and
            collaborated with talented people to create web app for customers. I
            created successful websites that are fast, easy to use, and bulit
            with best practices. The main areas of my expertise is Front -End
            Development, HTML, CSS, JavaScript, Bootstrap, and React JS building small and
            medium web apps.
            <br />
            <br />
            Visit my <a href="https://www.linkedin.com/in/haseeb-ul-hasan-203259164/"> Linkedin </a> profile for more detail:
          </h4>
          <br />
            <br />
        </Col>

        <Col lg="5">
          <img
            src={skills}
            alt="About.png"
            style={{
              width: "100%",
              heigth: "100%",
            }}
          />
        </Col>
      </Row>

      <Row style={{display : "flex" , justifyContent: "space-around" ,backgroundColor: "rgb(245, 101, 57)" , padding: "30px" }}>
        
     
            <Card style={{ width: "8rem" , height: "9rem" }}>
              <Card.Img variant="top" src={html}  />
              <Card.Body>
                <Card.Text>HTML</Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "8rem" , height: "9rem" }}>
              <Card.Img variant="top" src={css}  />
              <Card.Body>
                <Card.Text>CSS</Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "8rem" , height: "9rem" }}>
              <Card.Img variant="top" src={js} />
              <Card.Body>
                <Card.Text>Javascript</Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "8rem" , height: "9rem" }}>
              <Card.Img variant="top" src={react}  />
              <Card.Body>
                <Card.Text>React JS</Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "8rem" , height: "9rem" }}>
              <Card.Img variant="top" src={next}  />
              <Card.Body>
                <Card.Text> NextJS</Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "8rem" , height: "9rem" }}>
              <Card.Img variant="top" src={angular}  style={{width:"100%"}}/>
              <Card.Body>
                <Card.Text> Angular </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "8rem" , height: "9rem" }}>
              <Card.Img variant="top" src={bootstraf}  />
              <Card.Body>
                <Card.Text> Bootstraf </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "8rem" , height: "9rem" }}>
              <Card.Img variant="top" src={material}  />
              <Card.Body>
                <Card.Text> Material </Card.Text>
              </Card.Body>
            </Card>
      </Row>
    </>
  );
};

export default Skills;
