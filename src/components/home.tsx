import React from 'react';
import styled from 'styled-components';
import { poppins, montserrat } from '../styles/type';
import Pauly from '../assets/pauly.jpg';
import github from '../assets/github-logo.svg';
import linkedin from '../assets/linkedin.svg';

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
                    <Description>Software Engineer | UX/UI Designer</Description>
                    <TextBody>
                        Hello There. My name is <strong>Paul Vitalis Otieno</strong>.
                        I'm a Full-stack software engineer based in Nairobi, Kenya.
                        I love solving problems through code and learning new skills.
                        I am passionate about great user experience and user interface design.
                    </TextBody>
                    <ContactButton>
                        <a href="#contact" className="contact-btn">Contact Me</a>
                    </ContactButton>
                    <Social>
                        <SocialLinks>
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/Paulstar200"><img className="github-logo" src={github} alt="Github logo" /></a>

                        </SocialLinks>

                        <SocialLinks>

                            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/paul-otieno-66740889/"><img className="linkedin-logo" src={linkedin} alt="Linkedin logo" /></a>
                        </SocialLinks>
                    </Social>

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
    color: #333;
    font-size: 16px;
    font-family: ${poppins}, Sans-serif;
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
    font-family: ${ montserrat}, Sans-serif;
    font-weight: 900;
    color: #333;
`;

const TextBody = styled.p`
    font-size: 19px;
    color: #748182;
    font-family: ${poppins}, Sans-serif;
    line-height: 1.6;
`;

const ContactButton = styled.div`
    margin-top: 40px;
    .contact-btn{
        background: white;
        padding: 5px 20px 5px 20px;
        font-family: ${montserrat}, Sans-serif;
        border-radius: 4px;
        border: 1px solid black;
        text-decoration: none;
        font-size: 16px;
        color: #000;
    }

    .contact-btn:hover{
        background: black;
        color: #fff;
    }
`;

const Social = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin: 0 auto;
    @media only screen and (min-width: 768px) {
        width: 10%;
    }
`;

const SocialLinks = styled.div`
    width: 20%;
    margin: 30px auto 0 auto;
    
    .github-logo{
        width: 100%;
    }
    .linkedin-logo{
       width: 100%;
    }

    @media only screen and (min-width: 768px) {
        .github-logo,
        .linkedin-logo{
            width: 140%;
            filter: invert(.5);
        }
        .linkedin-logo:hover,
        .github-logo:hover{
            filter: invert(0);
        }
    }
`;

export default Home;