import React from 'react';
import Home from './components/home';
import Services from './components/services';
import Proficiencies from './components/proficiencies';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import FooterBody from './components/footer';
import Navigation from './components/navigation';
import { BrowserRouter } from 'react-router-dom'



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Home />
        <Proficiencies />
        <Services />
        <Portfolio />
        <Contact />
        <FooterBody />
      </div>
    </BrowserRouter>
  );
}

export default App;
