import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`


.btn {
    text-shadow: 0.25vw 0.25vw #000;
    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
        color: white;
    }
  }

  @media (min-width: ${breakpoints.xs}){

    .btn {
      width: 60vw;
      margin: 2vw 0 0 0;
      font-size: 5vw;  
    }
  }

  @media(min-width: ${breakpoints.md}) {

    .btn {
      width: 55vw;
      font-size: 5vw;
    }
  }

  @media(min-width: ${breakpoints.lg}) {
    .btn {
      width: 40vw;
      font-size: 3.5vw;
    }
  }

  @media(min-width: ${breakpoints.xl}) {
    .btn {
      width: 25vw;
    }
  }



`

export default function BookButton(props) {

    return (
        <Styles className="text-white w-100 mx-auto">
            <Button variant="outline-light" className="Button mx-auto" block size="lg" href="#">
                {props.name}
             </Button> 
        </Styles>
    );
}

