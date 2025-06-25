import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Achievements from "./Achievements";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/myPhoto.JPG";
import ReactGA from "react-ga";

function About() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="about-section"
      style={{
        backgroundImage: 'none', backgroundColor: '#f3f1f5'
      }}
    >
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px",
        }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong>I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" height="400px" width="250px"/>
          </Col>
        </Row>

        <div className="about-info">

          <h1 style={{color: 'black'}}>
            <strong>Professional Skillset</strong>
          </h1>

          <Techstack/>

        </div>

        <Achievements />


        <Github/>
      </Container>
    </Container>
  );
}

export default About;
