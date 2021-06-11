import React, { FC } from "react";
import Fade from 'react-reveal/Fade';
import Typewriter from 'typewriter-effect';
import { Avatar, Image } from 'antd';
import { GithubOutlined, LinkedinFilled, UserOutlined } from '@ant-design/icons';
import Styled from 'styled-components';

const IntroBlock = Styled.div`
    background-color: red;
    display: flex;
    width: 100%;
    height: 100vh;
`

const TypeWriter = Styled.div`
    background-color: yellow;
    width: 40%;
    height: 50%;
    font-size: 250%;
    margin-left: 5%;
    margin-top: 10%;
    p {
        font-size: 50%;
        margin-top: 2%;
    }
`

const Icons = Styled.div`
    display: flex; 
    justify-content: space-evenly; 
    width: 30%;
    margin-left: 35%;
`

const Photo = Styled(Avatar)`
    margin-left: 20%;
    margin-top: 15%;
`

const Intro: FC = () => {
    

    return (
        <IntroBlock>
            <TypeWriter>
                <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString('Hello World!;')
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam odio alias in ipsam iusto aut suscipit, 
                    totam voluptatem, rem quibusdam corporis error magnam, fugit eaque nemo. Architecto, esse error. Atque!
                </p>
                <Icons>
                    <GithubOutlined />
                    <LinkedinFilled />
                </Icons>
            </Fade>
            </TypeWriter>
            <Photo size={264}  src='../assets/face.jpg'/>
        </IntroBlock>
    );
}

export default Intro;