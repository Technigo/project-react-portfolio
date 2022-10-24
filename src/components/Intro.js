/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
import React from 'react';
import Indent from 'icons/indent.png'
import styled from 'styled-components';

const Intro = () => {
  return (
    <IntroStyling>
      <section className="intro-section">
        <p className="intro-p">
          <img src={Indent} alt="start symbol" className="indent" />Hello! Welcome to my portfolio.
            My name is Mia Dahlgren and I am currently a student at <a href="https://www.technigo.io/" alt="link to technigo website" target="_blank" rel="noopener noreferrer">Technigo Web Development Bootcamp</a>
            (Class of fall 2022). Take a look further down to see what I have accomplished during the past weeks.
            Please don&apos;t hesitate to <a href="mailto: mia_dahlgren@outlook.com">reach out</a> if you are curious to know more!
        </p>
      </section>
    </IntroStyling>
  );
}
export default Intro

const IntroStyling = styled.section`
    .intro-section{
      margin-top: 5%;
      margin-left: 2vw;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

   a{
    text-decoration: none;
    color:  #cd4b00; 
   }

    a:hover{
    text-decoration: underline 1px solid;
    }

    
    @media (min-width: 667px) and (max-width: 1024px){
      .intro-p {
        width: 70vw;
        font-size: 20px; 
      }
    }
    
    @media (min-width: 1024px) {
      .intro-p {
        font-size: 22px; 
      }
    }

`