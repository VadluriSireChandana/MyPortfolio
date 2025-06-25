import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/HomeLogo.gif";
import Home2 from "./Home2";
import Type from "./Type";
import ReactGA from "react-ga";

function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <section>
      <Container fluid id="home" className="home-section"
          style={{ backgroundImage: 'none', backgroundColor: '#e7d9ee'}}>
      >
        <Container className="home-content"
          style={{
            color:'black',
            fontFamily: 'Roboto',
          }}
        >
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                  <strong >Hi There!{" "}</strong>
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <bold>I'm</bold>
                <strong style={{color:'purple', fontFamily:'cursive'}}> SIRE CHANDANA VADLURI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
