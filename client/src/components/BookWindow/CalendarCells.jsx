import React from 'react';
import styled from 'styled-components/macro';
import * as dateFns from 'date-fns';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import { Container, Row, Col } from 'react-bootstrap';
import circle from '../../pictures/red-circle.png';


const Styles = styled.div`

@media (min-width: ${breakpoints.xs}) {

    .cell {
        font-family: 'Anton', sans-serif;
        font-size: 1.25em;
    }

    .cell--unavailable {
        color: #e0e2eb !important;
    }

    .cell--sunday {
        color: #cc0000;
    }

    .cell--choosen {
        background: url(${circle});
        background-size: 2.5em;
        background-repeat: no-repeat;
        background-position: center;
        padding: 10px 0;
        margin: -10px 0;
        border-style: none;
    }
    
    .cell--available {
        &:hover {
            cursor: pointer;
            background: url(${circle});
            background-size: 2.5em;
            background-repeat: no-repeat;
            background-position: center;
            padding: 10px 0;
            margin: -10px 0;
            border-style: none;
        }
    }

    .off-pointer-events {
        pointer-events : none;
    }
}
@media (min-width: ${breakpoints.sm}) {

    .cell {
        font-size: 1.5em;
    }
    .cell--choosen { 
        background-size: 3.5em;      
        padding: 15px 0;
        margin: -15px 0;     
    }
    .cell--available {
        &:hover {
            background-size: 3.5em;
            padding: 15px 0;
            margin: -15px 0;            
        }
    }   
}

@media (min-width: ${breakpoints.lg}) {

    .cell--choosen { 
        background-size: 4em;      
        padding: 20px 0;
        margin: -20px 0;     
    }
    .cell--available {
        &:hover {
            background-size: 4em;
            padding: 20px 0;
            margin: -20px 0;             
        }
    }
}    
`

export default function CalendarCells(props) {

    const { currentMonth, selectedDate, currentDate } = props.state;
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
                    className={`
                        ${!(dateFns.isSunday(day)) & (dateFns.isSameDay(day, currentDate) | dateFns.isAfter(day, currentDate))
                        ? "cell--available" : dateFns.isSunday(day) ? "cell--sunday off-pointer-events" : "cell--unavailable"}
                        ${dateFns.isSameDay(day, selectedDate)
                        ? "cell--choosen" : dateFns.isSameMonth(day, monthStart) ? "" : "text-muted off-pointer-events"} 
                        px-0
                        `}

                    key={day}
                    onClick={() => props.onDateClick(cloneDay)}
                >
                    <span className="cell">{formattedDate}</span>
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
