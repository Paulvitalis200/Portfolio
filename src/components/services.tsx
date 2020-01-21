import React from 'react';
import styled from 'styled-components';
import { montserrat } from '../styles/type';
import react from '../assets/react.png';
import css from '../assets/css.png';
import kubernetes from '../assets/kube.png';


export interface PostsProps {

}

const Posts: React.SFC<PostsProps> = () => {
    return (
        <MainBody>
            <Heading id="posts">Posts.</Heading>
            <PostBody>
                <Post className="cards">
                    <img className="icons" src={react} alt="virtual dom" />

                    <Text>
                        THE VIRTUAL DOM
                    </Text>

                    <TextBody>
                        The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation DOM by.....
                    </TextBody>
                    <Button>
                        <a href="https://medium.com/@paulvitalis/the-virtual-dom-9cea35721949" target="_blank" className="read-btn">Read More</a>
                    </Button>
                </Post>
                <Post className="cards">
                    <img className="icons" src={css} alt="Css" />

                    <Text>
                        CSS STRATEGIES
                    </Text>

                    <TextBody>
                        CSS (Cascading Style Sheets) has undergone various iterations, to get to its current state of maturity.....
                    </TextBody>
                    <Button>
                        <a href="https://medium.com/@paulvitalis/css-strategies-be3bf02a68d2" target="_blank" className="read-btn">Read More</a>
                    </Button>
                </Post>
                <Post className="cards">
                    <img className="icons" src={kubernetes} alt="Kubernetes" />

                    <Text>
                        MY KUBERNETES INTRO
                    </Text>

                    <TextBody>
                        About a month ago, I got an email from Digital Ocean inviting me to start a Free Kubernetes course for.....
                    </TextBody>
                    <Button>
                        <a href="https://www.linkedin.com/pulse/my-introduction-kubernetes-paul-vitalis/" target="_blank" className="read-btn">Read More</a>
                    </Button>
                </Post>
            </PostBody>
        </MainBody>
    );
}
export const MainBody = styled.div`
    background: #fff;
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

export const PostBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    .cards{
        width: 90%;
        height: 250px;
        background: #fff;
        box-shadow: 3px 3px 10px 5px rgba(211,211,211, 0.5);
                    
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
`;

export const Text = styled.p`
    font-size: 15px;
    font-weight: bold;
    font-family: ${montserrat};
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
    font-family: ${montserrat};
    color: #748182;
    font-size: 14px;
    @media only screen and (min-width: 600px) {
        font-size: 13px
    }
    @media only screen and (min-width: 768px) {
        font-size: 16px;
    }
    
`;

const Button = styled.div`
    .read-btn{
        background: white;
        padding: 5px 20px 5px 20px;
        font-family: ${montserrat};
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


export default Posts;

