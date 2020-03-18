import React from 'react';
import BookButton from './BookButton';
import logo from '../pictures/head.png';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`

.container-fluid {
    padding: 3em 0;
    position: relative;
    z-index: 2;
    width: 70vw;
    
    h1 {
      font-size: 7vw;
      text-shadow: 0.25vw 0.25vw #000;
    }
  
    img {
     max-width: 13vw;
     margin: auto;
     filter: drop-shadow(0.5vw 0.5vw #222);
    }
  }

  .my-row {
    padding: 3vw 0 0 0;
  }

  .small-h1 {
    display: none;
  }

  @media(max-width: ${breakpoints.md}) {

    .container-fluid {
      padding: 1em 0 ;
      
      h1 {
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
      padding: 2em 0 5em 0;
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
  
    .small-h1 {
      display: block;
    }

    .normal-h1 {
      display: none;
    }
  }
`


function LogoContainer() {
    return (
        <Styles className="text-white h-100">
            <Container fluid={true} className="text-center">
                <Row className="justify-content-center align-items-center">
                    <Col className="" sm={4}>
                        <h1 className="normal-h1">Barber</h1>
                        <h1 className="small-h1">Barber Andrew</h1>
                    </Col>
                    <Col className="" sm={3}>
                        <img
                            className="d-block w-100"
                            src={logo}
                            alt="logo"
                        />
                    </Col>
                    <Col className="" sm={4}>
                        <h1 className="normal-h1">Andrew</h1>
                    </Col>
                </Row>
                <Row className="my-row justify-content-center">
                    <Col className="">
                        <BookButton />
                    </Col>
                </Row>
            </Container>
        </Styles>
    );
}

export default LogoContainer;