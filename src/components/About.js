import React from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper, SiteSection } from './global/GlobalStyling';

export const About = () => {
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

  return (
    <OuterWrapper>
      <InnerWrapper>
        <SiteSection>
          <p><Line /><Dot /> Hello! I&apos;m Annika. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
                Eveniet tenetur distinctio blanditiis laboriosam corporis. Dolor
                cumque natus ab. Corporis eligendi beatae natus eaque tempore iure,
                deleniti laboriosam asperiores deserunt nostrum.
          </p>
        </SiteSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}