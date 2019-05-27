import React from 'react'
import styled from 'styled-components';
import Snow from '../assets/Snow.jpg';
import { montserrat } from '../styles/type';

class Home extends React.Component {
    render() {
        return (
            <HomeBody id="home">
                <img className="main-img" src={Snow} alt="Main"/>
                <Hello>Hello!</Hello>
                <NameText>
                    My name's Paul.
                </NameText>
                <WelcomeText>
                    Welcome to my Design Portfolio.
                </WelcomeText>
            </HomeBody>
        )
    }
}

const HomeBody = styled.div`
    .main-img{
        object-fit: cover;
        width: 100%;
        height: 100vh;
    }
`;

const NameText = styled.div`
    position: absolute;
    top: 51%;
    left: 50%;
    text-align: center;
    width: 100%;
    color: #fff;
    font-size: ;
    font-family: ${montserrat};
    transform: translate(-50%, -50%);  
    @media only screen and (min-width: 600px) {
        font-size: 25px;
    }
`;

const Hello = styled.div`
    position: absolute;
    top: 42%;
    left: 50%;
    color: #fff;
    width: 100%;
    text-align: center
    font-size: 25px;
    font-family: ${montserrat};
    font-weight: 800;
    transform: translate(-50%, -50%);
    @media only screen and (min-width: 600px) {
        font-size: 40px;
    }
`;

const WelcomeText= styled.div`
    position: absolute;
    top: 59%;
    left: 50%;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 100%;
    font-weight: 500;
    font-family: ${montserrat};
    transform: translate(-50%, -50%);
    @media only screen and (min-width: 600px) {
        font-size: 25px;
    }
`;


export default Home;