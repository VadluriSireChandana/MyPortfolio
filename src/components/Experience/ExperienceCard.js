import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";

function ExperienceCard({ logo, role, company, date, description }) {
    return (
        <Card className="experience-card">
            <Card.Body>
                <Row className="align-items-center experience-header gx-3">
                    {/* Left: logo */}
                    <Col xs="auto" className="d-flex align-items-center">
                        <img
                            src={logo}
                            alt={`${company} logo`}
                            className="experience-logo-inline"
                        />
                    </Col>

                    {/* Right: role + date */}
                    <Col className="text-md-end text-start">
                        <h4 className="experience-title">{role}</h4>
                        <p className="experience-date">
                            <FaCalendarAlt /> {date}
                        </p>
                    </Col>
                </Row>

                {/* Description */}
                <p className="experience-desc">{description}</p>
            </Card.Body>
        </Card>
    );
}

export default ExperienceCard;
