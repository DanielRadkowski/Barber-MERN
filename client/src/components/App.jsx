import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createGlobalStyle } from 'styled-components/macro';
import Navigation from './Layout/Navigation/Navigation';
import Home from './Layout/Home/Home';
import Services from './Layout/Services/Services.jsx';
import Contact from './Layout/Contact/Contact';
import Footer from './Layout/Footer/Footer';
import Promo from './Layout/Promo/Promo';

const GlobalStyle = createGlobalStyle`

* {
   font-family: 'Work Sans', sans-serif;
   scroll-behavior: smooth;
}

body {
   padding-top: 2.5rem;
   
}

h1 {
   font-family: 'Anton', sans-serif;
}
`

export default function App() {

   return (
      <React.Fragment>
         <Navigation />
         <Home />
         <Services />
         <Contact />
         <Promo />
         <Footer />
         <GlobalStyle />
      </React.Fragment>
   );
}

