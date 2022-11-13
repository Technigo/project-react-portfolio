import React from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper, SiteSection } from './global/GlobalStyling';

export const About = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SiteSection>
          <AboutText>
            <p><Line /><Dot /> Hello! I&apos;m Annika. A Frontend developer, with
            ambition to go full stack.After 10+ years in the travel industry, with
            experience in customer service, business change and as product owner, I
            took the opportunity to do a career change. My curiosity for
            creative, simple IT solutions and problem solving led me into coding.
            </p>
          </AboutText>
        </SiteSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const Line = styled.span`
  border: 1px solid var(--color-darkblue);
  width: 40px;
  display: inline-block;
  margin-bottom: 4px;
`
const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: var(--color-darkblue);
  border-radius: 50%;
  display: inline-block;
`
const AboutText = styled.div`
  text-align: left;
`