import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import Promo from './Promo';

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

