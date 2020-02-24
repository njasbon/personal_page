import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1> Welcome to the Nico Space</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          made in react
        </a>
      </header>
      <div>
        <p>
        Thank you for coming to my personal page. I'm excited to be uploading all the events that I organize on this application, in addition to my resume and all my social media accounts!
        You will find the following upcoming events:
        </p>
        <ul>
          <li>Half Hackathon at Dafiti</li>
            <a
              className="App-link"
              href="https://www.meetup.com/Bogota-Web-Development-Meetup/events/266260883/"
              target="_blank"
              rel="noopener noreferrer"
            >
          To learn more click here!
        </a>
          <li>Student Graduation</li>
          <li>Office Hours in Doylestown</li>
          <li>Stacks Hackathon</li>
        </ul>
      </div>
      <Container>
        <Row className="justify-content-md-center"> 
          <Col>       
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="dafiti.JPG" alt="Avatar"/>
              <Card.Body> 
                  <Card.Title>Half Hackathon</Card.Title>
                  <Card.Text>
                    On February 22, 2020 Bogota Dev hosted an awesome Hackathon at the office of Dafiti.
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
