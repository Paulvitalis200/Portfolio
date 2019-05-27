import React from 'react'
import styled from 'styled-components';
import { poppins } from '../styles/type';

class Footer extends React.Component {
    render() {
        return (
            <FooterBody>
                <FooterText>Copyright 2019 &copy; Paul Vitalis</FooterText>
            </FooterBody>
        )
    }
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
    font-size: 14px;
    font-family: ${poppins};
`;



export default Footer;