import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper } from './StyledComponents/Wrappers';

export const AboutMe = () => {
  return (
    <BlockSection>
      <InnerWrapper>
        <p>
          <Line />
          <Dot /> Hello, I am a student at Technigo and prosper to become a web
          developer. Currently working as a mechanical engineer. Welcome to my
          portfolio where you can follow my projects and journey.
        </p>
      </InnerWrapper>
    </BlockSection>
  );
};

const Line = styled.span`
  border: 1px solid #fa382f;
  width: 40px;
  display: inline-block;
  margin-bottom: 4px;
`;
const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: #fa382f;
  border-radius: 50%;
  display: inline-block;
`;
