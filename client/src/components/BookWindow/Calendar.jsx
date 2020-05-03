import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as dateFns from 'date-fns';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import Hours from './Hours';
import CalendarHeader from './CalendarHeader';
import CalendarWeekDays from './CalendarWeekDays';
import CalendarCells from './CalendarCells';

const Styles = styled.div`

`

export default function Calendar() {

    const [state, setState] = useState({
        currentMonth: new Date(),
        selectedDate: new Date(),
        clients: []
    });

    const currentDate = new Date();

    useEffect(() => {
        axios.get('http://localhost:5000/barber/')
      .then(response => {
        setState({
            currentMonth: state.currentMonth,
            selectedDate: state.selectedDate, 
            clients: response.data 
            })
      })
      .catch((error) => {
        console.log(error);
      })
      }, []);
    
      console.log(state.clients);


    let nextMonth = () => {
        setState({
            currentMonth: dateFns.addMonths(state.currentMonth, 1),
            selectedDate: state.selectedDate,
            clients: state.clients
        });
    }

    let prevMonth = () => {
        if (dateFns.differenceInCalendarMonths(currentDate, state.currentMonth) < 0) {
            setState({
                currentMonth: dateFns.subMonths(state.currentMonth, 1),
                selectedDate: state.selectedDate,
                clients: state.clients
            });
        }
    }

    let onDateClick = day => {
        if (dateFns.isSameDay(currentDate, day) | dateFns.isBefore(currentDate, day)) {
            setState({
                currentMonth: state.currentMonth,
                selectedDate: day,
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
            <Hours 
                date={dateFns.format(state.selectedDate,"dd-MM-y")}
                clients={state.clients}
   