import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/LOGO-1.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

// This is the Home component which is the main landing page of the website.
// It is a React functional component.
function Home() {
  // The JSX code below is the return statement of the Home component.
  // It is a JSX expression which is syntactically similar to HTML, but it is actually a tree of React elements.
  return (
    // The section element is a container for grouping content.
    <section>
      {/* The first Container element is a fluid container which takes up the full width of its parent. */}
      <Container fluid className="home-section" id="home">
        {/* The Particle component is a custom component which adds particles effect to the background. */}
        <Particle />
        {/* The second Container element is used to group content. */}
        <Container className="home-content">
          {/* The Row component is a flexible container which makes it easy to design responsive mobile-first layouts. */}
          <Row>
            {/* The Col component is a responsive column which takes up the specified amount of space. */}
            <Col md={7} className="home-header">
              {/* The h1 element is used for main headings. */}
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {/* The text "Hi There!" is displayed. */}
                Hi There!{" "}
                {/* The span element is used to group inline elements. */}
                <span className="wave" role="img" aria-labelledby="wave">
                  {/* The emoji "👋🏻" is displayed. */}
                  👋🏻
                </span>
              </h1>

              {/* The h1 element is used for main headings. */}
              <h1 className="heading-name">
                {/* The text "I'M" is displayed. */}
                I'M
                {/* The strong element is used to emphasize text. */}
                <strong className="main-name"> SIDDHI PANDYA</strong>
              </h1>

              {/* The div element is a generic container for any content. */}
              <div style={{ padding: 50, textAlign: "left" }}>
                {/* The Type component is a custom component which changes the text gradually. */}
                <Type />
              </div>
            </Col>

            {/* The Col component is a responsive column which takes up the specified amount of space. */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* The img element is used to embed an image in the HTML document. */}
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "5000px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* The Home2 component is a custom component which displays the content of the second section of the landing page. */}
      <Home2 />
    </section>
  );
}

export default Home;
