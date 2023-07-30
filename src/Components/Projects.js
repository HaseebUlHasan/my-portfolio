import React, { useState } from "react";
import { Row , Col } from "reactstrap";
import { Carousel, Modal, Button, Card } from "react-bootstrap";
import SingleDice from "./assets/Dice Game/Dice Single Player.JPG";
import DOubleDice from "./assets/Dice Game/Dice Two Player.JPG";
import dice from "./assets/Dice Game/dice.png";
import tictoctoe from "./assets/tictoctoe/tictoctoe.png";
import netflix from "./assets/netflixclone/netflix.jfif";
import book from "./assets/outlastBook/book.png";
import olx from "./assets/olxClone/olx.webp";
import netflix1 from "./assets/netflixclone/netflix1.JPG";
import netflix2 from "./assets/netflixclone/netflix2.JPG";
import netflix3 from "./assets/netflixclone/netflix3.JPG";   
import netflix4 from "./assets/netflixclone/netflix4.JPG";
import netflix5 from "./assets/netflixclone/netflix5.JPG";
import book1 from "./assets/outlastBook/book1.JPG";
import book2 from "./assets/outlastBook/book2.JPG";
import book3 from "./assets/outlastBook/book3.JPG";
import tic1 from "./assets/tictoctoe/tic1.JPG";
import tic2 from "./assets/tictoctoe/tic2.JPG";
import tic3 from "./assets/tictoctoe/tic3.JPG";
import khareedbaij1 from "./assets/olxClone/khareedbaij1.JPG";
import khareedbaij2 from "./assets/olxClone/khareedbaij2.JPG";
import khareedbaij3 from "./assets/olxClone/khareedbaij3.JPG";
import khareedbaij4 from "./assets/olxClone/khareedbaij4.JPG";
import json from "./assets/json/json.png";
import json1 from "./assets/json/json1.JPG";
import json2 from "./assets/json/json2.JPG";



