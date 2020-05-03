import React from 'react';
import styled from 'styled-components';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import Socials from "./Socials";
import MiniLogo from "./MiniLogo";

const Styles = styled.div`

background: #eeeeee;
height: 10em;

@media (min-width: ${breakpoints.xs}) {
 
  img {
    width: 5em;
  }
  p {
    font-size: 0.75em;
  }
  .ft {
    top: 1em;
  }
  .normal-p {
    right: 5vw;
  }
  .small-p {
    top: 1em;
  }
}


@media (min-width: ${breakpoints.lg}) {
  .ft {
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
      <div className="ft d-flex justify-content-around align-items-center position-relative">
        <MiniLogo />
        <p className="normal-p d-none d-lg-inline-block m-0 text-center position-relative">© Copyright 2020 Barber Andrew</p>
        <Socials />
      </div>
      <p className="small-p text-center d-block d-lg-none position-relative m-0">© Copyright 2020 Barber Andrew</p>
    </Styles>
  );
}
