import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import Calendar from './Calendar';

const Styles = styled.div`

`

export default function BookForm(props) {
    return (
        <Modal size='xl' {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Booking time
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Calendar />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

