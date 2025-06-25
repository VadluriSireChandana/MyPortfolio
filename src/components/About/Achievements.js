import React from "react";
import { Container } from "react-bootstrap";
import { FaAward } from "react-icons/fa";
import {ImPointRight} from "react-icons/im";

function Achievements() {
    const achievements = [
        "Finalist in Flipkart Runway, placing among top 1% of participants.",
        "Amazon Future Engineer Scholar – selected as one of the top 400 out of 8,000 applicants.",
        "Epam Women India Scholar – ranked in the top 10% and received scholarship plus mentorship.",
        "Solved 500+ coding questions across platforms including LeetCode and CodeChef."
    ];

    return (
        <Container fluid className="achievements-section" id="achievements">
            <h2 className="section-heading">
                <FaAward style={{ marginRight: "10px" }} />
                Achievements
            </h2>

            <ul className="achievements-list">
                {achievements.map((item, idx) => (
                    <li key={idx}>
                        <ImPointRight /> {item}
                    </li>
                ))}
            </ul>
        </Container>
    );
}

export default Achievements;
