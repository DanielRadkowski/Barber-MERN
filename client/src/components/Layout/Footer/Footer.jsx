import React from 'react';
import styled from 'styled-components/macro';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import Socials from "./Socials";
import MiniLogo from "./MiniLogo";

const Styles = styled.footer`


@media (min-width: ${breakpoints.xs}) {
  
  background: #eeeeee;
  height: 10em;

  img {
    width: 5em;
  }
  p {
    font-size: 0.75em;
  }
  .footer {
    top: 1em;
  }
  .copyright-p--large-screen {
    right: 5vw;
  }
  .copyright-p--small-screen {
    top: 1em;
  }
}


@media (min-width: ${breakpoints.lg}) {
  .footer {
    top: 1.5em;
  }
  p {
    font-size: 1em;
  }
}
`

export default function Footer() {
  return (
    <Styles >
      <div className="footer d-flex justify-content-around align-items-center position-relative">
        <MiniLogo />
        <p className="copyright-p--large-screen d-none d-lg-inline-block m-0 text-center position-relative">© Copyright 2020 Barber Andrew</p>
        <Socials />
      </div>
      <p className="copyright-p--small-screen text-center d-block d-lg-none position-relative m-0">© Copyright 2020 Barber Andrew</p>
    </Styles>
  );
}
