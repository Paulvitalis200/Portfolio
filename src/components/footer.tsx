import React from 'react'
import styled from 'styled-components';
import { poppins } from '../styles/type';

export interface FooterProps {

}

const Footer: React.SFC<FooterProps> = () => {
    return (
        <FooterBody>
            <FooterText>&copy; 2020 Paul Vitalis Otieno</FooterText>
        </FooterBody>
    );
}

export const FooterBody = styled.div`
    background: #1c1c1c;
    height: 60px;
`;

export const FooterText = styled.p`
    color: #748182;
    padding-top: 20px;
    margin: 0;
    text-align: center;
    font-size: 17px;
    font-family: ${poppins}, Sans-serif;
`;



export default Footer;