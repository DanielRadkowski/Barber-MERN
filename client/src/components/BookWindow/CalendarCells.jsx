import React from 'react';
import styled from 'styled-components';
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

    .unavailable-cell {
        color: #e0e2eb !important;
    }

    .choosen-cell {
        background: url(${circle});
        background-size: 2.5em;
        background-repeat: no-repeat;
        background-position: center;
        padding: 10px 0;
        margin: -10px 0;
        border-style: none;
    }
    .available-cell {
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
}
@media (min-width: ${breakpoints.sm}) {

    .cell {
        font-size: 1.5em;
    }
    .choosen-cell { 
        background-size: 3.5em;      
        padding: 15px 0;
        margin: -15px 0;     
    }
    .available-cell {
        &:hover {
            background-size: 3.5em;
            padding: 15px 0;
            margin: -15px 0;            
        }
    }   
}

@media (min-width: ${breakpoints.md}) {

}  

@media (min-width: ${breakpoints.lg}) {

    .choosen-cell { 
        background-size: 4em;      
        padding: 20px 0;
        margin: -20px 0;     
    }
    .available-cell {
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
                        ${dateFns.isSameDay(currentDate, day) | dateFns.isBefore(currentDate, day)
                        ? "available-cell" : "unavailable-cell"}
                        ${dateFns.isSameDay(day, selectedDate)
                        ? "choosen-cell" : dateFns.isSameMonth(day, monthStart) ? "" : "text-muted"} 
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
