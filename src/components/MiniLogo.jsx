import React from 'react';
import styled from 'styled-components';
import logo from '../pictures/head.png';

const Styles = styled.div`

img {
    width: 5em;
  }
  

`

export default function MiniLogo() {
    return (
        <Styles className="d-flex align-items-center text-center">
            <h1 className="d-none d-sm-block">Barber</h1>
            <img
                className="p-3"
                src={logo}
                alt="logo"
            />
            <h1 className="d-none d-sm-block">Andrew</h1>
        </Styles>
    );
}
