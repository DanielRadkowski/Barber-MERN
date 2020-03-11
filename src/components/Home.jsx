import React from 'react';
import LogoContainer from './LogoContainer';
import Socials from './Socials';
import { Carousel } from 'react-bootstrap';
import item1 from '../pictures/pexels-photo-3654938.jpeg';
import item2 from '../pictures/barber.jpg';
import item3 from '../pictures/beard trimming.jpg';
import styled from 'styled-components';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`

height: 55vw;

.carousel {
  height: inherit;
}

.carousel-inner {
  height: inherit;
}

.bg {
  z-index: 1;
  position: absolute;
  right: 0px;
  left: 0px;

}

@media(max-width: ${breakpoints.md}) {

  height: 60vw;
  
} 

@media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

  height: 65vw;

  .carousel-indicators {
    margin: 0 auto;
  }
}
`

function Home() {
  return (
    <Styles id="home">

      <Carousel interval={false} className="bg">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item1}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <LogoContainer />
      {/* <Socials /> */}
    </Styles>
    

  )
}

export default Home;