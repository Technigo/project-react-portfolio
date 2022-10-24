/*eslint-disable linebreak-style*/   
/*eslint-disable indent */   
/*eslint-disable spaced-comment*/  
/*eslint-disable no-trailing-spaces*/  
/*eslint-disable no-multiple-empty-lines*/  
import React from "react";
import styled from "styled-components";
import { FaStackOverflow } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Section, SectionHeading} from 'GlobalStyles';


const Social = () =>
   {
    return (
     <Section>
      <IconStyles>
     <SectionHeading>SOCIAL</SectionHeading> 
    <a href="https://www.linkedin.com/in/johanna-rosenholm-932942109/"
      role="button"
      target="_blank"  
      alt="Linkedin logo"
      rel= "noreferrer">
      <FaLinkedin />
    </a>
     <a href="https://github.com/RosenholmJohanna"
     role="button"
     target="_blank"  
     alt="Github logo"
     rel= "noreferrer">
     <FaGithubSquare />
   </a>

    <a href="https://stackoverflow.com/users/19392281/johanna-rosenholm"
    role="button"
    target="_blank"  
    alt="StackOverflow logo"
    rel= "noreferrer">
    <FaStackOverflow />
    </a>
    </IconStyles>
    </Section>
    );
  };

export default Social;


const IconStyles = styled.div`
font-family: 'montserrat';
text-align:center;
background-color:#f7f8f9;
padding-top:5%;
padding-bottom: 5%;

a {
justify-content: center;
font-size: 60px;
color:#b9aba3;
margin: 1%;
}
`