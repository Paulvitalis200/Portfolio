import React from 'react';
import styled from 'styled-components';
import { montserrat } from '../styles/type';
import axios from 'axios'
// import Success from '../assets/html.png';
import Flyers from '../assets/flyers.png';
// import Iphone from '../assets/iphone.png';

type Posts = {
    title: String,
    body: String,
    id: any,
}

class services extends React.Component {
    state: { posts : Posts[] } = {
        posts: [

        ]
    }

    componentDidMount() {
        console.log('Component Mounted')
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(res => {
            this.setState({
                posts: res.data.slice(0, 3)
            })
        })
    }
    
    render() {
        console.log(this.state);
        const { posts } = this.state;
        const postList = posts.map( post => {
            return (
                <WebDesign className="cards" key={post.id}>
                    <img className="icons" src={Flyers} alt="Success"/>
                  
                        <Text>{post.title}</Text>
                    
                    <TextBody>
                        {post.body}
                    </TextBody>
                </WebDesign>
            )
        })
                  
        return (
            <MainBody id="posts">
                <Heading>Posts.</Heading>
                <ServicesBody>
                    {posts.length ? 
                        (postList) :
                        (
                            <FetchPost>
                                Fetching posts... 
                                <p className="smiley">&#129322;</p>
                            </FetchPost>
                        )
                        } 
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
    overflow: hidden;
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
    text-decoration: none;
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

export const FetchPost = styled.div`
    margin: 0 auto;
    font-size: 24px;
    font-family: ${montserrat};
    color: #748182;

    .smiley {
        font-size: 2.5em;
        margin-top: 0;
    }
`;

export default services;
