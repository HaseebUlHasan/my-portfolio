import React from 'react';
import { Nav } from "react-bootstrap";
import { Row, Col } from "reactstrap";


const Navbar = () => {
  return (
    <>
    <Row style={{ backgroundColor: "rgb(245, 101, 57)", color: "white" }}>
        <Col
          lg="4"
        >
          <h3
            style={{
              fontFamily: "Brush Script MT",
            }}
          >
            Haseeb Ul Hasan
          </h3>
        </Col>

        <Col lg="3"></Col>
        <Col
          lg="5"
          // style={{ backgroundColor: "hsl(0, 0%, 90%)", color: "black" }}
        >
          <Nav defaultActiveKey="#personal">
            <Nav.Item>
              <Nav.Link href="#personal" style={{ color: "black" }}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#about" style={{ color: "black" }}>
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#education" style={{ color: "black" }}>
                Education
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#skills" style={{ color: "black" }}>
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#experience" style={{ color: "black" }}>
                Experience
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#project" style={{ color: "black" }}>
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#contact" style={{ color: "black" }}>
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </>

  )
}

export default Navbar