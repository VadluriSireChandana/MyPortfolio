import React from 'react';
import { Col, Row } from 'react-bootstrap';

// Languages
import { SiC, SiCsharp } from 'react-icons/si';
import { DiPython, DiJavascript1 } from 'react-icons/di';
import { DiDatabase } from 'react-icons/di';

// Frontend & Backend
import { DiReact, DiNodejs } from 'react-icons/di';
import { SiAngular, SiHtml5, SiCss3, SiDotnet } from 'react-icons/si';

// Tools
import { DiGit } from 'react-icons/di';
import { SiGithub, SiPostman, SiGooglecloud } from 'react-icons/si';

// OS
import { SiWindows, SiLinux } from 'react-icons/si';

// IDEs
import { SiVisualstudiocode } from 'react-icons/si';

function Techstack() {
    return (
        <>
            {/* ─────────── Languages ─────────── */}
            <h2 className="skill-category-title">Languages</h2>
            <Row style={{ justifyContent: 'center', paddingBottom: '20px' }}>
                <Col xs={4} md={2} className="tech-icons" title="C">
                    <SiC />
                    <div className="tech-label">C</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="C#">
                    <SiCsharp />
                    <div className="tech-label">C#</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="Python">
                    <DiPython />
                    <div className="tech-label">Python</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="JavaScript">
                    <DiJavascript1 />
                    <div className="tech-label">JavaScript</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="SQL">
                    <DiDatabase />
                    <div className="tech-label">SQL</div>
                </Col>
            </Row>

            {/* ─────────── Frameworks & Technologies ─────────── */}
            <h2 className="skill-category-title">Frameworks & Technologies</h2>
            <Row style={{ justifyContent: 'center', paddingBottom: '20px' }}>
                <Col xs={4} md={2} className="tech-icons" title="HTML5">
                    <SiHtml5 />
                    <div className="tech-label">HTML5</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="CSS3">
                    <SiCss3 />
                    <div className="tech-label">CSS3</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="React">
                    <DiReact />
                    <div className="tech-label">React</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="Angular">
                    <SiAngular />
                    <div className="tech-label">Angular</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="Node.js">
                    <DiNodejs />
                    <div className="tech-label">Node.js</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="ASP.NET Core">
                    <SiDotnet />
                    <div className="tech-label">ASP.NET Core</div>
                </Col>
            </Row>

            {/* ─────────── Tools & Platforms ─────────── */}
            <h2 className="skill-category-title">Tools & Platforms</h2>
            <Row style={{ justifyContent: 'center', paddingBottom: '20px' }}>
                <Col xs={4} md={2} className="tech-icons" title="Git">
                    <DiGit />
                    <div className="tech-label">Git</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="GitHub">
                    <SiGithub />
                    <div className="tech-label">GitHub</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="Postman">
                    <SiPostman />
                    <div className="tech-label">Postman</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="Google Cloud">
                    <SiGooglecloud />
                    <div className="tech-label">Google Cloud</div>
                </Col>
            </Row>

        </>
    );
}

export default Techstack;
