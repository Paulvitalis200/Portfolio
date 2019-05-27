import React from 'react';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import FooterBody from './components/footer';
import Navigation from './components/navigation';


const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <FooterBody /> 
    </div>
  );
}

export default App;
