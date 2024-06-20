import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import Untitleddesign from "../../Assets/Projects/Untitleddesign.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Achievements  </strong>
        </h1>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Untitleddesign}
              isBlog={false}
              title=" GOOGLE  AI  ESSENTIALS "
              description="I have earned this GOOGLE AI ESSENTIALS CERTIFICATE on COURSERA in JUNE 2024. I have leanrt about how AI is very much essential in our life now."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Untitleddesign}
              isBlog={false}
              title="GOOGLE DATA ANALYTICS PROFESSTIONAL CERTIFICATE"
              description="I have earned this GOOGLE DATA ANALYTICS PROFESSTIONAL CERTIFICATE on COURSERA in April 2024. I have learnt many things throughout this cousre about Data Analytics."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Untitleddesign}
              isBlog={false}
              title="DATA VISUALIZATION WITH POWERBI"
              description="I have earned this DATA VISUALIZATION WITH POWERBI CERTIFICATE on GREAT LEARNING in MARCH 2024. It was a good course."
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Untitleddesign}
              isBlog={false}
              title="DATA STRUCTURES AND ALGORITHMS USING JAVA"
              description="I have earned this DATA STRUCTURES AND ALGORITHMS USING JAVA CERTIFICATE from NPTEL."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Untitleddesign}
              isBlog={false}
              title="DATABASE MANAGEMENT SYSTEM"
              description="I have earned this DATABASE MANAGEMENT SYSTEM CERTIFICATE from NPTEL."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Untitleddesign}
              isBlog={false}
              title="AI FOR INDIA 2.0 THROUGH SKILL INDIA DIGITAL"
              description="I have earned this AI FOR INDIA 2.0 THROUGH SKILL INDIA DIGITAL on GUVI. It was really a good experience.
              "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
