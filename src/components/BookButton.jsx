import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`


.btn-lg {
    width: 25vw;
    font-size: 3.5vw;
    text-shadow: 0.25vw 0.25vw #000;
    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
        color: white;
    }
  }
  @media(max-width: ${breakpoints.lg}) {
    .btn-lg {
      width: 40vw;
    }
  }

  @media(max-width: ${breakpoints.md}) {

    .btn-lg {
      width: 55vw;
      font-size: 5vw;
    }
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

    .btn-lg {
      width: 60vw;
      margin: 2vw 0 0 0;
    }
  }
`

function BookButton() {

    return (
        <Styles className="text-white w-100 mx-auto">
            <Button variant="outline-light" className="Button mx-auto" block size="lg" href="#">
                Book your visit now!
             </Button> 
        </Styles>
    );
}

export default BookButton;