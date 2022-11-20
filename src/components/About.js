import React from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper, SiteSection } from './global/GlobalStyling';

export const About = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SiteSection>
          <AboutText>
            <p><Line /><Dot /> Hello! I&apos;m Annika, a frontend developer with 10+ years
            background in the travel industry. Most recently I have worked as a business change
            driver and as a product owner. Working close to developers raised a curiosity for
            coding. I want to create user friendly applications.
            I’m solution-focused and a creative person who is excited
            to learn more.
            </p>
          </AboutText>
        </SiteSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const Line = styled.span`
  border: 1px solid var(--color-brown);
  width: 40px;
  display: inline-block;
  margin-bottom: 4px;
`
const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: var(--color-brown);
  border-radius: 50%;
  display: inline-block;
`
const AboutText = styled.div`
  text-align: left;
`