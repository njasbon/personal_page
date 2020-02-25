import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'





function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#home">Nico</Navbar.Brand>
          <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#events">Events</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#hobbies">Hobbies</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
        </Nav>
      </Navbar>
      <Jumbotron>
        <h1>Welcome to the Nico Space</h1>
          <p>
            I’m a water polo lover, software engineer, basketball player, Colombian and Ecuadorian descendent born in Miami, Florida with a real itch to learn more. 
            My journey into development has been absolutely eye opening. I was a Biology Major at Connecticut College and I truly thought that I the only kind of job I would be any good at would be one as a nurse, physical therapist, etc. 
            So I studied to be a physical therapist. I enjoyed it, but it is really stressful and very hard on your body. After two years of applying I decided to take charge of my future. I started learning development thanks to my husband. 
            He encouraged me and I started meeting more and more people with stories like mine. Their stories spurred me on to focus on development, not for the money, but because coding is such a beautiful way to connect and create. 
          </p>
          <p>
            <Button variant="outline-dark">Email Me</Button>
          </p>
      </Jumbotron>
      
      <Container>
        <Row className="justify-content-md-center"> 
          <Col lg="3">       
            <Card>
              <Card.Img variant="top" src="stefan_code.JPG" alt="Avatar"/>
              <Card.Body> 
                  <Card.Title>Newsletter!</Card.Title>
                  <Card.Text>
                    Want to stay in the loop and get all the details on our upcoming tech events sign up for our newsletter here.
                  </Card.Text>
                  <Button variant="primary">Sign Up</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3">       
            <Card>
              <Card.Img variant="top" src="dafiti.JPG" alt="Avatar"/>
              <Card.Body> 
                  <Card.Title>Half Hackathon</Card.Title>
                  <Card.Text>
                    On February 22, 2020 Bogota Dev hosted an awesome Hackathon at the office of Dafiti.
                  </Card.Text>
                  <Button variant="primary">Event details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3">       
            <Card>
              <Card.Img variant="top" src="classdaysweaters1.JPG" alt="Avatar"/>
              <Card.Body> 
                  <Card.Title>Student Graduation!</Card.Title>
                  <Card.Text>
                    On March 19, 2020 our day and night students will be presenting their final project. 
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3">       
            <Card>
              <Card.Img variant="top" src="partners_in_crime.jpg" alt="Avatar"/>
              <Card.Body> 
                  <Card.Title>Office Hours</Card.Title>
                  <Card.Text>
                    My partner, Granger Abuhoff and I offer office hours in Doylestown, PA every now and again. That means free development assistance for a couple hours! To learn when we're in the States offering office hours just click below.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
