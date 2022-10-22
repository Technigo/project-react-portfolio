import React from 'react';
import styled from 'styled-components';
import SectionContainer from './styled/SectionContainer.styled';
import Paragraph from './styled/Paragraph.styled';

const Summary = () => {
  return (
    <SectionContainer bg>
      <Paragraph main>
        <Line /><Dot />
          Welcome! I&apos;m a freshly
          baked frontend developer named Fredrik. With a background in office
          management I now strive to keep my code as neat as possible. Always
          eager to deepen my knowledge and sharpen my coding skills!
      </Paragraph>
    </SectionContainer>
  );
};

export default Summary;

const Line = styled.span`
  border: 1px solid var(--sub-color);
  width: 40px;
  display: inline-block;
  margin-bottom: 4px;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: var(--sub-color);
  border-radius: 50%;
  display: inline-block;
  margin-right: 0.6rem;
`;