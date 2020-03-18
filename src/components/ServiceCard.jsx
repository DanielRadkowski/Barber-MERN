import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`


.card {
  font-size: 3.5vw;
   
}
.h5 {
  font-size: 2vw;
}

.card-img-top {
  width: 17vw;
}

.card-body {
  padding-bottom: 0;
}

@media(max-width: ${breakpoints.lg}) {  
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
  
  @media(max-width: ${breakpoints.md}) {
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
  
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

  }
  

`

function ServiceCard(props) {
    return (
        <Styles>
            <Card className="p-xs-1 p-xl-3 text-center">
                <Card.Img className="mx-auto" variant="top" src={Object.values(props.img)} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Styles>
    );
}

export default ServiceCard;