import React, { FC } from 'react';
import { Carousel } from 'antd';
import Styled from 'styled-components';

const ProjectCarousel = Styled.div`
    background-color: yellow;
    height: 100vh;
`

// const Arrow = ({ type, style, className, onClick }) => (
//     <Icon type={type} style={style} className{className} onClick={onClick}/>
// )

// const contentStyle = {
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
//   };

const Projects: FC = () => {
    return (
        <>
            <Carousel autoplay>
                <div>
                  <h3 style={{height:'100vh', color: '#fff', lineHeight: '160px', textAlign: 'center', background: '#364d79'}}>1</h3>
                </div>
                <div>
                  <h3 style={{height:'100vh', color: '#fff', lineHeight: '160px', textAlign: 'center', background: '#364d79'}}>2</h3>
                </div>
                <div>
                  <h3 style={{height:'100vh', color: '#fff', lineHeight: '160px', textAlign: 'center', background: '#364d79'}}>3</h3>
                </div>
                <div>
                  <h3 style={{height:'100vh', color: '#fff', lineHeight: '160px', textAlign: 'center', background: '#364d79'}}>4</h3>
                </div>
            </Carousel>
        </>
    )
}

export default Projects;