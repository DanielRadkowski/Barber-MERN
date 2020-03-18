import React from 'react';
import { Container, Col, Row,} from 'react-bootstrap';
import pole from '../pictures/pole.png';
import styled from 'styled-components';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`

.container-fluid {
    padding: 2em 0 7em 0;
    width: 35vw;
    
    
    h1 {
      font-size: 6vw;
      text-shadow: 0.25vw 0.25vw #000;     
    }
  
    img {
     max-width: 2.6vw;
     filter: drop-shadow(0.3vw 0.3vw #000);  
    }
  }

  @media(max-width: ${breakpoints.md}) {
    .container-fluid {
        width: 45vw;
        h1 {
            font-size: 8vw;
        }
        img {
            max-width: 3.6vw;
        }    
    }
  }

  @media(max-width: ${breakpoints.sm}) {
    .container-fluid {
        padding: 2em 0 4em 0;
        width: 65vw;
        h1 {
            font-size: 10vw;
        }
        img {
            max-width: 4.6vw;
        }    
    }
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    .container-fluid {
        padding: 0 0 4em 0;
        width: 65vw;
        h1 {
            font-size: 11vw;
        }
        img {
            max-width: 5vw;
        }    
    }  
  }  
`

function SectionHeader(props) {
    return (
        <Styles className="text-white">
            <Container fluid={true} className="text-center">
                <Row className="justify-content-center align-items-center">
                    <Col className="" >
                        <img
                            src={pole}
                            alt="pole"
                        />
                    </Col>
                    <Col className="" >
                        <h1>{props.name}</h1>
                    </Col>
                    <Col className="">
                        <img
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