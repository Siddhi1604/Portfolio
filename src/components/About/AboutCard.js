import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Siddhi Pandya </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am currently a student of Information Technology.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Photgraghy 
            </li>
            <li className="about-activity">
              <ImPointRight /> Editings
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Just Believe in yourself, You'll make it all one day"{" "}
          </p>
          <footer className="blockquote-footer">Siddhi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
