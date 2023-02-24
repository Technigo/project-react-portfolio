import React from 'react';
import styled from 'styled-components';

export const Intro = () => {
  return (
    <IntroOuterWrapper>
      <IntroInnerWrapper>
        <p> Hello! As a recent graduate in Frontend Development,
          I bring a unique background in accounting and
          French international business and economics to the table.
          I have a comprehensive understanding of the challenges faced by
          both the finance and IT departments, allowing me to effectively
          communicate and collaborate with professionals from both fields.
          When coding, I always keep in mind the importance of
          user-friendliness and the company\'s financial goals.
          With my skills and perspective, I am confident in my ability to
          create reliable and profitable software solutions.
        </p>
      </IntroInnerWrapper>
    </IntroOuterWrapper>
  )
}

export const IntroOuterWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background: var(--green);
`;

export const IntroInnerWrapper = styled.div`
  width: 80vw;
  max-width: 900px;
  height: 200px;
  display: flex;
  align-items: center;
  line-height: 25px;

  p {
    color: var(--yellow);
  }

  @media (min-width: 668px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }
`;