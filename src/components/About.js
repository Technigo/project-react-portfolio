import React from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper } from './global/GlobalStyling';

export const About = () => {
  const AboutText = styled.section`
      font-family: 'Montserrat';
      padding: 50px 0;
    `
  const Line = styled.span`
    border: 1px solid #333;
    width: 40px;
    display: inline-block;
    margin-bottom: 4px;
  `

  const Dot = styled.span`
    height: 10px;
    width: 10px;
    background-color: #333;
    border-radius: 50%;
    display: inline-block;
  `

  return (
    <OuterWrapper background>
      <InnerWrapper>
        <AboutText>
          <p><Line /><Dot /> Hello! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet tenetur distinctio blanditiis laboriosam corporis. Dolor
                cumque natus ab. Corporis eligendi beatae natus eaque tempore iure,
                deleniti laboriosam asperiores deserunt nostrum.
          </p>
        </AboutText>
      </InnerWrapper>
    </OuterWrapper>
  )
}