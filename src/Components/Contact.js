import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Form, Button, Card } from "react-bootstrap";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import TwitterIcon from "@mui/icons-material/Twitter";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  // const notify = () => toast("Message has been sent");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = [{ name: name, email: email, password: password }];
    setData([...data]);

    setName(" ");
    setEmail(" ");
    setPassword(" ");
  };

  return (
    <>
      <Row
        style={{
          backgroundColor: "hsl(0, 0%, 90%)",
          color: "black",
          padding: "100px",
        }}
      >
        <h1 style={{ textAlign: "justify" }}> Contact </h1>
        <Col lg="5" className="m-5">
          <Card style={{ textAlign: "justify", backgroundColor: "#f565394d" }}>
            <Card.Body>
              <Form
                style={{ textAlign: "justify", margin: "40px" }}
                onSubmit={handleSubmit}
              >
                <Form.Group className="mb-3">
                  <Form.Label> Name </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type a message"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    border: "2px solid rgb(245, 101, 57)",
                    borderRadius: "30px",
                    backgroundColor: "rgb(245, 101, 57",
                    marginRight: "20px",
                  }}
                  // onClick={notify}
                >
                  Send <SendIcon />
                </Button>
              </Form>
              {/* <ToastContainer /> */}
            </Card.Body>
          </Card>
        </Col>
        <Col lg="5" className="m-5">
          <Card style={{ textAlign: "justify", backgroundColor: "#f565394d" }}>
            <Card.Body>
              <div style={{ margin: "30px" }}>
                <h4>
                  {" "}
                  <CallIcon fontSize="large" /> +92 3405216721{" "}
                </h4>{" "}
                <br />
                <h4>
                  {" "}
                  <EmailIcon fontSize="large" /> huhassan88@gmail.com
                </h4>
                <br />
                <h4>
                  <HomeIcon fontSize="large" /> Swabi, KPK Pakistan{" "}
                </h4>
              </div>
              <div
                style={{
                  margin: "60px",
                  marginRight: "100px",
                  textAlign: "center",
                }}
              >
                <a
                  href="https://github.com/HaseebUlHasan"
                  style={{
                    textDecoration: "none",
                    marginRight: "2px",
                    color: "#000",
                  }}
                >
                  {" "}
                  <GitHubIcon fontSize="large" />{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/haseeb-ul-hasan-203259164/"
                  style={{
                    textDecoration: "none",
                    marginLeft: "2px",
                    color: "#000",
                  }}
                >
                  {" "}
                  <LinkedInIcon fontSize="large" />{" "}
                </a>

                <a
                  href="https://web.facebook.com/huhassan88/"
                  style={{
                    textDecoration: "none",
                    marginLeft: "2px",
                    color: "#000",
                  }}
                >
                  {" "}
                  <FacebookIcon fontSize="large" />{" "}
                </a>

                <a
                  href="https://www.instagram.com/imhaseebulhasan/"
                  style={{
                    textDecoration: "none",
                    marginLeft: "2px",
                    color: "#000",
                  }}
                >
                  {" "}
                  <InstagramIcon fontSize="large" />{" "}
                </a>

                <a
                  href="https://twitter.com/huhassan8/"
                  style={{
                    textDecoration: "none",
                    marginLeft: "2px",
                    color: "#000",
                  }}
                >
                  <TwitterIcon fontSize="large" />
                </a>


              </div>
              <br />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
