import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import NavDropdown from "react-bootstrap/NavDropdown";
import  "./css/navbar.css";
import navlogo from "./logo.png";
import {Link} from "react-router-dom";
function Navbarparking() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={navlogo} /></Navbar.Brand>
        {/* <Link to="/"  className="navbar-brand"><img src={navlogo} /></Link> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink href="#action1">Home</NavLink>
            <NavDropdown title="Select Floor" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Floor 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Floor 2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarparking;