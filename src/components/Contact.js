import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/headerhero.jpg';

export const Contact = () => {
  return (
    <ContactContainer>
      <ContactText>
        <h4>Contact me:</h4>
        <p>Linnéa Wahlström</p>
        <p>+46-76 879 2550</p>
        <p>linnea.wahlstrom@gmail.com</p>
      </ContactText>
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
    background-image: url(${heroImage});
    background-position: bottom;
    background-size: cover;
    display: Flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
`;

const ContactText = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(0, 0, 0, 0.416); 
    width: auto;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    padding-bottom: 24px;
    border-radius: 20%;

    p {
        margin: 5px;
        font-size: 18px;
    }
`;