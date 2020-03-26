import React from 'react';
import SectionHeader from './SectionHeader';
import styled from 'styled-components';
import MapContainer from './MapContainer';
import BookButton from './BookButton';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`

background: #d65a31;

@media(max-width: ${breakpoints.md}) {

  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
} 

`

function Contact() {
  return (
    <Styles id="contact" className="py-5">
      <SectionHeader name="Contact" />

      <div className="pb-5 text-center">
        <div className="pb-5">
          <h1>E-mail:</h1>
          <h2>info@barber-andrew.com</h2>
          <h2>Call now and book your visit!</h2>
          <h2>659 852 666</h2>
        </div>
        <div class="">
          <h1>Opening Times:</h1>
          <h2>Monday – Friday: 9.00am – 5.30pm</h2>
          <h2>Saturday: 8.30am – 5.00pm</h2>
          <h2>Sunday: Closed</h2>
        </div>
      </div>
      <MapContainer />

      <BookButton name="Book your visit now!" />

    </Styles>
  );



}

export default Contact;

