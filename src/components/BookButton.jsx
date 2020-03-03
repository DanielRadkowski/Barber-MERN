import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`


.btn-lg {
    font-size: 3.5vw;
    //font-family:'Work Sans', sans-serif;
    text-shadow: 0.25vw 0.25vw #000;
    color: white;
    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
        color: white;
    }
  }


  @media(max-width: ${breakpoints.md}) {

    .btn-lg {
      font-size: 5vw;
    }
  }
`

function BookButton() {

    return (
        <Styles>
            <Button variant="outline-light" className="Button" block size="lg" href="#">
                Book your visit now!
             </Button> 
        </Styles>
    );
}

export default BookButton;