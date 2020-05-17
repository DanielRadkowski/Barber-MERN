import React, { useState, useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import * as dateFns from 'date-fns';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import Hours from './Hours';
import CalendarHeader from './CalendarHeader';
import CalendarWeekDays from './CalendarWeekDays';
import CalendarCells from './CalendarCells';
import moustache from '../../pictures/moustache-calendar.png'

const Styles = styled.div`


`

export default function Calendar() {

    const [state, setState] = useState({
        currentMonth: new Date(),
        selectedDate: new Date(),
        currentDate: new Date(),
        clients: []
    });

    useEffect(() => {
        axios.get('http://localhost:5000/barber/')
            .then(response => {
                setState({
                    currentMonth: state.currentMonth,
                    selectedDate: state.selectedDate,
                    currentDate: state.currentDate,
                    clients: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    let nextMonth = () => {
        setState({
            currentMonth: dateFns.addMonths(state.currentMonth, 1),
            selectedDate: state.selectedDate,
            currentDate: state.currentDate,
            clients: state.clients
        });
    }

    let prevMonth = () => {
        if (dateFns.differenceInCalendarMonths(state.currentDate, state.currentMonth) < 0) {
            setState({
                currentMonth: dateFns.subMonths(state.currentMonth, 1),
                selectedDate: state.selectedDate,
                currentDate: state.currentDate,
                clients: state.clients
            });
        }
    }

    let onDateClick = day => {
        if (dateFns.isSameDay(state.currentDate, day) | dateFns.isBefore(state.currentDate, day)) {
            setState({
                currentMonth: state.currentMonth,
                selectedDate: day,
                currentDate: state.currentDate,
                clients: state.clients
            });

            // if (dateFns.differenceInCalendarMonths(state.currentMonth, state.selectedDate) > 0) {
            //     prevMonth();
            // } else if (dateFns.differenceInCalendarMonths(state.currentMonth, state.selectedDate) < 0) {
            //     nextMonth();
            // }
        }
    }

    return (
        <Styles>
            <Jumbotron className="pt-2 pt-md-4 pb-3 bg-white rounded text-center">
            <img src={moustache} alt="moustache" className="mw-100 pb-0 pb-md-4"></img>
                <CalendarHeader
                    prevMonth={prevMonth}
                    nextMonth={nextMonth}
                    actualMonth={state.currentMonth}
                />    
                <CalendarWeekDays
                    actualMonth={state.currentMonth}
                />
                <CalendarCells
                    state={state}
                    onDateClick={onDateClick}
                />
            </Jumbotron>
            <Hours
                state={state}
            />
        </Styles>
    );
}