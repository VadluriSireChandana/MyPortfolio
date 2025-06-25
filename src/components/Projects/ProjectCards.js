import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
    return (
        <Card
            className="project-card-view"
            style={{ width: "100%", minHeight: "60vh" }}
        >
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />

            <Card.Body className="d-flex flex-column">
                <Card.Title>{props.title}</Card.Title>

                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>

                <div
                    className={`mt-auto d-flex ${
                        props.liveLink ? "justify-content-between" : "justify-content-center"
                    }`}
                >
                    <Button variant="primary" href={props.link} target="_blank">
                        <BiLinkExternal /> &nbsp;
                        {props.isBlog ? "View Blog" : "View Project"}
                    </Button>

                    {props.liveLink && (
                        <Button variant="primary" href={props.liveLink} target="_blank">
                            <BiLinkExternal /> &nbsp; Live
                        </Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;
