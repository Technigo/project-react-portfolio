import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from './reusable/Wrappers';

export const Intro = () => {
  const IntroText = styled.section`
    background-color: #dfd3c38a;
    color: #F090D9;
    text-align: center;
    padding: 80px;
    font-size: 18px;
  `;
  const Line = styled.span`
    width: 30px;
    border: 1px solid var(---accent);
    display: inline-block;
    margin-bottom: 4px;
  `;

  const Dot = styled.span`
    height: 10px;
    width: 10px;
    background-color: var(---accent);
    border-radius: 50%;
    display: inline-block;
  `;

  return (
    <OuterWrapper background>
      <InnerWrapper>
        <IntroText>
          <p><Line /><Dot /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet tenetur distinctio blanditiis laboriosam corporis. Dolor
                cumque natus ab. Corporis eligendi beatae natus eaque tempore iure,
                deleniti laboriosam asperiores deserunt nostrum.
          </p>
        </IntroText>
      </InnerWrapper>
    </OuterWrapper>
  )
}