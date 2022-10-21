/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';

import styled from 'styled-components/macro';
import { OuterWrapperSection, InnerWrapperSection } from 'styles/ProjectStyles';

const Intro = () => {
  return (
    <OuterWrapperSection grey>
      <InnerWrapperSection>
        <IntroStyle tabIndex="0">
          <SpanLine /><SpanDot />
          Hello! I&apos;m a frontend developer with a background in interior and
          graphic design. I consider myself as flexible and social and a good
          team player. I have always been a person who tries to create
          conditions for everyone to develop. I am passionate about creating a
          &quot;team feeling&quot; within the group. I have the ability to see the big
          picture of situations without forgetting the details. I keep calm in
          stressful situations and I&apos;m used to working with deadlines.
        </IntroStyle>
      </InnerWrapperSection>
    </OuterWrapperSection>

  )
}
export default Intro;

const SpanLine = styled.span`
  border: 1px solid #406882;
  width: 40px;
  display: inline-block;
  margin-bottom: 4px;
  background: #406882;
`

const SpanDot = styled.span`
    height: 10px;
    width: 10px;
    background-color: #406882;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
`
const IntroStyle = styled.p`
  margin-right: 10%;
`

