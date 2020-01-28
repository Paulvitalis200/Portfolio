import * as React from 'react';
import styled from 'styled-components';
import angular from '../assets/angular.svg';
import react from '../assets/react.png';
import flask from '../assets/flask-new.png';
import django from '../assets/djangorest.png';
import mongo from '../assets/mongo.png';
import postgres from '../assets/postgres.svg';
import node from '../assets/node.png';
import { montserrat } from '../styles/type';

export interface ProficienciesProps {

}

const Proficiencies: React.SFC<ProficienciesProps> = () => {
    return (
        <MainBody>
            <Heading id="proficiencies">My Stacks.</Heading>
            <SubBody>
                <Proficiency>
                    <img className="icons" src={angular} alt="Angular logo" />
                    <Text>Angular</Text>
                </Proficiency>
                <Proficiency>
                    <img className="icons" src={react} alt="React JS logo" />
                    <Text>React JS</Text>
                </Proficiency>
                <Proficiency>
                    <img className="icons" src={node} alt="Node JS logo" />
                    <Text>Node JS</Text>
                </Proficiency>
                <Proficiency>
                    <img className="icons" src={flask} alt="Flask logo" />
                    <Text>Flask</Text>
                </Proficiency>
                <Proficiency>
                    <img className="icons" src={django} alt="Django logo" />
                    <Text>Django REST</Text>
                </Proficiency>
                <Proficiency>
                    <img className="icons" src={mongo} alt="MongoDB logo" />
                    <Text>MongoDB</Text>
                </Proficiency>
                <Proficiency>
                    <img className="icons" src={postgres} alt="PostgreSQL logo" />
                    <Text>PostgreSQL</Text>
                </Proficiency>
            </SubBody>
        </MainBody>
    );
}

const MainBody = styled.div`
    background: #f7f7f7;
    max-width: 100%;
    padding: 0 20px;
`;

const Heading = styled.h1`
    font-size: 40px;
    font-weight: 900;
    text-align: center;
    font-family: ${montserrat}, Sans-serif;
    font-weight: 800;
    padding-top: 80px;
    color: #333;
`;

const SubBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Proficiency = styled.div`
   margin: 0 auto;
    .icons{
        margin-top: 40px;
        display: inline-block;
        text-align: center;
        height: 150px;
        width: 150px;
    }
    @media only screen and (min-width: 768px) {
        .icons {
            align-self: center;
            display: inline-block;
            text-align: center;
            height: 150px;
            width: 150px;
        }
    }
`;

// const Flask = styled.div`
//     width: 40%;
//     margin: 0 auto;
//     .icons-flask{
//         align-self: center;
//         margin-top: 40px;
//         text-align: center;
//         display: inline-block;
//         width: 100%;
//     }
//     @media only screen and (min-width: 768px) {
//         width: 10%;
//         .icons-flask {
//             align-self: center;
//             display: inline-block;
//             text-align: center;
//             width: 145%;
//         }
//     }
// `;

export const Text = styled.p`
    font-size: 20px;
    font-weight: bold;
    font-family: ${montserrat}, Sans-serif;
    letter-spacing: 1px;
    text-align: center;
    text-decoration: none;
    color: #333;
    @media only screen and (min-width: 600px) {
        font-size: 17px;
    }
    @media only screen and (min-width: 768px) {
        font-size: 20px;
    }
`;

export default Proficiencies;
