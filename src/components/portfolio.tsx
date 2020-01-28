import * as React from 'react';
import styled from 'styled-components';
import { poppins, montserrat } from '../styles/type';
import storemanager from '../assets/storemanager.png';
import design from '../assets/Design.png';
import restaurant from '../assets/Restaurant.png';
import roo from '../assets/roo.png';

export interface PortfolioProps {

}

const Portfolio: React.SFC<PortfolioProps> = () => {
    return (
        <MainBody>
            <Heading id="portfolio">Portfolio.</Heading>
            <PortfolioBody>
                <Project >
                    <img className="portfolio-img" src={design} alt="Design portfolio" />
                    <TextBody>
                        <Title>Design Portfolio</Title>
                        <Text>
                            This is my design portfolio where I display some of my graphic Design work.<br />
                            <Button>
                                <a href="https://github.com/Paulstar200/Design-portfolio" rel="noopener noreferrer" target="_blank" className="read-btn">Github repo</a>
                            </Button>
                            <Button>
                                <a href="https://veeportfolio.netlify.com" target="_blank" rel="noopener noreferrer" className="read-btn">Website</a>
                            </Button>
                        </Text>
                    </TextBody>
                </Project>
                <Project className="roo-img" >
                    <img className="portfolio-img" src={roo} alt="Roo" />
                    <TextBody>
                        <Title>Roo</Title>
                        <Text>
                            Roo is a chatbot that helps people to make sound financial decisions. I worked as part of an amazing team for 4 months to deliver this product.<br />
                            <Button>
                                <a href="https://helloroo.org" rel="noopener noreferrer" target="_blank" className="read-btn">Website</a>
                            </Button>
                        </Text>
                    </TextBody>
                </Project>
                <Project className="design-portfolio">
                    <img className="portfolio-img" src={restaurant} alt="Restaurant app" />
                    <TextBody>
                        <Title>R4U</Title>
                        <Text>
                            A restaurant application that users can use to know if a certain restaurant is opened or closed based on the current time. <br />
                            <Button>
                                <a href="https://github.com/Paulstar200/Restaurant-1" rel="noopener noreferrer" target="_blank" className="read-btn">Github repo</a>
                            </Button>
                            <Button>
                                <a href="https://restaurant-app-2.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="read-btn">Website</a>
                            </Button>
                        </Text>
                    </TextBody>
                </Project>
                <Project className="store-manager" >
                    <img className="portfolio-img" src={storemanager} alt="Store manager" />
                    <TextBody>
                        <Title>Store Manager</Title>
                        <Text>
                            Store Manager is a web application that helps store owners manage sales and product inventory records.<br />
                            <Button>
                                <a href="https://github.com/Paulstar200/Store-Manager" rel="noopener noreferrer" target="_blank" className="read-btn">Github repo</a>
                            </Button>
                            <Button>
                                <a href="https://paulstar200.github.io/Store-Manager/UI/index.html" rel="noopener noreferrer" target="_blank" className="read-btn">Website</a>
                            </Button>
                        </Text>
                    </TextBody>
                </Project>


            </PortfolioBody>
        </MainBody >
    );
}

const MainBody = styled.div`
    background: #f7f7f7;    
`;

const Heading = styled.h1`
    font-size: 40px;
    font-weight: 900;
    text-align: center;
    font-family: ${montserrat}, Sans-serif;
    font-weight: 800;
    margin: 0 0 20px 0;
    padding-top: 80px;
    color: #333;
    @media only screen and (min-width: 768px) {
        margin-bottom: 40px;
    }
`;

const PortfolioBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    @media only screen and (min-width: 768px) {
        
        margin: 0 auto;
        .store-manager, .roo-img{
            flex-direction: row-reverse;
        }
    }

`;

const Project = styled.div`
    text-align: center;
    
    .portfolio-img{
        width: 80%;
        border-radius: 1%;
        box-shadow: 3px 3px 10px 5px rgba(211,211,211, 0.5);
    }
    @media only screen and (min-width: 768px) {
        display: flex;
        width: 85%;
        justify-content: space-between;
        margin: 0 auto 40px auto;
        .portfolio-img{
            align-self: center;
            width: 45%;
            border-radius: 1%;
            box-shadow: 3px 3px 10px 5px rgba(211,211,211, 0.5);
        }
        
    }
`;

const TextBody = styled.div`
    font-family: ${poppins}, Sans-serif;
    font-size: 18px;
    color: #748182;
    margin-bottom: 50px;
    @media only screen and (min-width: 768px) {
        padding-left: 20px;
    }
`;

const Title = styled.h1`
    font-family: ${montserrat}, Sans-serif;
`;

const Text = styled.div``;

const Button = styled.div`
    margin-top: 15px;
    .read-btn{
        background: white;
        padding: 5px 20px 5px 20px;
        font-family: ${montserrat}, Sans-serif;
        border-radius: 4px;
        border: 1px solid black;
        text-decoration: none;
        font-size: 15px;
        color: #000;
    }

    .read-btn:hover{
        background: #000;
        color: #fff;
    }
`;

export default Portfolio;