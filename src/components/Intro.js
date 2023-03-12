import React from 'react';
import styled from 'styled-components';

export const Intro = () => {
  return (
    <IntroOuterWrapper>
      <IntroInnerWrapper>
        <p>
          Hello! As a recent graduate in Web Development,
          I bring a unique background in International Business
          and Economics &#40;French&#41; and Accounting to the table.
          When coding, I always keep in mind the importance of
          user-friendliness and the company&apos;s financial goals.{'\n'}
          With my skills and perspective, I am confident in my ability to
          create reliable and profitable software solutions.
        </p>
      </IntroInnerWrapper>
    </IntroOuterWrapper>
  )
}

export const IntroOuterWrapper = styled.div`
  width: 100%;
  height: 340px;
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