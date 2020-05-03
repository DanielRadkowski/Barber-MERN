import React from 'react';
import styled from 'styled-components';
import * as dateFns from 'date-fns';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import { Container, Row, Col } from 'react-bootstrap';

const Styles = styled.div`

`


export default function CalendarHeader(props) {

    return (
        <Styles>
            <Container>
                <Row className="text-center">
                    <Col>
                        <i className="arrow far fa-caret-square-left" onClick={props.prevMonth}></i>
                    </Col>
                    <Col>
                        <span>
                            {dateFns.format(props.actualMonth, "MMMM yyyy")}
                        </span>
                    </Col>
                    <Col>
                        <i className="arrow far fa-caret-square-right" onClick={props.nextMonth}></i>
                    </Col>
                </Row>
            </Container>
        </Styles>
    );
}
