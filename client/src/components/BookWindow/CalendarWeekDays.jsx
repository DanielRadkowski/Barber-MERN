import React from 'react';
import styled from 'styled-components';
import * as dateFns from 'date-fns';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import { Container, Row, Col } from 'react-bootstrap';

const Styles = styled.div`

    .my-row {
        background: #343c4b;
    }
`

export default function CalendarWeekDays(props) {

    const days = [1, 2, 3, 4, 5, 6, 7].map(i =>
        <Col className="px-0 pt-1" key={i}>
            <h5 className="text-white font-weight-bold">{dateFns.format(dateFns.setDay(props.actualMonth, i), "iiiiii")}</h5>
        </Col>
    );
    return (
        <Styles>
            <Container className="">
                <Row className="my-row text-center border rounded">{days}</Row>
            </Container>
        </Styles>
    );

}