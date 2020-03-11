import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import styled from 'styled-components';

const Styles = styled.div`

  .navbar {
    background-color: #000;
  }

  .navbar-nav {
    margin: 0 2em;
  }

  .nav-link {
    font-size: 2em;
    margin: 0 0.25em;
  }

  p {
    display: inline;
    font-size: 2.5em;
  }

 @media(max-width: ${breakpoints.md}) {
    p {
      font-size: 1.5em;
    }
    .nav-link {
      font-size: 1.5em;
    }
  }
`


function Header() {
  return (
    <Styles>
      <Navbar variant="dark" expand="md" fixed="top" >
        <Navbar.Brand href="#home">
          <p>Barber Andrew</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Sevices</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );



}

export default Header;