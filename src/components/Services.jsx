import React from 'react';
import SectionHeader from './SectionHeader';
import ServiceCard from './ServiceCard';
import { CardColumns } from 'react-bootstrap';
import styled from 'styled-components';
import services from '../services';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';


const Styles = styled.div`

background: #222831;


.distent {
  width: 70vw;
}

@media(max-width: ${breakpoints.lg}) {  
  .distent {
    width: 80vw;
  }
}

@media(max-width: ${breakpoints.md}) {
  .distent {
    width: 50vw;
  }
  
  .card-columns {
    column-count: 1;
  }
}


`
function createCard(service) {
  return (
    <ServiceCard
      key={service.id}
      img={service.img}
      name={service.name}
      price={service.price}
    />
  );
}


function Services() {
  return (
    <Styles id="services" className="p-5">
      <SectionHeader name="Services" />
      <CardColumns className="distent mx-auto">
        {services.map(createCard)}
      </CardColumns>
    </Styles>
  );



}

export default Services;