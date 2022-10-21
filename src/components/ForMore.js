import React from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper, SectionTitle, Icons } from './global/GlobalStyling';

export const ForMore = () => {
  const ForMoreSection = styled.div`
    text-align: center;
    padding: 50px 0;
  `
  const SocialMediaLinks = styled.div`
    width: 100px;
    height: 100px
    background-color: pink;
  `
  return (
    <OuterWrapper>
      <InnerWrapper>
        <ForMoreSection>
          <SectionTitle>
            <p>for more</p>
          </SectionTitle>
          <SocialMediaLinks>
            <Icons />
          </SocialMediaLinks>
        </ForMoreSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}