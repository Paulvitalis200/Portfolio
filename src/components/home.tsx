import React from "react";
import styled from "styled-components";
import { poppins, montserrat } from "../styles/type";
import github from "../assets/github-logo.svg";
import linkedin from "../assets/linkedin.svg";
import Display from "../assets/display.jpg";
import dribbble from "../assets/dribbble-icon.svg";

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <MainBody id="about">
      <AboutBody>
        <MyImage>
          <img id="paul" src={Display} alt="Paul profile pic" />
        </MyImage>
        <TextArea>
          <Title>Paul Otieno.</Title>
          <Description>Software Engineer | UX/UI Designer</Description>
          <TextBody>
            Hello There. My name is <strong>Paul Otieno</strong>. I'm a Software
            engineer and UX/UI Designer based in Nairobi, Kenya. I am passionate
            about developing applications with amazing design and user
            experience.
          </TextBody>
          <ContactButton>
            <a
              href="mailto:nairobifellowships@dfa.ie?subject=Ireland%20Fellows%20Programme"
              className="contact-btn"
            >
              Contact Me
            </a>
          </ContactButton>
          <Social>
            <SocialLinks>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Paulstar200"
              >
                <img className="github-logo" src={github} alt="Github logo" />
              </a>
              <span className="tooltip-text">Github</span>
            </SocialLinks>

            <SocialLinks>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/paul-otieno-66740889/"
              >
                <img
                  className="linkedin-logo"
                  src={linkedin}
                  alt="Linkedin logo"
                />
              </a>
              <span className="tooltip-text">LinkedIn</span>
            </SocialLinks>
            <SocialLinks>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://dribbble.com/paulvitalis"
              >
                <img
                  className="dribbble-logo"
                  src={dribbble}
                  alt="Dribbble logo"
                />
              </a>
              <span className="tooltip-text">Dribbble</span>
            </SocialLinks>
          </Social>
        </TextArea>
      </AboutBody>
    </MainBody>
  );
};

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
  align-items: center;
`;

const Description = styled.p`
  color: #333;
  font-size: 16px;
  font-family: ${poppins}, Sans-serif;
`;

const TextArea = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

const MyImage = styled.div`
  width: 100%;
  margin: 0;
  #paul {
    width: 60%;
    height: auto;
    border-radius: 5px;
  }
  @media only screen and (min-width: 600px) {
    #paul {
      width: 20%;
      height: auto;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
    #paul {
      width: 45%;
      height: auto;
    }
  }
`;

const Title = styled.span`
  font-size: 40px;
  font-family: ${montserrat}, Sans-serif;
  font-weight: 900;
  color: #333;
`;

const TextBody = styled.p`
  font-size: 19px;
  color: #748182;
  font-family: ${poppins}, Sans-serif;
  line-height: 1.6;
  text-align: center;
  width: 70%;
`;

const ContactButton = styled.div`
  margin-top: 40px;
  .contact-btn {
    background: white;
    padding: 5px 20px 5px 20px;
    font-family: ${montserrat}, Sans-serif;
    border-radius: 4px;
    border: 1px solid black;
    text-decoration: none;
    font-size: 16px;
    color: #000;
  }

  .contact-btn:hover {
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
    width: 20%;
  }
`;

const SocialLinks = styled.div`
  width: 20%;
  margin: 30px auto 0 auto;
  position: relative;
  .github-logo {
    width: 100%;
  }
  .linkedin-logo {
    width: 100%;
  }
  .dribbble-logo {
    width: 100%;
  }

  .tooltip-text {
    visibility: hidden;
    width: 100px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 60%;
    margin-left: -50px;
  }

  &:hover {
    .tooltip-text {
      visibility: visible;
    }
  }

  @media only screen and (min-width: 768px) {
    .github-logo,
    .linkedin-logo,
    .dribbble-logo {
      width: 80%;
      filter: invert(0.5);
    }
    .linkedin-logo:hover,
    .github-logo:hover,
    .dribbble-logo:hover {
      filter: invert(0);
    }
  }
`;

export default Home;
