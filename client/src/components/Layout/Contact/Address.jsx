import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`

  background: white;
  padding: 3px;
  h1 {
    font-size: 1.5em;
    padding: 0 0 5px;
  }

`

export default function Address() {
    return (
        <Styles>
          <h1>Barber Andrew</h1>
          <h6>Orzechowa 50</h6>
          <h6>50-540 Wrocław</h6>
        </Styles>
    );
}

