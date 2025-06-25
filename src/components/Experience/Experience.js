import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBriefcase } from "react-icons/fa";
import ExperienceCard from "./ExperienceCard";
import quantiumLogo from "../../Assets/quantium.png";
import zelisLogo from "../../Assets/zelis.png";

function Experience() {
    const quantiumDescription = `
    Enhanced and maintained the QPromotions application by implementing features such as API integrations and 
    database connections, ensuring client-focused solutions. Developed full-stack web applications using ASP.NET Core, 
    Angular, JavaScript, and SQL. Upgraded .NET framework versions to improve performance and compatibility. 
    Collaborated with cross-functional teams to implement robust data test IDs, enhancing data integrity and traceability, 
    and maintained strong client relationships by delivering high-quality solutions aligned with their requirements.
    `;

    const zelisDescription = `
    Developed and maintained applications using Angular, JavaScript, and .NET to enhance system functionality and performance. 
    Earned certifications in these technologies to deepen technical expertise and contribute effectively to the engineering team.
    `;

    return (
        <Container fluid className="experience-section" id="experience">
            <h2 className="section-heading">
                <FaBriefcase style={{ marginRight: "10px" }} />
                Experience
            </h2>

            <Row className="justify-content-center">
                <Col md={100} lg={8}>
                    <ExperienceCard
                        logo={quantiumLogo}
                        role="Graduate Engineer"
                        company="Quantium"
                        date="July 2024 – Present"
                        description={quantiumDescription}
                    />
                </Col>
                <Col md={10} lg={8}>
                    <ExperienceCard
                        logo={zelisLogo}
                        role="Software Engineer Intern"
                        company="Zelis"
                        date="Jan 2024 – June 2024"
                        description={zelisDescription}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Experience;
