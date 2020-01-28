import React from 'react';
import styled from 'styled-components';
import { montserrat } from '../styles/type'

export interface ContactProps {

}

const Contact: React.SFC<ContactProps> = () => {
    return (
        <MainContactBody >
            <Heading id="contact" >Contact.</Heading>
            <FlexBody>
                <ContactBody>
                    <EmailBody>
                        <Text>Email</Text>
                        <TextBody>
                            vitalispaul48@live.com
                        </TextBody>
                    </EmailBody>
                    <PhoneBody>
                        <Text>Phone</Text>
                        <TextBody>
                            +254 726 840 589
                        </TextBody>
                    </PhoneBody>
                    <AddressBody>
                        <Text>Address</Text>
                        <TextBody>
                            P.O Box 66963, NAIROBI KENYA
                        </TextBody>
                    </AddressBody>
                </ContactBody>
                <FormBody action="https://formspree.io/mqkpjkll" method="POST">
                    <UpperForm>
                        <input className="upper-form-field" type="text" name="name" placeholder="Name" />
                        <input className="upper-form-field" type="email" name="_replyto" placeholder="Email" />
                    </UpperForm>
                    <LowerForm>
                        <textarea className="input-textarea" placeholder="Message" name="name"></textarea>
                    </LowerForm>
                    <SubmitButton>
                        <input id="submit-btn" type="submit" value="Send" />
                    </SubmitButton>
                </FormBody>
            </FlexBody>
        </MainContactBody>
    );
}




const MainContactBody = styled.div`
    background: #fff;
    padding-bottom: 40px;
    width: 100%;
`;

const Heading = styled.p`
    text-align: center;
    font-size: 40px;
    font-family: ${montserrat}, Sans-serif;
    font-weight: 800;
    color: #333;
    margin: 0;
    padding-top: 80px;
`;

const ContactBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 77%;
    margin: 0 auto;
    padding-left: 7%;
    @media only screen and (min-width: 600px) {
        flex-direction: column;
        padding-left: 0;
        width: 30%;
        
    }
`;

const FormBody = styled.form`
@media only screen and (min-width: 600px) {
    width: 60%;
    margin-top: 30px;
}
`;



const FlexBody = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 600px) {
        flex-direction: row-reverse;
    
    }
`

const EmailBody = styled.div`
    width: 90%;
    font-size: 18px;
    .icons{
        margin-top: 40px;
        height: 50px;
        width: 50px;
    }
    @media only screen and (min-width: 768px) {
        width: 30%;
    }
    

`;

const PhoneBody = styled.div`
    width: 90%;
    font-size: 18px;
    @media only screen and (min-width: 768px) {
        width: 30%;
    }
`;

const AddressBody = styled.div`
    width: 90%;
    font-size: 18px;
    @media only screen and (min-width: 768px) {
        width: 30%;
    }
`;

const Text = styled.p`
    text-align: center;
    font-weight: 900;
    font-family: ${montserrat}, Sans-serif;
    font-size: 20px;
    color: #333;
    @media only screen and (min-width: 600px) {
        font-size: 19px;
    }
`;

const TextBody = styled.p`
    color: #748182;
    font-family: ${montserrat}, Sans-serif;
    text-align: center;
    @media only screen and (min-width: 600px) {
        font-size: 17px;
    }
`;



const SubmitButton = styled.span`
  #submit-btn{
    margin-top: 10px;
    margin-left: 4.5%;
    background: #1c1c1c;
    padding: 5px 20px 5px 20px;
    font-family: ${montserrat}, Sans-serif;
    border: 1px solid #1c1c1c;
    border-radius: 5px;
    font-size: 15px;
    color: #fff;

    @media only screen and (min-width: 600px) {
        margin-left: 15.5%;
    }
    
    @media only screen and (min-width: 768px) {
        margin-left: 20.3%;
    }
  }
`;

const UpperForm = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .upper-form-field{
        height: 30px;
        border-radius: 2%;
        border: none;
        font-size: 15px;
        font-family: ${montserrat}, Sans-serif;
        background: #e8e8e8;
        padding-left: 1%;
        width: 90%;
        margin: 10px auto 0 auto;
    }
    @media only screen and (min-width: 600px) {
        width: 70%;
        .upper-form-field{
            width: 48%;
        }
    }
    @media only screen and (min-width: 768px) {
        width: 60%;
        flex-direction: row;
        .upper-form-field{
            width: 48%;
        }
    }
`;

const LowerForm = styled.div`
    width: 100%;
    margin: 10px auto 0 auto;
    text-align: center;
    .input-textarea{
        padding-left: 1%;
        width: 90%;
        border-radius: 1%;
        border: none;
        font-size: 15px;
        background: #e8e8e8;
        font-family: ${montserrat}, Sans-serif;
        height: 150px;
    }
    @media only screen and (min-width: 600px) {
        width: 90%;
        .input-textarea{
            width: 90%;
        }
    }

    @media only screen and (min-width: 603px) {
        width: 100%;
        .input-textarea{
            width: 68%;
        }
    }
    
    @media only screen and (min-width: 768px) {
        width: 80%;
        .input-textarea{
            width: 73%;
        }
    }
`;

export default Contact;