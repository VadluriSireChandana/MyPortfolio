import React from "react";
import { Container } from "react-bootstrap";
import { FaAward } from "react-icons/fa";
import {ImPointRight} from "react-icons/im";

function Achievements() {
    const achievements = [
        "Runner-up at the JPMorgan Code for Good Hackathon 2022, selected among top 200 out of 50,000 participants.",
        "Winner of the TechnoBoom 2022 Coding Contest at GNITS, competing against 200+ students.",
        "Received a Merit Certification at the Megathon Coding Contest 2022."
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
