import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import item1 from '../pictures/mens-grooming-supplies.jpg';
import item2 from '../pictures/barber.jpg';
import item3 from '../pictures/beard trimming.jpg';
import logo from '../pictures/head.png';
import styled from 'styled-components';

const Styles = styled.div`
.carousel {
  background-color: grey;
}

.carousel-item {
  height: 90vh;
}

.container-fluid{
  padding: 3em 0;
  position: relative;
  z-index: 2;
  //border: 2px solid red;
  width: 70vw;
 
 
  p {
    font-size: 6vw;
    text-align: center;
    text-shadow: 0.05em 0.05em #000;
    //background-color: grey;
    
  }
  img {
   max-width: 17vw;
   text-align: center;
   filter: drop-shadow(15px 15px #222);
  }
}


.bg {
  z-index: 1;
  position: absolute;
  
}
.my-col {
  //border: 2px solid red;
  place-self: center;
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
          <Container fluid={true}>
            <Row className="justify-content-md-center">
              <Col className="my-col" md={{span: 4 , offset: 0}} sm={12}>
                <p>Barber</p>
              </Col>
              <Col className="my-col" md={{span: 2 , offset: 0}} sm={12}>
                <img
                  className="d-block w-100"
                  src={logo}
                  alt="Second slide"
                />
              </Col>
              <Col className="my-col" md={{span: 4 , offset: 0}} sm={12}>
                <p>Andrew</p>
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