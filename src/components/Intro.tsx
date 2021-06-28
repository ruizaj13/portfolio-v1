import React, { FC } from "react";
import ObjModel from "./SkillsObject";
import Fade from 'react-reveal/Fade';
import Typewriter from 'typewriter-effect';
import { GithubOutlined, LinkedinFilled, MediumOutlined} from '@ant-design/icons';
import Styled from 'styled-components';


const IntroBlock = Styled.div`
    background-color: black;
    display: flex;
    width: 100%;
    height: 100vh;
    font-family:'Share Tech';
`

const TypeWriter = Styled.div`
    width: 40%;
    height: 50%;
    font-size: 250%;
    margin-left: 5%;
    margin-top: 10%;
    color: #3098ff;
    p {
        font-size: 50%;
        margin-top: 2%;
    }
`

const Icons = Styled.div`
    display: flex; 
    justify-content: space-evenly; 
    width: 30%;
    margin-left: 27%;
`

const Intro: FC = () => {
    

    return (
        <IntroBlock>
            <TypeWriter>
                <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString('Hey you!;')
                        .pauseFor(800)
                        .deleteAll()
                        .typeString('Welcome to my Portfolio!;')
                        .start();
                    }}
                    options={{
                        cursor: '▮',
                        autoStart: true,
                    }}
                />
            <Fade top delay={3000}>
                <p> 
                        Hi! My name's Juan and I'm a full-stack developer with a special love for front-end work. I've had a life-long 
                    passion for tech and always dreamt of learning to code. So after getting my Bachelor's from San Francisco State, 
                    I attended Lambda School to make that dream a reality and here I am! Best part is the learning never ends, I 
                    love nothing more than to adapt to new and exciting challenges, so I'm ready for anything!<br/> 
                    <br/>
                    Checkout the interactive 3D model I created which lists my growing skill set! 
                </p>
                <Icons>
                    <a href='https://www.github.com/ruizaj13' target='_blank' rel='noreferrer'><GithubOutlined /></a>
                    <a href='https://www.linkedin.com/in/ruizajdev/' target='_blank' rel='noreferrer'><LinkedinFilled/></a>
                    <a href='https://ruizaj13.medium.com/' target='_blank' rel='noreferrer'><MediumOutlined /></a>
                </Icons>
            </Fade>
            </TypeWriter>
            <ObjModel/> 
        </IntroBlock>
    );
}

export default Intro;