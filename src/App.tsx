import React, { FC } from 'react';
import { Button } from 'antd';
import Intro from './components/Intro';
import Projects from './components/Projects';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <Intro/>
      <Projects/>
    </div>
  );
}

export default App; 
