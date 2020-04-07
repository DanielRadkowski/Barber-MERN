import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Layout/Header';
import Home from './Layout/Home';
import Services from './Layout/Services';
import Contact from './Layout/Contact';
import Footer from './Layout/Footer';
import Promo from './Layout/Promo';

export default function App() {
   return (
      <React.Fragment>
        <Header />
        <Home />
        <Services />
        <Contact />
        <Promo />
        <Footer />
     </React.Fragment>
   );
}

