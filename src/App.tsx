import React from 'react';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
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
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <FooterBody /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
