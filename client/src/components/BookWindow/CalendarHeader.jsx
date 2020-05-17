import React from 'react';
import styled from 'styled-components';
import * as dateFns from 'date-fns';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import { Container, Row, Col } from 'react-bootstrap';


const Styles = styled.div`

@media (min-width: ${breakpoints.xs}) {
    
    .arrow {
        font-size: 1.5em;
        border-radius: 50%;
        padding: 0.25em 0.45em;

        &:hover {
            cursor: pointer;
            background: #343c4b;
            color: #fff;
        }
    }

    h4 {
        font-family: 'Anton', sans-serif;
    }
}
@media (min-width: ${breakpoints.md}) {

    .arrow {
        font-size: 2em;
    }
}

@media (min-width: ${breakpoints.lg}) {

    h4 {
        font-size: 2em;
    }
        
`


export default function CalendarHeader(props) {

    return (
        <Styles>
            <Container>
                <Row className="text-center align-items-center mb-md-3">
                    <Col onClick={props.prevMonth}>
                        <i class="fa fa-chevron-left arrow" aria-hidden="true"></i>
                    </Col>
                    <Col>
                        <span>
                            <h4>{dateFns.format(props.actualMonth, "MMMM yyyy")}</h4>
                        </span>
                    </Col>
                    <Col onClick={props.nextMonth}>
                        <i class="fa fa-chevron-right arrow" aria-hidden="true"></i>
                    </Col>
                </Row>
            </Container>
        </Styles>
    );
}
