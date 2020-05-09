import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import * as dateFns from 'date-fns';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import { Button, Form } from 'react-bootstrap';


const Styles = styled.div`

`

export default function BookForm(props) {

    const [state, setState] = useState({
        customerName: "",
        customerPhone: ""
    });

    let handleChange = event => {
        const { value, name } = event.target;

        setState(prevValue => {
            if (name === "customerName") {
                return {
                    customerName: value,
                    customerPhone: prevValue.customerPhone,
                }
            } else {
                return {
                    customerName: prevValue.customerName,
                    customerPhone: value,
                }
            }
        });
    }

    let handleSubmit = e => {
        e.preventDefault();

        const contactData = {
            name: state.customerName,
            phone: state.customerPhone,
            date: props.date,
            key: props.id,
            dayId: (props.day.length > 0) ? props.day[0]._id : null
        }

        axios.post('http://localhost:5000/barber/', contactData)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    return (
        <Styles>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control
                        type="text"
                        name="customerName"
                        placeholder="Name"
                        onChange={handleChange}
                        value={state.customerName}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Your phone number</Form.Label>
                    <Form.Control
                        type="text"
                        name="customerPhone"
                        placeholder="Enter phone"
                        onChange={handleChange}
                        value={state.customerPhone}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                >
                    Book visit!
                </Button>
            </Form>
        </Styles>
    );
}