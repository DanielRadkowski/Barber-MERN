import React from 'react';
import styled from 'styled-components';
import * as dateFns from 'date-fns';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import { Container, Row, Col } from 'react-bootstrap';

const Styles = styled.div`

`

export default function CalendarWeekDays(props) {

    const days = [1, 2, 3, 4, 5, 6, 7].map(i =>
        <Col key={i}>
            {dateFns.format(dateFns.setDay(props.actualMonth, i), "iiii")}
        </Col>
    );
    return (
        <Styles>
            <Container>
                <Row className="text-center">{days}</Row>
            </Container>
        </Styles>
    );

}