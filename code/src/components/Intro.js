import React from 'react'
import styled from 'styled-components/macro';

import { ContainerWrapper, Text } from 'GlobalStyles';

// react component

export const Intro = () => {
  return (
    <ContainerWrapperIntro>
      <TextIntro tabindex="0">
        <Line />
        <Dot />
        Hi there! I am a frontend developer with a broad background in many diffrent fields,
        Mechanical engineer within design and product development, sportfashion design, print
        and advertising and I also have built log houses... With me in your team you get a
        positive, creative and structured problem solver - driven by development and improvement.
        I learn quickly and constantly want to develop myself and others. As a person, I`m
        driven, communicative & unpretentious. I am motivated by learning new things, meeting
        people and creating value. I`m looking forward to working in the Tech industry and
        being a part of the coding community.
      </TextIntro>
    </ContainerWrapperIntro>
  )
}

// styled components

const ContainerWrapperIntro = styled(ContainerWrapper)`
  padding: 0%;

  @media (min-width: 668px) {
    padding: 8%;
  }
`;

// -----------------------

export const TextIntro = styled(Text)`
  padding: 10% 5%;
  width: 90%;

   @media (min-width: 668px) {
    padding: 0;
  }
`;

// -----------------------

export const Line = styled.span`
  display: inline-block;
  width: 55px;
  height: 3px;
  background-color: var(--clr-dark);
  margin-bottom: 4px;
`;

// -----------------------

export const Dot = styled.span`
  display: inline-block;
  height: 11px;
  width: 11px;
  background-color: var(--clr-dark);
  border-radius: 50%;
  margin-left: -10px;
  margin-right: 10px;
`;