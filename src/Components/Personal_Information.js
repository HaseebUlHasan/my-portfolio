import React from "react";
import haseeb from "./assets/Haseeb1.png";
import { Row, Col } from "reactstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import cv from "./HaseebulHasan Cv.pdf";
import coverletter from "./HaseebulHasan CoverLetter.pdf";
import { Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";

const Personal_Information = () => {
  return (
    <>
      <Row style={{ backgroundColor: "hsl(0, 0%, 90%)", padding: "50px" }}>
        <Col lg="3"></Col>
        <Col md="6">
          <img
            src={haseeb}
            alt="Haseeb"
            style={{
              width: "25%",
              heigth: "25%",
              borderRadius: "40%",
              margin: "50px",
            }}
          />
          <div style={{ textAlign: "center" }}>
            <h3> Hey, </h3>
            {/* <h1> I`m Haseeb Ul Hasan</h1> */}
            {/* <h3> Web Developer / Software Engineer</h3> */}
            <h1 style={{color:""}}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("I`m Haseeb Ul Hasan")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("I`m a Front-end Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("I`m a UI Designer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("I`m a Software Engineer")
                    .start();
                }}
              />
            </h1>
            <div style={{ margin: "30px" }}>
              <Button
                style={{
                  border: "2px solid rgb(245, 101, 57)",
                  borderRadius: "30px",
                  backgroundColor: "rgb(245, 101, 57",
                  marginRight: "20px",
                }}
              >
                <a
                  href={cv}
                  download={cv}
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    color: "#000",
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  Download Resume
                </a>
              </Button>
              <Button
                style={{
                  border: "2px solid rgb(245, 101, 57)",
                  borderRadius: "30px",
                  backgroundColor: "rgb(245, 101, 57",
                  marginRight: "20px",
                }}
              >
                <a
                  href={coverletter}
                  download={coverletter}
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    color: "#000",
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  Download Cover Letter
                </a>
              </Button>
              <Button
                style={{
                  border: "2px solid rgb(245, 101, 57)",
                  borderRadius: "30px",
                  backgroundColor: "rgb(245, 101, 57",
                  marginRight: "20px",
                }}
              >
                <a
                  href="#contact"
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    textDecoration: "none",
                    color: "#000",
                  }}
                >
                  {" "}
                  Contact me
                </a>
              </Button>
            </div>
          </div>
          <div>
            <a
              href="https://github.com/HaseebUlHasan"
              style={{
                textDecoration: "none",
                color: "black",
                marginRight: "2px",
              }}
            >
              {" "}
              <GitHubIcon fontSize="large" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/haseeb-ul-hasan-203259164/"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "2px",
              }}
            >
              {" "}
              <LinkedInIcon fontSize="large" />{" "}
            </a>

            <a
              href="https://web.facebook.com/huhassan88/"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "2px",
              }}
            >
              {" "}
              <FacebookIcon fontSize="large" />{" "}
            </a>

            <a
              href="https://www.instagram.com/imhaseebulhasan/"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "2px",
              }}
            >
              {" "}
              <InstagramIcon fontSize="large" />{" "}
            </a>
          </div>
        </Col>
        <Col lg="3"></Col>
      </Row>
    </>
  );
};

export default Personal_Information;
