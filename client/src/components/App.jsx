import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Navigation from './Layout/Navigation/Navigation';
import Home from './Layout/Home/Home';
import Services from './Layout/Services/Services.jsx';
import Contact from './Layout/Contact/Contact';
import Footer from './Layout/Footer/Footer';
import Promo from './Layout/Promo/Promo';

const Styles = styled.div`

`

export default function App() {
   
   return (
         <Styles>
            <Navigation />
            <Home />
            <Services />
            <Contact />
            <Promo />
            <Footer />
         </Styles>
   );
}

