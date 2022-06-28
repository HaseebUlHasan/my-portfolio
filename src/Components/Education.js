import React from 'react';
import { Row , Col } from 'reactstrap';
import degree from "./assets/degree.png";
import { Card } from 'react-bootstrap';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  return (
    <>
<Row style={{ backgroundColor: "hsl(0, 0%, 90%)", color: "black" , padding:"100px" }}>
      <h1 style={{textAlign : 'justify' , color : "rgb(245, 101, 57)"}}> Education </h1>
      

      <Col lg="4">
        <img src={degree} alt="About.png" style={{width: '100%' , height: "100%"}} />
      </Col>
      

      <Col lg = "8">

      <Card style = {{textAlign : "justify" , backgroundColor : '#f565394d'}}>
      <Card.Body>
        <Card.Title> <SchoolIcon  fontSize="large"/> Secondary Education</Card.Title>
        <Card.Text>
         <h3>  Sana Public School Kotha Swabi</h3>
        </Card.Text>
        <Card.Title> 2013-2015</Card.Title>
      </Card.Body>
    </Card>
 <br />
    <Card style = {{textAlign : "justify" , backgroundColor : '#f565394d'}}>
      <Card.Body>
        <Card.Title> <SchoolIcon  fontSize="large"/> Higher Secondary Education </Card.Title>
        <Card.Text>
         <h3> The Quaid e Azam College Swabi</h3>
        </Card.Text>
        <Card.Title> 2015-2017</Card.Title>
      </Card.Body>
    </Card>
    <br />
    <Card style = {{textAlign : "justify" , backgroundColor : '#f565394d'}}>
      <Card.Body>
        <Card.Title> <SchoolIcon  fontSize="large"/> Bachelor of Software Engineering</Card.Title>
        <Card.Text>
         <h3>  International Islamic University Islamabad</h3>
        </Card.Text>
        <Card.Title> 2017-2021</Card.Title>
      </Card.Body>
    </Card>

      </Col>
    </Row>
        
        
    </>
       

  )
}

export default Education