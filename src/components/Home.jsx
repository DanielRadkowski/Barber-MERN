import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import item1 from '../pictures/pexels-photo-3654938.jpeg';
import item2 from '../pictures/barber.jpg';
import item3 from '../pictures/beard trimming.jpg';
import logo from '../pictures/head.png';
import styled from 'styled-components';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`

.carousel-item{
  height: 55vw;
}

.container-fluid{
  padding: 5em 0;
  position: relative;
  z-index: 2;
  width: 70vw;
  
  p {
    font-size: 7vw;
    text-align: center;
    text-shadow: 0.25vw 0.25vw #000;
  }

  img {
   max-width: 13vw;
   margin: auto;
   filter: drop-shadow(0.5vw 0.5vw #222);
  }
}

.bg {
  z-index: 1;
  position: absolute;
  
}
.my-col {
  place-self: center;
}
.my-row {
  padding: 5vw 0 0 0;
}
.btn-lg {
  font-size: 3vw;
}

.small-p {
  display: none;
}

@media(max-width: ${breakpoints.md}) {

  .carousel-item{
    height: 60vw;
  }
  
  .container-fluid{
    padding: 2em 0;
    
    p {
      font-size: 7vw;
    }
  
    img {
     max-width: 15vw;
    }
  }

  .btn-lg {
    font-size: 5vw;
  }
}

@media(max-width: ${breakpoints.sm}) {

  .container-fluid{
    padding: 1em 0 5em 0;
  }

  .my-row {
    padding: 10vw 0 0 0;
  }
}

@media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

  .carousel-item{
    height: 65vw;
  }

  .carousel-indicators {
    margin: 0 auto;
  }

  .container-fluid{
    padding: 0; 
  }
  
  .my-row {
    padding: 0;
  }

  .small-p {
    display: block;
  }
  .normal-p {
    display: none;
  }
}
`

function Home() {
  return (
    <Styles id="home">
      <Carousel interval={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 bg"
            src={item1}
            alt="First slide"
          />
          <Container fluid={true} className="justify-items-strech">
            <Row className="justify-content-center">
              <Col className="my-col" sm={4} md={4}>
                <p className="normal-p">Barber</p>
                <p className="small-p">Barber Andrew</p>
              </Col>
              <Col className="my-col" sm={3} md={3}>
                <img
                  className="d-block w-100"
                  src={logo}
                  alt="Second slide"
                />
              </Col>
              <Col className="my-col" sm={4} md={4}>
                <p className="normal-p">Andrew</p>
              </Col>
            </Row>
            <Row className="my-row justify-content-md-center">
              <Col className="my-col my-btn" md={12} lg={4}>
                <Button block size="lg" href="#">Book your visit now!</Button>
              </Col>
            </Row>
          </Container>
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
    </Styles>

  )
}

export default Home;