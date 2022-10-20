import React from 'react';
import styled from 'styled-components';

export const Contact = () => {
  return (
    <ContactContainer>
      <ContactText>
        <h4>Contact me:</h4>
        <p>Linnéa Wahlström</p>
        <p>linnea.wahlstrom@gmail.com</p>
        <p>+46-76 879 2550</p>
      </ContactText>
    </ContactContainer>
  )
}

export const ContactContainer = styled.div`
    display: Flex;
    width: 100%;
    height: auto;
    background: #072BCE;
`;

export const ContactText = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    background: #072BCE;
    width: 100%;
    height: auto;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    padding-bottom: 10px;

    p {
        margin: 5px;
        font-size: 16px;
    }
`;