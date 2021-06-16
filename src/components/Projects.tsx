import React, { FC } from 'react';
import {Carousel} from '3d-react-carousal';
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons';
import Styled from 'styled-components';
import hrfGif from '../assets/hrf-gif.gif';
import gitGif from '../assets/git-stats-gif.gif';
import nasaGif from '../assets/nasa-gif.gif';
import afGif from '../assets/AF-gif.gif';



const Wrapper = Styled.div`
  .text {
    position: absolute;
    color: white;
    background-color:rgba(85, 85, 85, 0.6);
    bottom: 16%;
    left: 27%;
    width: 45%;
    height: 65%;
    visibility: hidden;
    padding-top: 2.5%;
    padding-left: 1%;
    padding-right: 1%;
    font-family:'Share Tech';
  }

  &:hover .text {
    visibility:visible;
  }
`

const slides = [
  <Wrapper>
    <img  src={gitGif} alt="git-stats" />
    <p style={{textAlign:'center'}} className='text'>
      Git Stats <br/>
      <br/>
      React.JS | Redux | Ant Design | Github Polyglot | Chart.JS <br/>
      Your one stop shop for github profile stats. Implemented multiple design libraries 
      such as Ant Design and React.JS Particles to achieve a polished look. Used Chart.JS
      which is a React wrapper of React Chart.JS 2 to visualize JSON data from Github Polyglot.
      <br/>
      <a href='https://github.com/ruizaj13/gitStats' target='_blank' rel='noreferrer' style={{textAlign:'center', color:'white'}}><GithubOutlined /></a>
      <a href='https://git-stats-xi.vercel.app/' target='_blank' rel='noreferrer' style={{textAlign:'center', color:'white', marginLeft:'2%'}}><GlobalOutlined/></a>
    </p>
  </Wrapper>,
  <Wrapper>
    <img src={hrfGif} alt="hrf-asylum"/>
    <p style={{textAlign:'center', marginBottom:'2%'}} className='text'>
      Human Rights First - Asylum <br/>
      <br/>
      React.js | Context API | React-pdf | Material-UI <br/>
      Worked on a cross functional team to bring the application from its inherited state to a 
      minimum viable product within four weeks. The platform aggregates asylum case data to supplement 
      attorneys' planning and strategization. I handled the implementation of a PDF export button using 
      the React-PDF library to dynamically render custom pdf files. I also worked collaboratively with 
      stakeholders to establish a proper FAQ for user's reference.
      <br/>
      <a href='http://bit.ly/HRF-Asylum' target='_blank' rel='noreferrer' style={{textAlign:'center', color:'white'}}><GithubOutlined /></a>
      <a href='https://a.humanrightsfirstasylum.dev/login' target='_blank' rel='noreferrer' style={{textAlign:'center', color:'white', marginLeft:'2%'}}><GlobalOutlined/></a>
    </p>
  </Wrapper>,
  <Wrapper>
    <img src={nasaGif} alt="nasa-apod"/>
    <p style={{textAlign:'center'}} className='text'>
      NASA Photo of the Day<br/>
      <br/>
      React.js | Context API | Axios | React Router<br/>
      Single page application with Axios and context API implementation to make http 
      requests to Nasa's APOD API and then dynamically displaying both image and video
      API responses.
      <br/>
      <a href='https://github.com/ruizaj13/NASA-APP' target='_blank' rel='noreferrer' style={{textAlign:'center', color:'white'}}><GithubOutlined /></a>
      <a href='https://nasa-app-portfolio.vercel.app/' target='_blank' rel='noreferrer' style={{textAlign:'center', color:'white', marginLeft:'2%'}}><GlobalOutlined/></a>
    </p>
  </Wrapper>,
  <Wrapper>
    <img src={afGif} alt="anywhere-fitness"/>
    <p style={{textAlign:'center'}} className='text'>
      Anywhere-Fitness<br/>
      <br/>
      Node.js | Express | Knex | SQL | JWT | Bcrypt<br/>
      Powered a full-stack web application by building a RESTful API and deploying via 
      Heroku for the front-end team. I setup endpoints with SQL queries to manipulate data 
      tables and persist data. Password hashing, verification, and storing was handled with 
      Bcrypt. Tested with Jest.
      <br/>
      <a href='https://github.com/ruizaj13/Anywhere-Fitness-Back-end' target='_blank' rel='noreferrer' style={{textAlign:'center', color:'white'}}><GithubOutlined /></a>
      <a href='https://anywhere-fitness-tt2.vercel.app/' target='_blank' rel='noreferrer' style={{textAlign:'center', color:'white', marginLeft:'2%'}}><GlobalOutlined/></a> 
    </p>
  </Wrapper>,
];


const Projects: FC = () => {
    return (
      <div style={{ paddingTop:'15%', height: '100vh'}}>
        <Carousel slides={slides}/>  
      </div>
    )
}

export default Projects;