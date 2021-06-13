import React, { FC } from 'react';
import { Button } from 'antd';
import { Link, Element} from 'react-scroll';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
        <div style={{ position: 'fixed', zIndex: 1, width: '25%', display: 'flex', justifyContent:'space-evenly', marginLeft:'75%', marginTop:'1%', background: 'transparent', listStyle: 'none'}}>
          <li><Link to='intro' spy={true} smooth={true} duration={500}>Intro</Link></li>
          <li><Link to='carousel' spy={true} smooth={true} duration={500}>Projects</Link></li>
          <li><Link to='contact' spy={true} smooth={true} duration={500}>Contact</Link></li>
        </div>
      <Element name='intro'>
        <Intro/>
      </Element>
      <Element name='carousel'>
        <Projects/>
      </Element>
      <Element name='contact'>
        <Contact/>
      </Element>
    </div>
  );
}

export default App; 
