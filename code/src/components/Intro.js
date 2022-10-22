import React from 'react'
import styled from 'styled-components/macro';

import { ContainerWrapper, Text } from 'GlobalStyles';

// react component
export const Intro = () => {
  return (
    <ContainerWrapperIntro>
      <Text tabindex="0">
        <Line />
        <Dot />
        Hi there! I am a frontend developer with a broad background in many diffrent fields,
        Mechanical engineer within design and product development, Sportfashion design, Print
        and Advertising and I also have built log houses... With me in your team you get a
        positive, creative and structured problem solver - driven by development and improvement.
        I learn quickly and constantly want to develop myself and others. As a person, I`m
        driven, communicative & unpretentious. I am motivated by learning new things, meeting
        people and creating value. I`m looking forward to working in the Tech industrie and
        being a part of the coding community.
      </Text>
    </ContainerWrapperIntro>
  )
}

// styled component

const ContainerWrapperIntro = styled(ContainerWrapper)`
  padding: 10%;

  @media (min-width: 668px) {
    padding: 8%;
  }

  @media (min-width: 1024px) {
    padding: 6% 20%;
    /* max-width: 1000px; */
  } 
`;

// export const TextIntro = styled(Text)`
//   padding: 10% 5%;

//   @media (min-width: 668px) {
//     padding: 8% 5%;
//   }

//   @media (min-width: 1024px) {
//     padding: 6% 10%;
//     /* max-width: 1000px; */

//   }
//   `;

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