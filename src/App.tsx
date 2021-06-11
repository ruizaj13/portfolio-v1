import React, { FC } from 'react';
import { Button } from 'antd';
import Intro from './components/Intro';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <Intro/>
    </div>
  );
}

export default App; 
