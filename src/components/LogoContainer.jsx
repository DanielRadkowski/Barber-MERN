import React from 'react';
import BookButton from './BookButton';
import logo from '../pictures/head.png';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`

.container-fluid {

    position: relative;
    z-index: 2;
    
    h1 {
      font-size: 7vw;
      text-shadow: 0.25vw 0.25vw #000;
    }
  
    img {
     filter: drop-shadow(0.5vw 0.5vw #222);
    }
  }


  @media (min-width: ${breakpoints.xs}) {

    .container-fluid {
      padding: 0;
    
    img {
      max-width: 15vw;
     }
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
 
}
  @media(min-width: ${breakpoints.sm}) {

    .container-fluid {
      padding: 3em 0;
      width: 70vw;


      img {
        max-width: 13vw;
      }  
    }

    .my-row {
      padding: 3vw 0 0 0;
    }

      .small-h1 {
        display: none;
      }
    
      .normal-h1 {
        display: block;
      }
  }
`


export default function LogoContainer() {
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
                            className="d-block mx-auto w-100"
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
                        <BookButton name="Book your visit now!" />
                    </Col>
                </Row>
            </Container>
        </Styles>
    );
}
