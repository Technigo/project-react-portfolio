/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
import React from 'react';
import Indent from 'icons/indent.png'
import styled from 'styled-components';

const Intro = () => {
  return (
    <IntroStyling>
      <p lang="en"><img src={Indent} alt="start symbol" className="indent" />Hello! Welcome to my portfolio.
            My name is Mia Dahlgren and I am currently a student at <a href="https://www.technigo.io/" alt="link to technigo website" target="_blank" rel="noopener noreferrer">Technigo Web Development Bootcamp</a>
            (Class of fall 2022). Take a look further down to see what I have accomplished during the past weeks.
            Please don&apos;t hesitate to <a href="mailto: mia_dahlgren@outlook.com">reach out</a> if you are curious to know more!
      </p>
    </IntroStyling>
  );
}
export default Intro

const IntroStyling = styled.section`
  .section.intro{
    top: 550px;
    height: 300px;
    }

    .section.intro img{
      padding-right: 5px;
   }

   a{
    text-decoration: none;
    color:  #cd4b00; 
   }

    a:hover{
    text-decoration: underline 1px solid;
    
  
 }

`