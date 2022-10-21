import React from 'react';
import styled from 'styled-components';
import startIcon from '../assets/icons/start-figure.svg';

export const Presentation = ({ backColor }) => {
  return (
    <OuterWrapper backColor={backColor}>
      <InnerWrapper>
        <PresentationContainer>
          <PresentationText><img src={startIcon} alt="Start icon before presentation" />Hello! I am a frontend developer with a background as a teacher. I am a problemsolver who love to create functional solutions, both digital and physical. </PresentationText>
        </PresentationContainer>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const OuterWrapper = styled.section`
background-color: ${(props) => props.backColor};
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const InnerWrapper = styled.section`
width: 80%;
margin: 0 auto;
`

const PresentationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 232px;
  background: #f4f4f457;
`;

const PresentationText = styled.h3`
  width: 80%;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 29px;
  color: #000000;
`;