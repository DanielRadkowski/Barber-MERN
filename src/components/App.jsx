import React from 'react';
import Header from './Header';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   return (
      <React.Fragment>
        <Header />
        <Home />
        <Services />
        <Footer />
        
     </React.Fragment>
   );
    
    
   
}

export default App;