import React from 'react'
import styled from 'styled-components';
import { montserrat } from '../styles/type';

import Civilwar from '../assets/Civil-war.png';
import Galaxy from '../assets/galaxy34.png';
import Monkey from '../assets/monkey.png';
import Worktop from '../assets/worktop.png';
import Sword from '../assets/sword-3.png';
import Paul from '../assets/paul.png';

class Portfolio extends React.Component {
    render() {
        return (
            <PortfolioBody id="portfolio" >
                <Heading >Portfolio.</Heading>
                <Images>
                    <img className="portfolio-img" src={Civilwar} alt="civil-war"/>
                    <img className="portfolio-img" src={Galaxy} alt="Galaxy" />
                    <img className="portfolio-img" src={Monkey} alt="Monkey"></img>
                    <img className="portfolio-img" src={Worktop} alt="Worktop"/>
                    <img className="portfolio-img" src={Sword} alt="Sword" />
                    <img className="portfolio-img" src={Paul} alt="Paul" />
                </Images>
            </PortfolioBody>
        )
    }
}

const PortfolioBody = styled.div`
    width: 100%;
    background: #fff;
    
    
`;

const Images = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;
    .portfolio-img{
        width: 48%;
        margin: 0 auto 10px auto;
        height: 100%;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);

        @media only screen and (min-width: 768px) {
            width: 30%;
            margin-bottom: 15px;
        }
    }
`;

const Heading = styled.h1`
    font-size: 40px;
    font-weight: 900;
    text-align: center;
    font-family: ${montserrat};
    font-weight: 800;
    padding-top: 80px;
    color: #333;
`;



export default Portfolio;