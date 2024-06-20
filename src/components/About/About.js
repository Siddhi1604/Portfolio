import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about-1.png";
import Toolstack from "./Toolstack";

// This is the About component, which is a functional component in React.
// It renders a section with a fluid container that contains various elements.
function About() {
  return (
    // The outermost container is a Bootstrap fluid container.
    <Container fluid className="about-section">
      {/* The Particle component is rendered inside the fluid container. */}
      <Particle />
      {/* The inner container is a Bootstrap container. */}
      <Container>
        {/* The first row contains two columns. */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {/* The first column contains a heading and the AboutCard component. */}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            {/* The heading is styled and contains a purple text. */}
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            {/* The AboutCard component is rendered. */}
            <Aboutcard />
          </Col>
          {/* The second column contains an image. */}
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            {/* The image is rendered with a fluid class. */}
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        {/* A heading is rendered for the professional skillset. */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        {/* The Techstack component is rendered. */}
        <Techstack />
        {/* A heading is rendered for the tools used. */}
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        {/* The Toolstack component is rendered. */}
        <Toolstack />
        {/* The Github component is rendered. */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
