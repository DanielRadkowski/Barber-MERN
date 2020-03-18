import React from 'react';
import styled from 'styled-components';
import logo from '../pictures/head.png';

const Styles = styled.div`

background: #eeeeee;
height: 19em;

img {
  width: 7em;
}

`

function Footer() {
  return (
    <Styles className="d-flex justify-content-between align-items-center">
      <div className="text-center px-5">
        <h1 className="mini-logo">Barber Andrew</h1>
        <img
          className=""
          src={logo}
          alt="logo"
        />
      </div>
      <div className="">
        <p>Connect me on:</p>
        <a href="#face"><i class="fab fa-facebook-square"></i></a>
        <a href="#insta"><i class="fab fa-instagram"></i></a>
        <a href="#twit"><i class="fab fa-twitter-square"></i></a>
      </div>
      <div className="px-5">
        <h3>E-mail:</h3>
        <h2>info@barber-andrew.com</h2>
        <h3>Call now and book your visit!</h3>
        <h2>659 852 666</h2>

      </div>

    </Styles>
  );



}

export default Footer;