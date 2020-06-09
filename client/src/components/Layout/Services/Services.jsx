import React from 'react';
import SectionHeader from '../SectionHeader';
import ServiceCard from './ServiceCard';
import ServicesDescription from './ServicesDescription';
import { CardColumns } from 'react-bootstrap';
import styled from 'styled-components/macro';
import services from './servicesArray';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';


const Styles = styled.section`

background: #222831;

@media(min-width: ${breakpoints.xs}) {

  .card-columns {
    column-count: 1;
    width: 60vw;
  }
}

@media(min-width: ${breakpoints.sm}) {

  .card-columns {
    width: 55vw;
  }
}

@media(min-width: ${breakpoints.md}) {  

  .card-columns {
    column-count: 3;
    width: 80vw;
  }
}

@media(min-width: ${breakpoints.lg}) {  

  .card-columns {
    width: 70vw;
  }
}

`
let createCard = service => {
  return (
    <ServiceCard
      key={service.id}
      img={service.img}
      name={service.name}
      price={service.price}
    />
  );
}


export default function Services() {
  return (
    <Styles id="services" className="p-5">
      <SectionHeader name="Services" />
      <ServicesDescription />
      <CardColumns className="mx-auto">
        {services.map(createCard)}
      </CardColumns>
    </Styles>
  );



}
