import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import pole from '../pictures/pole.png';
import styled from 'styled-components';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`

.container-fluid {
    color: white;
    padding: 4em 0 7em 0;
    width: 70vw;
    
    h1 {
      font-size: 6vw;
      text-shadow: 0.25vw 0.25vw #000;     
    }
  
    img {
     max-width: 2.6vw;
     filter: drop-shadow(0.3vw 0.3vw #000);  
    }
  }

  .my-col {
    //border: 5px solid red;
    place-self: center;
    text-align: center;
  }
`

function SectionHeader(props) {
    return (
        <Styles>
            <Container fluid={true} className="justify-items-strech">
                <Row className="justify-content-center">
                    <Col className="my-col" sm={1}>
                        <img
                            //className="d-block w-100"
                            src={pole}
                            alt="pole"
                        />
                    </Col>
                    <Col className="my-col" sm={4}>
                        <h1>{props.name}</h1>
                    </Col>
                    <Col className="my-col" sm={1}>
                        <img
                            //className="d-block w-100"
                            src={pole}
                            alt="pole"
                        />
                    </Col>
                </Row>

            </Container>
        </Styles>
    );
}

export default SectionHeader;