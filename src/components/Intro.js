/*eslint-disable linebreak-style */ 
/*eslint-disable indent */ 
/*eslint-disable spaced-comment */ 
/*eslint-disable no-trailing-spaces */ 
/*eslint-disable no-multiple-empty-lines */ 
import React from "react";
import styled from "styled-components";
//import { IntroStyles } from "./IntroStyles";

const IntroStyles = styled.div`
background-color:#f7f8f9;
font-family: 'montserrat';
padding: 6% 0% 6% 0%;
`

const IntroText = styled.p`
letter-spacing: 0.10rem;
font-weight: 400;
line-height: 20px; 
font-size: 14px;
margin: 0% 2% 0% 2%;
text-align: center;

@media (min-width: 768px) {
    font-size: 17px;
    margin: 0% 15% 0% 15%;
    font-weight: 400;
    line-height: 20px; 
    }
`

export const Intro = () =>
{
    return (
        <>
        <IntroStyles>
            <IntroText>
                Hello! I'm a student at Technigos frontend developer bootcamp.  
                In my jobs, I have seen opportunities where digital tools in many ways would have made it easier for both customers and patients in different ways. 
                In the future, I hope to be able to, not only develop ideas - but also be involved in building the product itself. 
            </IntroText>
        </IntroStyles>
        </>
    );
}
  
  export default Intro;
  
