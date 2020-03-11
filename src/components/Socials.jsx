import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`

z-index: 2;
position: relative;

a {
    color: #fff;
    text-decoration: none;
  }
.social {
    position: fixed;
    top: 40vw;
  }
.social ul {
    padding: 0px;
    -webkit-transform: translate(-250px, 0);
    -moz-transform: translate(-250px, 0);
    -ms-transform: translate(-250px, 0);
    -o-transform: translate(-250px, 0);
    transform: translate(-250px, 0);
  }
.social ul li {
    display: block;
    margin: 5px;
    background: rgba(0, 0, 0, 0.36);
    width: 300px;
    text-align: right;
    padding: 10px;
    -webkit-border-radius: 0 300px 300px 0;
    -moz-border-radius: 0 300px 300px 0;
    border-radius: 0 300px 300px 0;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
  }
  .social ul li:hover {
    -webkit-transform: translate(110px, 0);
    -moz-transform: translate(110px, 0);
    -ms-transform: translate(110px, 0);
    -o-transform: translate(110px, 0);
    transform: translate(110px, 0);
    background: rgba(255, 255, 255, 0.4);
  }
  .social ul li:hover a {
    color: #000;
  }
  .social ul li:hover i {
    color: #fff;
    background: rgba(0, 0, 0, 0.36);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
  }
  .social ul li i {
    margin-left: 10px;
    color: #000;
    background: #fff;
    padding: 10px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    font-size: 1.25em;
    background: #ffffff;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
`

function Socials() {
    return (
        <Styles>
            <nav class="social">
                <ul>
                    <li><a href="#">Twitter <i class="fa fa-twitter"></i></a></li>
                    <li><a href="#">Github <i class="fa fa-github"></i></a></li>
                    <li><a href="#">Linkedin <i class="fa fa-linkedin"></i></a></li>
                </ul>
            </nav>
        </Styles>
    );
}

export default Socials;