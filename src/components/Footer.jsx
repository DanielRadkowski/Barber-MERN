import React from 'react';
import styled from 'styled-components';
import logo from '../pictures/head.png';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import Socials from "./Socials";
import { Container } from 'react-bootstrap';

const Styles = styled.div`

background: #eeeeee;

@media (min-width: ${breakpoints.xs}) {
  height: 12em;
  img {
    width: 5em;
  }
  .ft {
    top: 1.5em;
  }
    .small-p {
    top: 1.75em;
  }
}

@media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
  img {
    
  }
}

@media (min-width: ${breakpoints.lg}) {
  .ft {
    top: 2.5em;
  }
}
`

function Footer() {
  return (
    <Styles >
      <div className="ft d-flex justify-content-around align-items-center position-relative">
      <div className="d-flex align-items-center ml-5">
          <h1 className="d-none d-sm-block">Barber</h1>
          <img
            className="p-3"
            src={logo}
            alt="logo"
          />
          <h1 className="d-none d-sm-block">Andrew</h1>
        </div>
        <p className="d-none d-lg-inline-block m-0 text-center">© Copyright 2020 Barber Andrew</p>
        <Socials />
      </div>
      <p className="small-p text-center d-block d-lg-none position-relative m-0">© Copyright 2020 Barber Andrew</p>
    </Styles>
  );



}

export default Footer;