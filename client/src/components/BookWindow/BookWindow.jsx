import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Calendar from './Calendar';
import styled from 'styled-components';

const StyledModal = styled(Modal)`

.modal-header {
    background: #d65a31;

    .modal-title {
        color: #fff;
        text-shadow: 0.1em 0.1em #000;
    }
}

.modal-body {
    background: #eeeeee;
}

.modal-footer {
    background: #eeeeee;
}

.my-btn {
    background: #343c4b;
}
`


export default function BookWindow(props) {

    return (
            <StyledModal 
                size='lg' 
                {...props} 
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3 className="my-0">Choose your term</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Calendar />
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        className="my-btn"
                        variant="secondary" 
                        onClick={props.onHide}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </StyledModal>
    );
}

