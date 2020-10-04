import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        crack<span style={{ fontWeight: "bolder" }}>Waste</span>
      </Navbar.Brand>
      <Navbar.Toggle
        style={{ outline: "none", border: "none" }}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto nav-links">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
          <Nav.Link href="#link">Login</Nav.Link>
          <Nav.Link href="#link">Signup</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
