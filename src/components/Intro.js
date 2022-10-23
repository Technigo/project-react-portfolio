import React from 'react';
import { OuterWrapper, InnerWrapper, P } from 'StyledComponents/GlobalStyles';
import styled from 'styled-components/macro'

export const Intro = () => {
  return (
    <OuterWrapper grey>
      <InnerWrapper>
        <PIntro><Line /><Dot />  Coming from a background within biology and environmental
      science, I have now taken on the challange to become a frontend developer.
      Combining my experience from project and business development,
      I hope to grow a career within programming and contribute to the progress of the
      tech world.
        </PIntro>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export const Line = styled.span`
    border: 1px solid #483643;
    width: 40px;
    display: inline-block;
    margin-bottom: 4px;
`;

export const Dot = styled.span`
    height: 10px;
    width: 10px;
    background-color: #483643;
    border-radius: 50%;
    display: inline-block;
`;

const PIntro = styled(P)`
  margin-top: 3vh;
`
