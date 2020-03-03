import React from 'react';
import LogoContainer from './LogoContainer'
import { Carousel } from 'react-bootstrap';
import item1 from '../pictures/pexels-photo-3654938.jpeg';
import item2 from '../pictures/barber.jpg';
import item3 from '../pictures/beard trimming.jpg';
import styled from 'styled-components';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`

.carousel-item{
  height: 55vw;
}

.bg {
  z-index: 1;
  position: absolute;
  right: 0px;
  left: 0px;
}

@media(max-width: ${breakpoints.md}) {

  .carousel-item{
    height: 60vw;
  }

@media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

  .carousel-item{
    height: 65vw;
  }

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
    </Styles>
    

  )
}

export default Home;