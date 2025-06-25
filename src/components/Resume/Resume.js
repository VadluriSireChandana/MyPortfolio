import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from "../../Assets/SireChandana.pdf";
import ReactGA from "react-ga";

// Set up PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);

        // Handle window resize
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Container fluid className="resume-section">
            <Container>
                {/* Download Button */}
                <Row className="justify-content-center mt-5 mb-3">
                    <Button variant="primary" href="https://drive.google.com/file/d/1iSCC2Tzk-7YDCXtp4J-yorMVHCoYD_X_/view?usp=sharing" target="_blank">
                        <AiOutlineDownload /> &nbsp;Download Resume
                    </Button>
                </Row>

                {/* PDF Preview */}
                <Row className="justify-content-center">
                    <Document file={pdf} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.9} />
                    </Document>
                </Row>
            </Container>
        </Container>
    );
}

export default Resume;
