import React from 'react';
import SectionHeader from './SectionHeader';
import { Container, Col, Row, Card, CardColumns } from 'react-bootstrap';
import scissors from '../pictures/scissors3.png';
import razor from '../pictures/razor3.png';
import both from '../pictures/both.png';
import styled from 'styled-components';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`

.card {
  font-size: 4em;
  justify-content
  
}
.h5 {
  font-size: 0.55em;
}

.card-img-top {
  width: 5em;
}

.card-body {
  padding-bottom: 0;
}

#services {
  position: relative;
}

#content {
  position: absolute;
  z-index: 2;
  width: 100%;
}

#opacity {
  background: #222831;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.bg {
  //border: 2px solid red;
  width: 70vw;
  margin: auto; 
}

`

function Services() {
  return (
    <Styles id="services">
      <div id="opacity"></div>
      <div id="content">
        <SectionHeader name="Services" />
        <CardColumns className="bg">
          <Card className="p-3 text-center">
            <Card.Img variant="top" src={scissors} />
            <Card.Body>
              <Card.Title>Scissor Cut And Style</Card.Title>
              <Card.Text>
              £28 
                </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-3 text-center">
            <Card.Img variant="top" src={razor} />
            <Card.Body>
              <Card.Title>Beard Trim With Razor</Card.Title>
              <Card.Text>
              £18
                </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-3 text-center">
            <Card.Img variant="top" src={both} />
            <Card.Body>
              <Card.Title>Scissor Cut + Beard Trim</Card.Title>
              <Card.Text>
              £40
                </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    </Styles>
  );



}

export default Services;