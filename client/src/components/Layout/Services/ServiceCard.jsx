import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Card } from 'react-bootstrap';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import BookWindow from '../../BookWindow/BookWindow';

const Styles = styled.div`

@media (min-width: ${breakpoints.xs}) {

cursor: pointer; 

.card {
    font-size: 1.5em;   
  }
.h5 {
    font-size: 0.75em 
  }
  
.card-img-top {
    width: 50vw;
  }
}

@media(min-width: ${breakpoints.sm}) {

  .card {
      font-size: 6vw;   
    }
  .h5 {
      font-size: 4.5vw;
    }
    
  .card-img-top {
      width: 35vw;
    }  
}

@media(min-width: ${breakpoints.md}) {  

    .card {
        font-size: 4vw;     
      }
    .h5 {
        font-size: 2.5vw;
      }
    .card-img-top {
        width: 20vw;
      }
  }
  
@media(min-width: ${breakpoints.lg}) { 
  
  .card {
    font-size: 3.5vw;
   
  }
  .h5 {
    font-size: 2vw;
  }

  .card-img-top {
    width: 17vw;
  }
}
`

export default function ServiceCard(props) {

  const [modalShow, setModalShow] = useState(false);

    return (
        <Styles>
            <Card className="p-xs-1 p-xl-3 text-center" onClick={() => setModalShow(true)}>
                <Card.Img className="mx-auto" variant="top" src={Object.values(props.img)} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.price}
                    </Card.Text>
                </Card.Body>
            </Card>
            <BookWindow show={modalShow} onHide={() => setModalShow(false)} />
        </Styles>
    );
}