const Projects = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);


  return (
    <>
      <Row
        style={{
          backgroundColor: "rgb(245, 101, 57)",
              padding: "100px",
        }}
      >
        <h1 style={{ textAlign: "justify" }}> Project </h1>

       <Row style = {{display: "flex" , justifyContent: "space-around" , margin: "50px" }}>
     
          <Card style={{width : "12rem" , height : "10rem"  }}>
            <Card.Img variant="top" src={dice} onClick={() => setShow(true)} />
            <Card.Body>
              <Card.Title style = {{color : "black"}}>Dice Game</Card.Title>
            </Card.Body>
          </Card>

          <Modal show={show} onHide={() => setShow(false)} size="lg">
            <Modal.Body>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={SingleDice}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={DOubleDice}
                  />
                </Carousel.Item>
              </Carousel>
            </Modal.Body>
            <Modal.Footer>
            <a href = "https://playing-dice.netlify.app/">
             <Button variant="primary">
                View Demo
              </Button>
             </a>
              <a href = "https://github.com/HaseebUlHasan/Dice-Game-Single-and-Double-Players-React-Hooks">
                <Button variant="primary">
                Source Code
              </Button>
              </a>
              
                <Button variant="secondary" onClick={() => setShow(false)}>
                  Close
                </Button>{" "}
            
            </Modal.Footer>
          </Modal>
        
          <Card style={{width : "12rem" , height : "10rem"}}>
            <Card.Img variant="top" src={tictoctoe} onClick={() => setShow2(true)} />
            <Card.Body>
              <Card.Title style = {{color : "black"}}>Tic-Toc-Toe </Card.Title>
            </Card.Body>
          </Card>

          <Modal show={show2} onHide={() => setShow2(false)} size="lg">
            <Modal.Body>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={tic1}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={tic2}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={tic3}
                  />
                </Carousel.Item>
              </Carousel>
            </Modal.Body>
            <Modal.Footer>
            <a href = "https://tictoctoe-game.netlify.app/">
             <Button variant="primary">
                View Demo
              </Button>
             </a>
              <a href = "https://github.com/HaseebUlHasan/Tic-Toc-Toe-computer-vs-Player-React">
                <Button variant="primary">
                Source Code
              </Button>
              </a>
              <a href="">
                {" "}
                <Button variant="secondary" onClick={() => setShow2(false)}>
                  Close
                </Button>{" "}
              </a>
            </Modal.Footer>
          </Modal>
      
          <Card style={{width : "12rem" , height : "10rem"}}>
            <Card.Img variant="top" src={netflix} onClick={() => setShow3(true)} />
            <Card.Body>
              <Card.Title style = {{color : "black"}}>Netflix Clone</Card.Title>
            </Card.Body>
          </Card>

          <Modal show={show3} onHide={() => setShow3(false)} size="lg">
            <Modal.Body>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={netflix1}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={netflix2}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={netflix3}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={netflix4}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={netflix5}
                  />
                </Carousel.Item>
              </Carousel>
            </Modal.Body>
            <Modal.Footer>
            <a href = "https://netflix-my-movie-clone.netlify.app/">
             <Button variant="primary">
                View Demo
              </Button>
             </a>
              <a href = "https://github.com/HaseebUlHasan/netflix-Clone-React">
                <Button variant="primary">
                Source Code
              </Button>
              </a>
              <a href="">
                {" "}
                <Button variant="secondary" onClick={() => setShow3(false)}>
                  Close
                </Button>{" "}
              </a>
            </Modal.Footer>
          </Modal>
        
          <Card style={{width : "12rem" , height : "10rem"}}>
            <Card.Img variant="top" src={book} onClick={() => setShow4(true)} />
            <Card.Body>
              <Card.Title style = {{color : "black"}}>Outlast Book </Card.Title>
            </Card.Body>
          </Card>

          <Modal show={show4} onHide={() => setShow4(false)} size="lg">
            <Modal.Body>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={book1}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={book2}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={book3}
                  />
                </Carousel.Item>
              </Carousel>
            </Modal.Body>
            <Modal.Footer>
            <a href = "https://outlast-book.netlify.app/">
             <Button variant="primary">
                View Demo
              </Button>
             </a>
              <a href = "https://github.com/HaseebUlHasan/Outlast-Bookshop-API-React">
                <Button variant="primary" >
                Source Code
              </Button>
              </a>
              <a href="">
                {" "}
                <Button variant="secondary" onClick={() => setShow4(false)}>
                  Close
                </Button>{" "}
              </a>
            </Modal.Footer>
          </Modal>
       
          <Card style={{width : "12rem" , height : "10rem"}}>
            <Card.Img variant="top" src={olx} onClick={() => setShow5(true)} />
            <Card.Body>
              <Card.Title style = {{color : "black"}}>OLX Clone</Card.Title>
            </Card.Body>
          </Card>

          <Modal show={show5} onHide={() => setShow5(false)} size="lg">
            <Modal.Body>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={khareedbaij1}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={khareedbaij2}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={khareedbaij3}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={khareedbaij4}
                  />
                </Carousel.Item>
              </Carousel>
            </Modal.Body>
            <Modal.Footer>
             <a href = "https://khareedbaij.web.app/#/splash">
             <Button variant="primary">
                View Demo
              </Button>
             </a>
             <a href = "https://drive.google.com/file/d/1JTzKHf-0Vpx8CHcgrTLyZF8OGRA3xmFZ/view">
             <Button variant="primary">
               Source Code 
              </Button>
             </a>
              <a href="">
                {" "}
                <Button variant="secondary" onClick={() => setShow5(false)}>
                  Close
                </Button>{" "}
              </a>
            </Modal.Footer>
          </Modal>

          <Card style={{width : "12rem" , height : "10rem"}}>
            <Card.Img variant="top" src={json} onClick={() => setShow6(true)} />
            <Card.Body>
              <Card.Title style = {{color : "black"}}> User Posts</Card.Title>
            </Card.Body>
          </Card>

          <Modal show={show6} onHide={() => setShow6(false)} size="lg">
            <Modal.Body>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={json1}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={json2}
                  />
                </Carousel.Item>
                
              </Carousel>
            </Modal.Body>
            <Modal.Footer>
              
             <a href = "https://user-data-posts.netlify.app/">
             <Button variant="primary">
                View Demo
              </Button>
             </a>
             
              <a href="">
                {" "}
                <Button variant="secondary" onClick={() => setShow6(false)}>
                  Close
                </Button>{" "}
              </a>
            </Modal.Footer>
          </Modal>
       </Row>
      </Row>
    </>
  );
};

export default Projects;
