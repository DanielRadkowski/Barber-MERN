import React from 'react';
import { Carousel } from 'react-bootstrap';
import item1 from '../pictures/barber.jpg';
import item2 from '../pictures/barber-correcting-beard-aged-client.jpg';
import item3 from '../pictures/beard trimming.jpg';
import styled from 'styled-components';

const Styles = styled.div`
.carousel-item {
  width: 100vw;
}

`

function Home() {
  return (
    <Styles>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Styles>
  )
}

export default Home;