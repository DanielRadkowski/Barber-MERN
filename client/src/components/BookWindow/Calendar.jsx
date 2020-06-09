import React, { useState, useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components/macro';
import * as dateFns from 'date-fns';
import Hours from './Hours';
import CalendarHeader from './CalendarHeader';
import CalendarWeekDays from './CalendarWeekDays';
import CalendarCells from './CalendarCells';
import moustache from '../../pictures/moustache-calendar.png';
import Thanks from './Thanks';

const Styles = styled.div`


`

export default function Calendar() {

    const [state, setState] = useState({
        currentMonth: new Date(),
        selectedDate: new Date(),
        currentDate: new Date(),
        clients: [],
        done: false
    });

    useEffect(() => {
        axios.get('https://barber-andrew.herokuapp.com/barber/')
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


        if (dateFns.isSameDay(day, state.currentDate) | dateFns.isAfter(day, state.currentDate)) {
            setState({
                currentMonth: state.currentMonth,
                selectedDate: day,
                currentDate: state.currentDate,
                clients: state.clients
            });            
        }
    }

    let thanksScreen = () => {
        setState({
            currentMonth: state.currentMonth,
            selectedDate: state.selectedDate,
            currentDate: state.currentDate,
            clients: state.clients,
            done: true
        })
    }

    return (
        <Styles>
            <Jumbotron className={`${state.done ? "d-none" : ""} pt-2 pt-md-4 pb-3 bg-white rounded text-center`}>
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
                done={thanksScreen}
            />
            <Thanks ready={state.done} className={`${state.done ? "d-flex" : "d-none"} `} />
        </Styles>
    );
}