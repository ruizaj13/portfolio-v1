import React, { FC } from 'react';
import { Button } from 'antd';
import { Link, Element} from 'react-scroll';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Styled from 'styled-components';
import './App.css';

const Nav = Styled.div`
  position: fixed; 
  z-index: 1; 
  width: 25%;
  display: flex; 
  justify-content: space-evenly; 
  margin-left: 75%;
  margin-top: 1%;
  background: transparent; 
  list-style: none;
  color: #3098ff;
  font-family:'Share Tech';
  font-size: 115%;
`


const App: FC = () => {
  return (
    <div className="App">
        <Nav>
          <li><Link to='intro' spy={true} smooth={true} duration={500}>Intro</Link></li>
          <li><Link to='carousel' spy={true} smooth={true} duration={500}>Projects</Link></li>
          <li><Link to='contact' spy={true} smooth={true} duration={500}>Contact</Link></li>
        </Nav>
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
