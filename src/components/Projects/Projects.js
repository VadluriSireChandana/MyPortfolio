import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import finance from "../../Assets/Projects/finance.png";
import blogapp from "../../Assets/Projects/BlogApp.png";
import snapfind from "../../Assets/Projects/snapfind.png";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogapp}
              isBlog={false}
              title="BlogApp"
              description="Our Blog Application is a simple, all-in-one space where people can sign up, write posts, and
               share them with others. After logging in, a user can create rich articles, later to edit or delete them.
               Readers can join the conversation by leaving comments, so every post can grow into a discussion.
               "
              link="https://github.com/Sanjana-Vadluri/BlogApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snapfind}
              isBlog={false}
              title="Snap Find"
              description="SnapFind is a full-stack Django-based web application that allows users to share and explore
               image-based posts while enabling real-time chat and interaction.
               It includes user authentication, profile management, and features like posting images, AI-based similarity matching, chat functionality.."
              link="https://github.com/Sanjana-Vadluri/Snap-Find"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finance}
              isBlog={false}
              title="Finance Navigator"
              description="Finance Navigator is a web application designed to help users track their income, expenses,
               and savings in a clear and organized way. It allows users to set financial goals, categorize transactions,
               and visualize spending patterns through charts. The platform promotes better money management with a simple,
                user-friendly interface."
              link="https://github.com/Sanjana-Vadluri/WEBATHON-PROJECT"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
