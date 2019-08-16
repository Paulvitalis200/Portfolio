import React from 'react'
import styled from 'styled-components';
import { montserrat } from '../styles/type';

class Navigation extends React.Component {
    render() {
        return (
            <Header>
                  <HeaderLogo>
                      <a className="logo-item" href="#home">VITALIS</a>
                  </HeaderLogo>
                  <NavigationBody>
                    <NavItem >
                        <a className="nav-item" href="#home">Home</a>
                    </NavItem>
                    <NavItem >
                        <a className="nav-item" href="#about">About</a>
                    </NavItem>
                    <NavItem >
                        <a className="nav-item" href="#posts">Posts</a>
                    </NavItem>
                    <NavItem >
                        <a className="nav-item" href="#portfolio">Portfolio</a>
                    </NavItem>
                    <NavItem >
                        <a className="nav-item" href="#contact">Contact</a>
                    </NavItem>
                </NavigationBody>
            </Header>
        )
    }
}


const HeaderLogo = styled.p`
    font-size: 20px;
    color: #fff;
    font-family: ${montserrat};
    font-weight: 800;
    text-align: center;
    margin: 0;
    padding: 5px;
    .logo-item{
      text-decoration: none;
      color: #fff;
    }
    @media only screen and (min-width: 768px) {
      margin-left: 150px;
      
    }
`;

const Header = styled.div`
  width: 100%;
  background: rgba(0, 0, 0);
  position: fixed;
  z-index: 1000;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 15px;
  }
`;

const NavigationBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px 5px 20px;
  margin: 0 auto;
  background: #000;
  width: 90%;
  @media only screen and (min-width: 768px) {
    width: 40%;
    background: #000;
  }
`;

const NavItem = styled.li`
  list-style: none;
  .nav-item{
    text-decoration: none;
    color: #fff;
    font-size: 15px;
    font-family: ${montserrat};
  }
  .nav-item:hover{
    color: #748182;
  }
`;


export default Navigation;