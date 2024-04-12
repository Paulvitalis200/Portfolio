import React from "react";
import styled from "styled-components";
import { montserrat } from "../styles/type";
import devto from "../assets/devto.svg";
import medium from "../assets/medium.svg";

export interface PostsProps {}

const Posts: React.SFC<PostsProps> = () => {
  return (
    <MainBody>
      <Heading id="articles">Articles.</Heading>
      <PostBody>
        <Post className="cards">
          <img className="icons" src={devto} alt="devto" />

          <Text>Dev.to articles</Text>

          <TextBody>
            A collection of some of my articles on the popular developer website
            Dev.to.
          </TextBody>
          <Button>
            <a
              href="https://dev.to/paulstar200"
              rel="noopener noreferrer"
              target="_blank"
              className="read-btn"
            >
              Visit
            </a>
          </Button>
        </Post>
        <Post className="cards">
          <img className="icons" src={medium} alt="medium" />

          <Text>Medium Articles</Text>

          <TextBody>
            A collection of some of my articles on the popular writing website
            medium.
          </TextBody>
          <Button>
            <a
              href="https://medium.com/@paulvitalis"
              rel="noopener noreferrer"
              target="_blank"
              className="read-btn"
            >
              Visit
            </a>
          </Button>
        </Post>
      </PostBody>
    </MainBody>
  );
};
export const MainBody = styled.div`
  background: #fff;
  max-width: 100%;
`;

export const Heading = styled.p`
  text-align: center;
  font-size: 40px;
  font-family: ${montserrat}, Sans-serif;
  font-weight: 900;
  color: #333;
  padding-top: 80px;
`;

export const PostBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  .cards {
    width: 90%;
    height: 250px;
    background: #fff;
    box-shadow: 3px 3px 10px 5px rgba(211, 211, 211, 0.5);

    border-radius: 5px;
    margin: 0 auto 30px auto;
  }
  @media only screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
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

export const Post = styled.div`
    overflow: hidden;
    .icons{
        margin-top: 20px;
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

    @media only screen and (min-width: 768px) {
        padding-bottom: 40px;
        padding-left: 10px;
        padding-right: 10px;
    }

    @media only screen and (min-width: 1080px) {
        padding-left: 0
        padding-right: 0
        padding-bottom: 20px;
    }
    
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: bold;
  font-family: ${montserrat}, Sans-serif;
  letter-spacing: 1px;
  text-align: center;
  text-decoration: none;
  color: #333;
  @media only screen and (min-width: 600px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const TextBody = styled.p`
  padding-left: 10px;
  padding-right: 10px;
  font-family: ${montserrat}, Sans-serif;
  color: #748182;
  font-size: 14px;
  @media only screen and (min-width: 600px) {
    font-size: 13px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const Button = styled.div`
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

export default Posts;
