import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Layout/Navigation/Navigation';
import Home from './Layout/Home/Home';
import Services from './Layout/Services/Services.jsx';
import Contact from './Layout/Contact/Contact';
import Footer from './Layout/Footer/Footer';
import Promo from './Layout/Promo/Promo';

export default function App() {

   return (
         <React.Fragment>
            <Navigation />
            <Home />
            <Services />
            <Contact />
            <Promo />
            <Footer />
         </React.Fragment>
   );
}

