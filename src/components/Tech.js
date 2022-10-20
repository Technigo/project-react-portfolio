import React from 'react';
import styled from 'styled-components';

export const Tech = () => {
  return (
    <TechContainer>
      <TechHeadline>TECH</TechHeadline>
      <TechText>HTML, CSS, Flexbox, JavaScript, React, Redux</TechText>
    </TechContainer>
  )
}

/* Styling for Tech-section */
export const TechContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: auto;
`
export const TechHeadline = styled.h3`
    width: 82px;
    height: 27px;
    background: #FA382F;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    color: #FFFFFF;
`;
export const TechText = styled.h3`
    width: auto;
    height: auto;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 29px;
    text-align: center;
    color: #000000;
`;