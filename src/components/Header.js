/*eslint-disable linebreak-style*/   
/*eslint-disable indent */   
/*eslint-disable spaced-comment*/  
/*eslint-disable no-trailing-spaces*/  
/*eslint-disable no-multiple-empty-lines*/  
import React from "react";
import { HeaderStyles } from "./HeaderStyles";
import img from 'assets/Profile-image.jpg'// Tell this JS file uses this image
//import {FaFacebookSquare } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import styled from "styled-components";
import { HeaderText } from 'GlobalStyles';


const IconStyles = styled.div`
font-family: 'montserrat';
text-align: right;
padding: 2%;

a {
font-size: 30px;
color:white;
margin: 1%;
}
`

const Header = ({myName, myTitle, myDescription}) =>
   {
    return (
    <HeaderStyles>
    <IconStyles>
    <a href="https://www.linkedin.com/in/johanna-rosenholm-932942109/"
      target="_blank"  
      alt="Linkedin logo"
      rel= "noreferrer">
      <FaLinkedin />
    </a>
     <a href="https://github.com/RosenholmJohanna"
     target="_blank"  
     alt="Github logo"
     rel= "noreferrer">
     <FaGithubSquare />
   </a>

    <a href="https://stackoverflow.com/users/19392281/johanna-rosenholm"
    target="_blank"  
    alt="StackOverflow logo"
    rel= "noreferrer">
    <FaStackOverflow />
    </a>
    </IconStyles>

    <HeaderText> 
    <h1>{myName}</h1>
    <h2>{myTitle}</h2>
    <h3>{myDescription}</h3>
    <img src={img} alt="me"></img>
    </HeaderText> 
    </HeaderStyles>
    );
  };

export default Header;

