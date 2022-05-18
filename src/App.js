import React from 'react'
import './App.css';
import Navbar from './portfolioComponents/Navbar/Navbar';
import Home from './portfolioComponents/Resume/Home';
import Testmonial from './portfolioComponents/Testmonials/Testmonial';
import About from './portfolioComponents/AboutMe/About';
import IntroAboutme from './portfolioComponents/Abbb/IntroAboutme';
import Portfolios from './portfolioComponents/Portfolios/Portfolios';
import Contacts from './portfolioComponents/Contact/Contacts';
import Services from './portfolioComponents/Services/Services';

function App() {
  return (
           <div>
              <Navbar />
              <Home />
              <About />
              <IntroAboutme />
              <Services />
              <Portfolios />
              <Testmonial />
              <Contacts />
            </div>
  )
}

export default App;