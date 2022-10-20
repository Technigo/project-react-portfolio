import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from './Wrappers';
import startIcon from '../assets/icons/start-figure.svg';

export const Presentation = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <PresentationContainer>
          <PresentationText><img src={startIcon} alt="Start icon before presentation" />Hello! I am a frontend developer with a background as a teacher. I am a problemsolver who love to create functional solutions, both digital and physical. </PresentationText>
        </PresentationContainer>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export const PresentationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 232px;
  background: #f4f4f457;
`;

export const PresentationText = styled.h3`
  width: 80%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 29px;
  color: #000000;
`;