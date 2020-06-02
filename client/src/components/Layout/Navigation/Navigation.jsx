import React, { useState } from 'react';
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

  @media(min-width: ${breakpoints.xs}) {
    h1 {
      font-size: 1.5em;
    }
    .nav-link {
      font-size: 1.5em;
    }
  }

  @media(min-width: ${breakpoints.lg}) {
    h1 {
      display: inline;
      font-size: 2em;
    }
    .nav-link {
      font-size: 1.5em;
      margin: 0 0.25em;
    }
}
`

export default function Navigation() {

  const [id, setId] = useState("");

  let offset = elmnt => {
    window.scrollTo({
      top: elmnt.offsetTop - 50,
      behavior: "smooth"
    })
  }

  let scrollHome = () => {
    let elmnt = document.getElementById("home");
    offset(elmnt);
    setId("home");
  }
  
  let scrollServices = () => {
    let elmnt = document.getElementById("services");
    offset(elmnt);
    setId("services");
  }
  
  let scrollContact = () => {
    let elmnt = document.getElementById("contact");
    offset(elmnt);
    setId("contact");
  }

  return (
    <Styles>
      <Navbar id="navbar" collapseOnSelect variant="dark" expand="md" fixed="top">
        <Navbar.Brand href="#" onClick={scrollHome} >
          <h1>Barber Andrew</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" onClick={scrollHome} className={`${id === "home" ? "text-light" : "text-muted"}`}>Home</Nav.Link>
            <Nav.Link href="#" onClick={scrollServices} className={`${id === "services" ? "text-light" : "text-muted"}`}>Sevices</Nav.Link>
            <Nav.Link href="#" onClick={scrollContact} className={`${id === "contact" ? "text-light" : "text-muted"}`}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}
