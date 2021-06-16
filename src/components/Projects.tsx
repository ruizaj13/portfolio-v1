import React, { FC } from 'react';
import {Carousel} from '3d-react-carousal';
import Styled from 'styled-components';
import hrfGif from '../assets/hrf-gif.gif';
import gitGif from '../assets/git-stats-gif.gif';
import nasaGif from '../assets/nasa-gif.gif';
import afGif from '../assets/AF-gif.gif';



const Wrapper = Styled.div`
  .text {
    position: absolute;
    color: white;
    background-color: red;
    bottom: 16%;
    left: 30%;
    width: 40%;
    height: 60%;
    visibility:hidden;
  }

  &:hover .text {
    visibility:visible;
  }
`

const slides = [
  <Wrapper>
    <img  src={gitGif} alt="1" />
    <p style={{textAlign:'center'}} className='text'>lorem ipsum</p>
  </Wrapper>,
  <Wrapper>
    <img src={hrfGif} alt="2"/>
    <p style={{textAlign:'center'}} className='text'>lorem ipsum</p>
  </Wrapper>,
  <Wrapper>
    <img src={nasaGif} alt="3"/>
    <p style={{textAlign:'center'}} className='text'>lorem ipsum</p>
  </Wrapper>,
  <Wrapper>
    <img src={afGif} alt="4"/>
    <p style={{textAlign:'center'}} className='text'>lorem ipsum</p>
  </Wrapper>,

];


const Projects: FC = () => {
    return (
      <div style={{ paddingTop:'10%', height: '100vh'}}>
        <Carousel slides={slides}/>  
      </div>
    )
}

export default Projects;