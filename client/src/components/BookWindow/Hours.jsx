import React from 'react';
import styled from 'styled-components';
import * as dateFns from 'date-fns';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import { Tab, Row, Col, ListGroup } from 'react-bootstrap';
import BookForm from './BookForm'


const Styles = styled.div`

`

export default function Hours(props) {

    const selectedDate = props.state.selectedDate;
    const clients = props.state.clients;

    const hoursArray = ["9-00", "9-30", "10-00", "10-30", "11-00",
        "11-30", "12-00", "12-30", "13-00", "13-30", "14-00",
        "14-30", "15-00", "15-30", "16-00", "16-30", "17-00"];

    const hoursRanges = ["9.00 - 9.30", "9.30 - 10.00", "10.00 - 10.30", "10.30 - 11.00", "11.00 - 11.30",
        "11.30 - 12.00", "12.00 - 12.30", "12.30 - 13.00", "13.00 - 13.30", "13.30 - 14.00", "14.00 - 14.30",
        "14.30 - 15.00", "15.00 - 15.30", "15.30 - 16.00", "16.00 - 16.30", "16.30 - 17.00", "17.00 - 17.30"];

    // let hoursRanges = () => {
    //     let arr = [];
    //     for (let i = 9; i < 18; i++) {
    //        arr.push(((9 + i/3).floor().toString()) + "." + (i * )) 
    //     }
    // }

    //hoursSchemaProps();

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
                        href={"#" + i.toString()}
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
                if (day[0].hours[hoursArray[i]].name === null) {
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

    return (
        <Styles className="" >
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            {hoursTable().map(item => { return item.hour })}
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            {hoursTable().map(item => { return item.form })}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Styles>
    );
}