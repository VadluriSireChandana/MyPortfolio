import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Hi Everyone, I am <strong>Sire Chandana Vadluri </strong>
            from <strong> Hyderabad, India.</strong>
            <br />I have pursued my <strong> B.Tech</strong> in <strong>Computer Science and Technology at GNITS</strong>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>

            <li className="about-activity">
              <ImPointRight /> Watching Movies and Web Series
            </li>
          </ul>

          <p style={{marginBlockEnd: 0, color: 'rgb(155 126 172)'}}>
            "You can’t control everything that happens to you, but you CAN control the way you respond."{' '}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
