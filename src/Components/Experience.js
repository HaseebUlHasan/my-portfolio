import React from "react";
import { Row, Col } from "reactstrap";
import { Card } from "react-bootstrap";
import WorkIcon from '@mui/icons-material/Work';
import experience  from "./assets/experience.png";

const Experience = () => {
  return (
    <>
      <Row
        style={{
          backgroundColor: "hsl(0, 0%, 90%)",
          color: "black",
          padding: "100px",
        }}
      >
        <h1 style={{ textAlign: "justify", color: "rgb(245, 101, 57)" }}>
          {" "}
          Experience{" "}
        </h1>

        <Col lg="4">
          <img
            src={experience}
            alt="Experience.png"
            style={{
              width: "55%",
              heigth: "55%",
              margin : "20px"
            }}
          />
        </Col>

        <Col lg="8">
          <Card style={{ textAlign: "justify", backgroundColor: "#f565394d" }}>
            <Card.Body>
              <Card.Title>
                {" "}
                <WorkIcon fontSize="large" /> Front End Developer{" "}
              </Card.Title>
              <Card.Text>
                <h3> Cloudtek, Islamabad</h3>
              </Card.Text>
              <Card.Title> Nov 2021- June 2022</Card.Title>
            </Card.Body>
          </Card>
          <br />
          <Card style={{ textAlign: "justify", backgroundColor: "#f565394d" }}>
            <Card.Body>
              <Card.Title>
                {" "}
                <WorkIcon  fontSize="large"/> Front End Intern{" "}
              </Card.Title>
              <Card.Text>
                <h3> Asimplify, Islamabad</h3>
              </Card.Text>
              <Card.Title> Aug 2021 - Oct 2021</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      
    </>
  );
};

export default Experience;
