import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import sentimentImg from "../../Assets/Projects/sentiment.png"; // Add your image
import skillTestImg from "../../Assets/Projects/skill-assess.png"; // Add your image
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={5} className="project-card">
              <ProjectCard
                  imgPath={sentimentImg}
                  isBlog={false}
                  title="Twitter Sentiment Analysis"
                  description="Designed a sentiment analysis system using Python and NLP techniques.
              It fetches tweets via Twitter API and classifies sentiment (positive, negative, neutral).
              Useful for analyzing public opinion across trending topics."
                  link="https://github.com/your-github/twitter-sentiment-analysis"
              />
            </Col>

            <Col md={5} className="project-card">
              <ProjectCard
                  imgPath={skillTestImg}
                  isBlog={false}
                  title="Skill Assessing Website"
                  description="Built a responsive web platform using HTML, CSS, and JavaScript that evaluates participants’ proficiency
              through practical tests and scenarios. Helps users gain insights into their personal and professional skill levels."
                  link="https://github.com/your-github/skill-assessment"
              />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
