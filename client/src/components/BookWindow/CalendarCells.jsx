import React from 'react';
import styled from 'styled-components';
import * as dateFns from 'date-fns';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import { Container, Row, Col } from 'react-bootstrap';

const Styles = styled.div`

`
export default function CalendarCells(props) {

    const { currentMonth, selectedDate } = props.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = dateFns.endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";


    for (day; day <= endDate; day++) {
        for (let i = 0; i < 7; i++) {
            formattedDate = dateFns.format(day, "d");
            const cloneDay = day;
            days.push(
                <Col
                    className={` ${dateFns.isSameDay(day, selectedDate)
                        ? "text-danger"
                        : dateFns.isSameMonth(day, monthStart) ? "" : "text-muted"}`}

                    key={day}
                    onClick={() => props.onDateClick(cloneDay)}
                >
                    <span>{formattedDate}</span>
                </Col>
            );
            day = dateFns.addDays(day, 1);
        }
        rows.push(
            <Row className="text-center" key={day}>
                {days}
            </Row>
        );
        days = [];
    }

    return (
        <Styles>
            <Container>{rows}</Container>
        </Styles>
    );
}
