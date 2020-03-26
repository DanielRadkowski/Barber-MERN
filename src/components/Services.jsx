import React from 'react';
import SectionHeader from './SectionHeader';
import ServiceCard from './ServiceCard';
import ServicesDescription from './ServicesDescription';
import { CardColumns } from 'react-bootstrap';
import styled from 'styled-components';
import services from '../services';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';


const Styles = styled.div`

background: #222831;

@media(min-width: ${breakpoints.xs}) {
  .distent {
    width: 50vw;
  }
  
  .card-columns {
    column-count: 1;
  }
}

@media(min-width: ${breakpoints.md}) {  
  .distent {
    width: 80vw;
  }
  .card-columns {
    column-count: 3;
  }
}

@media(min-width: ${breakpoints.lg}) {  
  .distent {
    width: 70vw;
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
      <ServicesDescription />
      <CardColumns className="distent mx-auto">
        {services.map(createCard)}
      </CardColumns>
    </Styles>
  );



}

export default Services;