import * as React from "react";
import styled from "styled-components";
import { poppins, montserrat } from "../styles/type";
import design from "../assets/Design.png";
import gamehub from "../assets/gamehub.png";
import countries from "../assets/countries.png";
import advice from "../assets/advice.png";
import rick from "../assets/rick.png";

const Portfolio = () => {
  return (
    <MainBody>
      <Heading id="portfolio">Portfolio.</Heading>
      <PortfolioBody>
        <Project>
          <img className="portfolio-img" src={gamehub} alt="Gamehub" />
          <TextBody>
            <Title>Gamehub</Title>
            <Text>
              Gamehub is a fun application that is a clone of the RAWG web app
              where you can view and search for video games on different gaming
              platforms.
              <br />
              <Button>
                <a
                  href="https://github.com/Paulvitalis200/video-game"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="read-btn"
                >
                  Github repo
                </a>
              </Button>
              <Button>
                <a
                  href="https://video-game-nu.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="read-btn"
                >
                  Website
                </a>
              </Button>
            </Text>
          </TextBody>
        </Project>
        <Project className="roo-img">
          <img className="portfolio-img" src={countries} alt="Countries" />
          <TextBody>
            <Title>Country facts</Title>
            <Text>
              Country facts is an app that utilizes the REST Countries API to
              pull country data.
              <br />
              <Button>
                <a
                  href="https://github.com/Paulvitalis200/countries-react"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="read-btn"
                >
                  Github repo
                </a>
              </Button>
              <Button>
                <a
                  href="https://countries-react.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="read-btn"
                >
                  Website
                </a>
              </Button>
            </Text>
          </TextBody>
        </Project>
        <Project>
          <img className="portfolio-img" src={advice} alt="Advice generator" />
          <TextBody>
            <Title>Advice Generator</Title>
            <Text>
              This is an app that utilizes the Advice Slip API to randomly
              generate different pieces of advice. <br />
              <Button>
                <a
                  href="https://github.com/Paulvitalis200/advice-generator"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="read-btn"
                >
                  Github repo
                </a>
              </Button>
              <Button>
                <a
                  href="https://advice-generator-five-blond.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="read-btn"
                >
                  Website
                </a>
              </Button>
            </Text>
          </TextBody>
        </Project>
        <Project className="roo-img">
          <img className="portfolio-img" src={rick} alt="Design portfolio" />
          <TextBody>
            <Title>Shows app</Title>
            <Text>
              An app that shows the characters from the show Rick and Morty. The
              data is fetched from the Rick and Morty API.
              <br />
              <Button>
                <a
                  href="https://github.com/Paulvitalis200/rick-morty"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="read-btn"
                >
                  Github repo
                </a>
              </Button>
              <Button>
                <a
                  href="https://rick-morty-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-btn"
                >
                  Website
                </a>
              </Button>
            </Text>
          </TextBody>
        </Project>
        <Project>
          <img className="portfolio-img" src={design} alt="Design portfolio" />
          <TextBody>
            <Title>Design Portfolio</Title>
            <Text>
              This is my design portfolio where I display some of my graphic
              Design work.
              <br />
              <Button>
                <a
                  href="https://github.com/Paulstar200/Design-portfolio"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="read-btn"
                >
                  Github repo
                </a>
              </Button>
              <Button>
                <a
                  href="https://veeportfolio.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-btn"
                >
                  Website
                </a>
              </Button>
            </Text>
          </TextBody>
        </Project>
      </PortfolioBody>
    </MainBody>
  );
};

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
    .design-portfolio,
    .roo-img {
      flex-direction: row-reverse;
    }
  }
`;

const Project = styled.div`
  text-align: center;

  .portfolio-img {
    width: 80%;
    border-radius: 1%;
    box-shadow: 3px 3px 10px 5px rgba(211, 211, 211, 0.5);
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    width: 85%;
    justify-content: space-between;
    margin: 0 auto 40px auto;
    .portfolio-img {
      align-self: center;
      width: 45%;
      border-radius: 1%;
      box-shadow: 3px 3px 10px 5px rgba(211, 211, 211, 0.5);
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
  .read-btn {
    background: white;
    padding: 5px 20px 5px 20px;
    font-family: ${montserrat}, Sans-serif;
    border-radius: 4px;
    border: 1px solid black;
    text-decoration: none;
    font-size: 15px;
    color: #000;
  }

  .read-btn:hover {
    background: #000;
    color: #fff;
  }
`;

export default Portfolio;
