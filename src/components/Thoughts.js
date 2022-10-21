import React from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper, SectionTitle } from './global/GlobalStyling';

export const Thoughts = () => {
  const ThoughtsSection = styled.div`
    text-align: center;
    padding: 50px 0;
  `
  return (
    <OuterWrapper>
      <InnerWrapper>
        <ThoughtsSection>
          <SectionTitle>
            <p>My thoughts</p>
          </SectionTitle>
        </ThoughtsSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}