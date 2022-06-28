import React from 'react';
import haseeb from "./assets/Haseeb1.png";
import { Row, Col } from "reactstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import cv from "./Haseeb ul hasan Cv.pdf";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
    <Row>
        <Col lg = "4"  style={{ backgroundColor: "rgb(245, 101, 57)" }}>
        <div>
              <img
                src={haseeb}
                alt="Haseeb"
                style={{
                  width: "55%",
                  heigth: "55%",
                  borderRadius: "40%",
                  margin: "100px",
                }}
              />
            </div>

            <>
              <a href="" style={{ textDecoration: "none", color: "white" , marginRight : "2px" }}>
                {" "}
                <GitHubIcon  fontSize="large"/>{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/haseeb-ul-hasan-203259164/"
                style={{ textDecoration: "none", color: "white" , marginLeft : "2px" }}
              >
                {" "}
                <LinkedInIcon  fontSize="large"/>{" "}
              </a>

              <a
                href="https://www.linkedin.com/in/haseeb-ul-hasan-203259164/"
                style={{ textDecoration: "none", color: "white" , marginLeft : "2px" }}
              >
                {" "}
                <FacebookIcon  fontSize="large"/>{" "}
              </a>
              
              <a
                href="https://www.linkedin.com/in/haseeb-ul-hasan-203259164/"
                style={{ textDecoration: "none", color: "white" , marginLeft : "2px" }}
              >
                {" "}
                <InstagramIcon  fontSize="large"/>{" "}
              </a>
              
            </>
        </Col>
        <Col lg = "8"   style={{ backgroundColor: "hsl(0, 0%, 90%)", color: "black" , padding: "30px"}}>

        </Col>
    </Row>

    </>
  )
}

export default Home