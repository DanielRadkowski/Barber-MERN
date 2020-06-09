import React from 'react';
import styled from 'styled-components/macro';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`

@media (min-width: ${breakpoints.xs}) {

  .my-icon {
    color: black;
    font-size: 2em;
  }
}
 
`

export default function Socials() {
  return (
    <Styles className="text-center">
        <h6>Connect me on:</h6>
        <div className="d-flex justify-content-around">
        <a href="#face"><i className="my-icon fab fa-facebook-square"></i></a>
        <a href="#insta"><i className="my-icon fab fa-instagram"></i></a>
        <a href="#twit"><i className="my-icon fab fa-twitter-square"></i></a>
        </div>
    </Styles>
  );
}
