import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

// This is a functional component that returns a Bootstrap Navbar
// with links to different pages of the website.
function NavBar() {
  // UseState hooks are used to manage state for the expanded state of the Navbar
  // and the navbar color.
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  // This function is called whenever the window is scrolled and it updates the
  // navbar color state based on the scroll position.
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  // This line adds an event listener to the window that calls the scrollHandler function
  // whenever the window is scrolled.
  window.addEventListener("scroll", scrollHandler);

  // The Navbar component is rendered with various props. The expanded prop is set to the
  // value of the expand state. The fixed prop is set to "top" to make the Navbar sticky.
  // The expand prop is set to "md" to make the Navbar responsive on medium screens.
  // The className prop is set to the value of the navColour state, which is either "sticky"
  // or "navbar".
  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        
        {/* The Navbar.Toggle component is rendered with an onClick handler that toggles the
        value of the expand state. The aria-controls prop is set to "responsive-navbar-nav"
        to link the Toggle component with the Navbar.Collapse component below. */
        }
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        {/* The Navbar.Collapse component is rendered with an id prop that is used to link the
        Collapse component with the Toggle component above. The Nav component is rendered with a
        className prop that sets the alignment of the links to the right. The defaultActiveKey
        prop is set to "#home" to make the first link active by default. */
        }
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {/* The Nav.Item component is rendered with a Nav.Link component that links to the
            home page. The onClick handler is used to toggle the expand state to false when the
            link is clicked. */
            }
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/* The Nav.Item component is rendered with a Nav.Link component that links to the
            about page. The onClick handler is used to toggle the expand state to false when the
            link is clicked. */
            }
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            {/* The Nav.Item component is rendered with a Nav.Link component that links to the
            projects page. The onClick handler is used to toggle the expand state to false when the
            link is clicked. */
            }
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Achievements
              </Nav.Link>
            </Nav.Item>

            {/* The Nav.Item component is rendered with a Nav.Link component that links to the
            resume page. The onClick handler is used to toggle the expand state to false when the
            link is clicked. */
            }
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* The Nav.Item component is rendered with a Nav.Link component that links to the
            blogs page. The target prop is set to "_blank" to open the link in a new tab.
            The rel prop is set to "noreferrer" to prevent the Referer header from being sent when
            the link is followed. */
            }
            <Nav.Item>
              <Nav.Link
                href="https://medium.com/@siddhipandya1604/introducing-earinsight-your-comprehensive-digital-audiometer-app-for-auditory-health-management-e1442a93e574"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
