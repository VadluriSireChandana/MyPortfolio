import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBriefcase } from "react-icons/fa";
import ExperienceCard from "./ExperienceCard";
import amazonLogo from "../../Assets/amazon.png";

function Experience() {
    const amazonDescription = `
    I worked on the Amazon Payment Experience (APX) team, where I migrated the Refunds page
    widget from a legacy framework to a modern, scalable system. This enhanced user experience
    by enabling seamless management of bank account details and refunds for thousands of users.
    I implemented secure refund processing for high-value transactions, reducing security risks by
    30% through encryption and audit trails. Additionally, I developed a new client interface that
    allowed client-specific widget configurations, optimizing performance by rendering only required
    components.
  `;

    return (
        <Container fluid className="experience-section" id="experience">
            <h2 className="section-heading">
                <FaBriefcase style={{ marginRight: "10px" }} />
                Experience
            </h2>

            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                    <ExperienceCard
                        logo={amazonLogo}
                        role="Software Dev Engineer Intern"
                        company="Amazon"
                        date="May 2024 – June 2024"
                        description={amazonDescription}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Experience;
