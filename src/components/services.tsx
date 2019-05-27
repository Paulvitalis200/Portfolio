import React from 'react';
import styled from 'styled-components';
import { montserrat } from '../styles/type';

import Success from '../assets/html.png';
import Flyers from '../assets/flyers.png';
import Iphone from '../assets/iphone.png';

class services extends React.Component {
    render() {
        return (
            <MainBody id="services">
                <Heading>Services.</Heading>
                    <ServicesBody>
                    <WebDesign className="cards">
                        <img className="icons" src={Success} alt="Success"/>
                        <Text>Website Development</Text>
                        <TextBody>
                            I offer web design at a good price and a guarantee of good clean work.
                        </TextBody>
                    </WebDesign>
                    <Photography className="cards">
                        <img className="icons" src={Iphone} alt="Iphone"/>
                        <Text>Product Design</Text>
                        <TextBody>
                            I offer product design on stuff such as mobile apps, websites, company logos and t-shirt designs. 
                        </TextBody>
                    </Photography>
                    <Events className="cards">
                        <img className="icons" src={Flyers} alt="Assurance"/>
                        <Text>Quality Assurance</Text>
                        <TextBody>
                            I offer quality assurance on software products, unit tests and websites.
                        </TextBody>
                    </Events>
                </ServicesBody>
            </MainBody>
        )
    }
}

export const MainBody = styled.div`
    background: #f7f7f7;
    max-width: 100%;
`;

export const Heading = styled.p`
    text-align: center;
    font-size: 40px;
    font-family: ${montserrat};
    font-weight: 900;
    color: #333;
    padding-top: 80px;
`;

export const ServicesBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    .cards{
        width: 90%;
        height: 250px;
        background: #fff;
        box-shadow: 0px 10px 30px -8px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        margin: 0 auto 30px auto;
    }
    @media only screen and (min-width: 600px) {
        .cards {
            width: 30%;
            height: 200px;
        }

    }
    @media only screen and (min-width: 768px) {
        width: 90%;
        margin: 0 auto;
        .cards {
            width: 30%;
            height: 250px;
        }
    }
`;

export const Photography = styled.div`
    .icons{
        margin-top: 40px;
        display: inline-block;
        horizontal-align: center;
        text-align: center;
        height: 50px;
        width: 50px;
        @media only screen and (min-width: 600px) {
            margin-top: 25px;
            height: 35px;
            width: 35px;
        }
        @media only screen and (min-width: 768px) {
            height: 50px;
            width: 50px;
        }
    }

`;

export const Events = styled.div`
    .icons{
        margin-top: 40px;
        display: inline-block;
        horizontal-align: center;
        text-align: center;
        height: 50px;
        width: 50px;
        @media only screen and (min-width: 600px) {
            margin-top: 25px;
            height: 35px;
            width: 35px;
        }
        @media only screen and (min-width: 768px) {
            height: 50px;
            width: 50px;
        }
        
    }
`;

export const WebDesign = styled.div`
    .icons{
        margin-top: 40px;
        display: inline-block;
        horizontal-align: center;
        text-align: center;
        height: 50px;
        width: 50px;
        @media only screen and (min-width: 600px) {
            margin-top: 25px;
            height: 35px;
            width: 35px;
        }
        @media only screen and (min-width: 768px) {
            height: 50px;
            width: 50px;
        }
    }
`;


export const Text = styled.p`
    font-size: 20px;
    font-weight: bold;
    font-family: ${montserrat};
    letter-spacing: 1px;
    text-align: center;
    color: #333;
    @media only screen and (min-width: 600px) {
        font-size: 17px;
    }
    @media only screen and (min-width: 768px) {
        font-size: 20px;
    }
`;

export const TextBody = styled.p`
    padding-left: 10px;
    padding-right: 10px;
    font-family: ${montserrat};
    color: #748182;
    @media only screen and (min-width: 600px) {
        font-size: 13px
    }
    @media only screen and (min-width: 768px) {
        font-size: 16px;
    }
    
`;

export default services;
