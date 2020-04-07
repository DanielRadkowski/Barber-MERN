import React, { useState } from 'react';
import styled from 'styled-components';
import * as dateFns from 'date-fns';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import { Container, Row, Col } from 'react-bootstrap';
import Hours from './Hours';

const Styles = styled.div`

`



export default function Calendar() {

    const [state, setState] = useState({
        currentMonth: new Date(),
        selectedDate: new Date()
        // hoursWindow: "d-none"
    });

    const currentDate = new Date();

    function renderHeader() {
        const dateFormat = "MMMM yyyy";

        return (
            <Container>
                <Row className="text-center">
                    <Col>
                        <i className="arrow far fa-caret-square-left" onClick={prevMonth}></i>
                    </Col>
                    <Col>
                        <span>
                            {dateFns.format(state.currentMonth, dateFormat)}
                        </span>
                    </Col>
                    <Col>
                        <i className="arrow far fa-caret-square-right" onClick={nextMonth}></i>
                    </Col>
                </Row>
            </Container>
        );
    }

    function renderDays() {
        const dateFormat = "iiii";
        const days = [];

        let startDate = dateFns.startOfWeek(state.currentMonth, { weekStartsOn: 1 });

        for (let i = 0; i < 7; i++) {
            days.push(
                <Col key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </Col>
            );
        }

        return (
            <Container>
                <Row className="text-center">{days}</Row>
            </Container>
        );

    }

    function renderCells() {
        const { currentMonth, selectedDate } = state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart, { weekStartsOn: 1 });
        const endDate = dateFns.endOfWeek(monthEnd, { weekStartsOn: 1 });

        const dateFormat = "d";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";


        for (day; day <= endDate; day++) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <Col
                        className={` ${dateFns.isSameDay(day, selectedDate)
                            ? "text-danger"
                            : dateFns.isSameMonth(day, monthStart) ? "" : "text-muted"}`}

                        key={day}
                        onClick={() => onDateClick(cloneDay)}
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
        return <Container>{rows}</Container>
    }



    function onDateClick(day) {
        if (dateFns.isSameDay(currentDate, day) | dateFns.isBefore(currentDate, day)) {
            setState({
                currentMonth: state.currentMonth,
                selectedDate: day
                // hoursWindow: "d-block"
            });
        }
    }

    function nextMonth() {
        setState({
            currentMonth: dateFns.addMonths(state.currentMonth, 1),
            selectedDate: state.selectedDate
        });
    }

    function prevMonth() {
        if (dateFns.differenceInCalendarMonths(currentDate, state.currentMonth) < 0) {
            setState({
                currentMonth: dateFns.subMonths(state.currentMonth, 1),
                selectedDate: state.selectedDate
            });
        }
    }


    return (
        <Styles>
            {renderHeader()}
            {renderDays()}
            {renderCells()}
            {/* <Hours class={state.hoursWindow} /> */}
        </Styles>
    );
}