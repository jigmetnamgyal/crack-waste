import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import './navigation.css';

function Navigation() {
    return (
        <Navbar className="navCont" bg="light" expand="lg">
            <Navbar.Brand>
                crack<span style={{
                fontWeight: "bolder"
            }}>Waste</span>
            </Navbar.Brand>
            <Navbar.Toggle
                style={{
                    outline: "none",
                    border: "none"
                }}
                aria-controls="basic-navbar-nav"/>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav-links">
                    <Nav.Link href="/home">Home</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default Navigation;
