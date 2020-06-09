import React from 'react';
import { Container, Col, Row,} from 'react-bootstrap';
import pole from '../../pictures/pole.png';
import styled from 'styled-components/macro';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`

@media (min-width: ${breakpoints.xs}) {
    .container-fluid {
        padding: 0 0 4em 0;
        h1 {
            font-size: 2.5em;
            text-shadow: 0.07em 0.07em #000;
        }
        img {
            max-width: 1.25em;
            filter: drop-shadow(0.2em 0.2em #000);
        }    
    } 
    .header__name {
        flex-grow: 0;
    } 
  }  

  @media(min-width: ${breakpoints.sm}) {
    .container-fluid {
        h1 {
            font-size: 3.5em;
        }
        img {
            max-width: 2em;
        }    
    }
  }

  @media(min-width: ${breakpoints.md}) {

    .container-fluid {
        padding: 2em 0 7em 0;
        
        h1 {
          font-size: 4em;       
        }
      
        img {
         max-width: 2.5em; 
        }
      }
    }
    
@media(min-width: ${breakpoints.lg}) {
    .container-fluid {   
        h1 {
          font-size: 5em;       
        }
      
        img {
         max-width: 3em; 
        }
      }
}
`

export default function SectionHeader(props) {
    return (
        <Styles className="text-white px-1">
            <Container fluid={true}>
                <Row className="justify-content-center align-items-center">
                    <Col className="text-right" >
                        <img
                            src={pole}
                            alt="pole"
                        />
                    </Col>
                    <Col className="text-center px-md-4 px-lg-5 header__name">
                        <h1>{props.name}</h1>
                    </Col>
                    <Col className="text-left">
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
