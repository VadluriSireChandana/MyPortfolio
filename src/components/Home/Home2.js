import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../Assets/girl.jpg'
import Tilt from 'react-parallax-tilt'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: '2.6em' }}>
                LET ME <span className="purple">INTRODUCE</span> MYSELF
              </h1>
              <p className="home-about-body">
                Hey there! I’m <b className="purple">Sanjana</b> 👩‍💻 — a curious coder with a love for turning ideas into web magic.
                <br />
                <br />
                It all started with a spark — now I build things that live on the internet 🚀
                <br />
                <br />
                I enjoy blending <b className="purple">logic with creativity</b>, diving into{" "}
                <b className="purple">JavaScript adventures</b>, and bringing products to life using tools like{" "}
                <b className="purple">React</b>, <b className="purple">Spring</b> and <b className="purple">Node.js</b>.
                <br />
                <br />
                When I’m not coding, you’ll find me exploring <b className="purple">cloud tech ☁️</b>, solving puzzles,
                or secretly rewriting my to-do list app for the 100th time 😅.
                <br />
                <br />
                <i>
                  <b className="purple">"Byte into the future with me 💻✨"</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Let’s <span className="purple">connect</span> and build something awesome together!
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                      href="https://github.com/Sanjana-Vadluri"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.linkedin.com/in/sanjana-vadluri-b79256259/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
  )
}

export default Home2
