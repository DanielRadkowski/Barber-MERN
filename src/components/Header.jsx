import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../pictures/Background.png';

const Logo = styled.img`
  height: 3em;
`
const Styles = styled.div`
  .navbar {
    background-color: #000;
  }

  .navbar-nav {
    
  }

  .nav-link {
    font-size: 2em;
    margin: 0 0.25em;
  }
`


function Header() {
  return (
    <Styles>
      <Navbar variant="dark" expand="sm" fixed="top">
        <Navbar.Brand href="#home">
          <Logo src={logo} alt="logo" />
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