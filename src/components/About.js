import React from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper, SiteSection } from './global/GlobalStyling';

export const About = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SiteSection>
          <AboutText>
            <p><Line /><Dot /> Hello! I&apos;m Annika,
            Recently, I have decided to take on the challenge of becoming a Frontend developer.
            With my experience from various positions, projects, working in cross-functional teams,
            offering technical support, and delivering customer service, I look forward to creating
            and contributing with user-friendly and straightforward solutions.
            I am seeking opportunities where I can utilize and evolve my skills in an inspiring
             environment, allowing me to expand my knowledge and progress my career as a Frontend
             developer while contributing to your meaningful mission.
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