import React from 'react';
import LogoContainer from './LogoContainer';
import { Carousel } from 'react-bootstrap';
import item1 from '../../../pictures/pexels-photo-3654938.jpeg';
import item2 from '../../../pictures/barber.jpg';
import item3 from '../../../pictures/beard trimming.jpg';
import styled from 'styled-components/macro';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.section`

position: relative;

.carousel {
  height: inherit;
  z-index: 1;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
}

.carousel-inner {
  height: inherit;
}


@media (min-width: ${breakpoints.xs}) {

  height: 64vw;

  .carousel-indicators {
    display: none;
  }
}

@media(min-width: ${breakpoints.md}) {

  height: 60vw;
} 

@media(min-width: ${breakpoints.lg}) {

  height: 55vw;
}

`

export default function Home() {
  return (
    <Styles id="home" className="p-5">

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item1}
            alt="Barber's stuff"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item2}
            alt="Black barber trims clients beard"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item3}
            alt="Beard trimming"
          />
        </Carousel.Item>
      </Carousel>
      <LogoContainer />
    </Styles>
  )
}
