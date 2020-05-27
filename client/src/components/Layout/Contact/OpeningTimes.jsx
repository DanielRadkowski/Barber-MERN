import React from 'react';
import styled from 'styled-components';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`

@media(min-width: ${breakpoints.xs}) {

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
} 

@media(min-width: ${breakpoints.md}) {

  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
}

@media(min-width: ${breakpoints.lg}) {

  h1 {
    font-size: 2.2em;
  }
  h2 {
    font-size: 1.75em;
  }
}
`

export default function OpeningTimes(props) {
  return (
    <Styles className={`${props.className} text-center`}>
        <h1>Opening Times:</h1>
        <h2>Monday – Friday: 9.00 – 17.30</h2>
        <h2>Saturday: 9.00 – 14.00</h2>
        <h2>Sunday: Closed</h2>
    </Styles>
  );
}


