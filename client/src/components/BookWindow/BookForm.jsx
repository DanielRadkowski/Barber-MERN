import React, { useState } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
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

        setState(() => {
            if (name === "customerName") {
                return {
                    customerName: value,
                    customerPhone: state.customerPhone,
                }
            } else {
                return {
                    customerName: state.customerName,
                    customerPhone: value,
                }
            }
        });
    }

    let handleSubmit = event => {
        event.preventDefault();

        const contactData = {
            name: state.customerName,
            phone: state.customerPhone,
            date: props.date,
            key: props.id,
            dayId: (props.day.length > 0) ? props.day[0]._id : null
        }

        axios.post('https://barber-andrew.herokuapp.com/barber/', contactData)
            .then(res => console.log(res.data));
        
        props.done();
    }

    return (
        <Styles>
            <Form className={`${state.done ? "d-none" : "" } `} onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        minLength="3"
                        name="customerName"
                        placeholder="Name"
                        onChange={handleChange}
                        value={state.customerName}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Your phone number</Form.Label>
                    <Form.Control
                        required
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                        name="customerPhone"
                        placeholder="123-456-789"
                        onChange={handleChange}
                        value={state.customerPhone}
                    />
                </Form.Group>               
                    <Button
                        className="mt-3"
                        variant="info"
                        type="submit"
                        size="lg"
                    >
                        Book visit!
                </Button>              
            </Form>
        </Styles>
    );
}