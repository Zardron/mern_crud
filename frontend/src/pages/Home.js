import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "../assets/Home.css";

const Home = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Notch</h1>
              <p className="subtitle">One Safe place for all your notes</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingButton">
                  Login
                </Button>
              </a>
              <a href="/login">
                <Button
                  size="lg"
                  className="landingButton"
                  variant="outline-primary"
                >
                  Register
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
