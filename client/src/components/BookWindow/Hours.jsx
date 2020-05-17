import React from 'react';
import styled from 'styled-components';
import * as dateFns from 'date-fns';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import { Tab, Row, Col, ListGroup } from 'react-bootstrap';
import BookForm from './BookForm';

const Styles = styled.div`

 
@media (min-width: ${breakpoints.xs}) {

    .hours-table {
        height: 100%;
    }

    .height-of-column {
        height: 15.5em;
    }
}

@media (min-width: ${breakpoints.lg}) {

    .height-of-column {
        left: 12.5em;
    }

    .move-table-left {
        left: 0;
    }
}
`

export default function Hours(props) {

    let Ranges = (openingHour, openingMinutes, numberOfHours) => {
        let arr = [];
        let startHour = dateFns.setMinutes(dateFns.setHours(new Date(), openingHour), openingMinutes);
        let endHour = 0;
        for (let i = 0; i <= (numberOfHours * 2) - 1; i++) {
            endHour = dateFns.addMinutes(startHour, 30);
            arr.push(dateFns.format(startHour, "H.mm") + " - " + dateFns.format(endHour, "H.mm"));
            startHour = endHour;
        }
        return arr;
    };

    let mongoHours = (openingHour, openingMinutes, numberOfHours) => {
        let arr = [];
        let startHour = dateFns.setMinutes(dateFns.setHours(new Date(), openingHour), openingMinutes);
        for (let i = 0; i < (numberOfHours * 2); i++) {
            arr.push(dateFns.format(startHour, "H-mm"));
            startHour = dateFns.addMinutes(startHour, 30);
        }
        return arr;
    };

    const hoursRanges = Ranges(9, 0, 8.5);
    const mongoHoursArray = mongoHours(9, 0, 8.5);

    const selectedDate = props.state.selectedDate;
    const clients = props.state.clients;
    const formattedDate = dateFns.format(selectedDate, "dd-MM-y");
    const day = clients.filter(client => {
        return client.date === formattedDate;
    });

    let hoursTable = () => {

        let availabeHour = i => {
            hoursList.push({
                hour: (
                    <ListGroup.Item
                        id={i}
                        action
                        variant="info"
                        href={"#" + i.toString()}
                        onClick={handleListClick}
                    >
                        {hoursRanges[i]}
                    </ListGroup.Item>
                ),

                form: (
                    <Tab.Pane eventKey={"#" + i.toString()}>
                        <BookForm
                            id={i}
                            date={formattedDate}
                            day={day}
                        />
                    </Tab.Pane>
                )
            });
        }

        let disableHour = i => {
            hoursList.push({
                hour: (
                    <ListGroup.Item
                        id={i}
                        disabled
                        href={"#" + i.toString()}
                    >
                        {hoursRanges[i]}
                    </ListGroup.Item>
                )
            });
        }

        let hoursList = [];
        for (let i = 0; i < hoursRanges.length; i++) {
            if (day.length > 0) {
                if (day[0].hours[mongoHoursArray[i]].name === null) {
                    availabeHour(i);
                } else {
                    disableHour(i);
                }
            } else {
                availabeHour(i);
            }
        }
        return hoursList;
    }

    let handleListClick = () => {
        var element1 = document.getElementById("listCol");
        element1.classList.add("move-table-left");
        var element2 = document.getElementById("formHeader");
        element2.classList.remove("invisible");
    }

    return (
        <Styles className="mt-3">
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row className="justify-content-center align-items-baseline">
                    <Col lg={6} id="listCol" className="mb-5 height-of-column positon-relative">
                        <h4 className="">Choose hour:</h4>
                        <ListGroup className="hours-table overflow-auto">
                            {hoursTable().map(item => { return item.hour })}
                        </ListGroup>
                    </Col>
                    <Col lg={6} className="mt-3">
                        <h4 id="formHeader" className="mb-3 invisible">Leave contact:</h4>
                        <Tab.Content>
                            {hoursTable().map(item => { return item.form })}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Styles>
    );
}