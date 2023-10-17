import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
function Header() {
  return (
    <header>
        <Navbar collapseOnSelect expand="lg" bg="" variant="light" style={{ background: '#F2EEEA' }}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/your-logo.png"  // Replace with your company logo image URL
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Company Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="mx-auto"> {/* Center align the middle items */}
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/skin-disease">Skin Disease</Nav.Link>
              <Nav.Link href="/clinical-solution">Clinical Solution</Nav.Link>
            </Nav>
          </div>
          <Nav>
            <Nav.Link href="/signin">Sign In</Nav.Link>
            {/* <NavDropdown title={<i className="bi bi-list"></i>}>
              <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  );
}

export default Header;
