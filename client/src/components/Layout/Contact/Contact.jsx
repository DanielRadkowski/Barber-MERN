import React from 'react';
import SectionHeader from '../SectionHeader';
import styled from 'styled-components';
import MapContainer from './MapContainer';
import BookButton from '../../BookButton';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import OpeningTimes from './OpeningTimes';

const Styles = styled.div`

background: #d65a31;

@media(min-width: ${breakpoints.xs}) {

  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
} 

@media(min-width: ${breakpoints.md}) {

  h1 {
    font-size: 2.5em;
  }
  h2 {
    font-size: 2em;
  }
}
`

export default function Contact() {
  return (
    <Styles id="contact" className="py-5 text-center">
      <div className="px-5">
        <SectionHeader name="Contact" />
        <div className="pb-5">
          <h1>Phone:</h1>
          <h2>Call now and book your visit!</h2>
          <h2>659 852 666</h2>
        </div>
        <div className="pb-5">
          <h1>E-mail:</h1>
          <h2>info@barber-andrew.com</h2>
        </div>
        <OpeningTimes className="pb-5" />
      </div>
      <MapContainer />
      <BookButton name="Book your visit now!" />
    </Styles>
  );
}


