import React from 'react';
import styled from 'styled-components';
import { poppins, montserrat } from '../styles/type';
import Pauly from '../assets/pauly.jpg';


export interface HomeProps {

}

const Home: React.SFC<HomeProps> = () => {
    return (
        <MainBody id="about">
            <AboutBody >
                <MyImage>
                    <img id="paul" src={Pauly} alt="Paul profile pic" />
                </MyImage>
                <TextArea>
                    <Title>Paul Vitalis Otieno.</Title>
                    <Description>Full stack Developer || UX/UI Designer</Description>
                    <TextBody>
                        Hello There. My name is <strong>Paul Vitalis Otieno</strong>. I am a Full-stack software engineer with 1+ years of experience in Software Engineering. I am passionate about great user experience and user interface design. <br />
                        Some of my interests are skateboarding,
                    playing guitar and graphic design.
                        </TextBody>
                    <ContactButton>
                        <a href="#contact" className="contact-btn">Contact Me</a>
                    </ContactButton>
                </TextArea>
            </AboutBody>
        </MainBody>
    );
}


const MainBody = styled.div`
    background: #fff;
    max-width: 100%;
    padding: 0 20px;
`;

const AboutBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding-top: 80px;
`;

const Description = styled.p`
    color: #9999;
    font-size: 15px;
    font-family: ${poppins};
`;

const TextArea = styled.div`
    width: 100%;
    margin: 0 auto;
    @media only screen and (min-width: 768px) {
        width: 50%;
    }
    
`;

const MyImage = styled.div`
    width: 100%;
    margin: 0;
    #paul{
        width: 60%;
        height: auto;
    }
    @media only screen and (min-width: 600px) {
        #paul{
            width: 20%;
            height: auto;
        }
    }
    @media only screen and (min-width: 768px) {
        width: 50%;
        #paul{
            width: 45%;
            height: auto;
        }
    }
`;

const Title = styled.span`
    font-size: 40px;
    font-family: ${ montserrat};
    font-weight: 900;
    color: #333;
`;

const TextBody = styled.p`
    font-size: 18px;
    color: #748182;
    font-family: ${poppins};
    line-height: 1.6;
`;

const ContactButton = styled.div`
    margin-top: 40px;
    .contact-btn{
        background: white;
        padding: 5px 20px 5px 20px;
        font-family: ${montserrat};
        border-radius: 4px;
        border: 1px solid black;
        text-decoration: none;
        font-size: 15px;
        color: #000;
    }

    .contact-btn:hover{
        background: black;
        color: #fff;
    }
`;

export default Home;