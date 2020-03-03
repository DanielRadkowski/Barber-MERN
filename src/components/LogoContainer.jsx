import React from 'react';
import BookButton from './BookButton';
import logo from '../pictures/head.png';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`

.container-fluid {
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

  .my-col {
    place-self: center;
  }

  .my-row {
    padding: 5vw 0 0 0;
  }

  .small-p {
    display: none;
  }

  @media(max-width: ${breakpoints.md}) {

    .container-fluid {
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
  
    .container-fluid {
      padding: 1em 0 5em 0;
    }
  
    .my-row {
      padding: 10vw 0 0 0;
    }
  }
  
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

    .container-fluid {
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

function LogoContainer() {
    return (
        <Styles>
            <Container fluid={true} className="justify-items-strech">
                <Row className="justify-content-center">
                    <Col className="my-col" sm={4}>
                        <p className="normal-p">Barber</p>
                        <p className="small-p">Barber Andrew</p>
                    </Col>
                    <Col className="my-col" sm={3}>
                        <img
                            className="d-block w-100"
                            src={logo}
                            alt="Second slide"
                        />
                    </Col>
                    <Col className="my-col" sm={4}>
                        <p className="normal-p">Andrew</p>
                    </Col>
                </Row>
                <Row className="my-row justify-content-center">
                    <Col className="my-col" md={6} lg={5}>
                        <BookButton />
                    </Col>
                </Row>
            </Container>
        </Styles>
    );
}

export default LogoContainer;