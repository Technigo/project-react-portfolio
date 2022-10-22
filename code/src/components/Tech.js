import React from 'react'
import styled from 'styled-components/macro'

import { ContainerWrapper, FlexWrapper, SectionWrapper, SectionHeadings, TextSection } from 'GlobalStyles';

// react component

export const Tech = () => {
  return (
    <SectionWrapper bgColor="#f8e9f0">
      <ContainerWrapper>
        <FlexWrapper>
          <SectionHeadings>Tech</SectionHeadings>
          <TextSection>
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
          </TextSection>
        </FlexWrapper>
      </ContainerWrapper>
    </SectionWrapper>
  )
}

// modifyedstyled component

const SpanBold = styled.span`
  font-weight: 700;

`

