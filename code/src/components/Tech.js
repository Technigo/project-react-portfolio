import React from 'react'
import styled from 'styled-components/macro'

import { ContainerWrapper, FlexWrapper, SectionWrapper, SectionHeadings, Text } from 'GlobalStyles';

// react component

export const Tech = () => {
  return (
    <SectionWrapper bgColor="#f8e9f0">
      <ContainerWrapper>
        <FlexWrapper>
          <SectionHeadings>TECH</SectionHeadings>
          <TextTech>
            <SpanBold> CSS3 </SpanBold>
              | Flexbox | Grid |
            <SpanBold> HTML5 </SpanBold>
              | ES6 |
            <SpanBold> JavaScript </SpanBold>
              | API`s |
            <SpanBold> Ract </SpanBold>
              | JSX | React Hooks | Styled Components |
            <SpanBold> Project Planning </SpanBold>
              | Figma | Typography |
            <SpanBold> Web Accessibly </SpanBold>
              | Agile Methodology |
            <SpanBold> Team work </SpanBold>
              | mob-programming |
            <SpanBold> pair-programming </SpanBold>
              |
            <SpanBold> API:s </SpanBold>
              | Github |
            <SpanBold> ADOBE CREATIVE SUITE </SpanBold>
              | Illustrator | Photoshop | Indesign |
          </TextTech>
        </FlexWrapper>
      </ContainerWrapper>
    </SectionWrapper>
  )
}

// modifyed styled component

const SpanBold = styled.span`
  font-weight: 700;

`
const TextTech = styled(Text)`
  text-align: center;

  @media (min-width: 668px) {
    padding: 0% 8%;
  }

  @media (min-width: 1024px) {
    padding: 0% 20%;
    /* max-width: 1000px; */
  } 
`;
