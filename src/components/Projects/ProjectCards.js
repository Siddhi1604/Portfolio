import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";


/**
 * ProjectCards component is a reusable component that can be used to display
 * a project card with its title, description, GitHub link, and (optionally)
 * a demo link.
 *
 * It takes in props as an argument and uses these props to render the card.
 *
 * @param {Object} props - An object containing the following properties:
 *                        - imgPath: The path to the image to be displayed on the card.
 *                        - title: The title of the project.
 *                        - description: The description of the project.
 *                        - ghLink: The link to the GitHub repository of the project.
 *                        - demoLink: (Optional) The link to the demo of the project.
 *                        - isBlog: (Optional) A boolean indicating whether the project
 *                                  is a blog or not. Defaults to false.
 */
function ProjectCards(props) {
  // Render the project card
  return (
    <Card className="project-card-view">
      {/* Display the image on the card */}
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      {/* Display the title of the project */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* Display the description of the project */}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {"\n"}
        {"\n"}

        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
