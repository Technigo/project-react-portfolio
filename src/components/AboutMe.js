import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper } from './styles/Wrappers';

export const AboutMe = () => {
  return (
    <BlockSection>
      <InnerWrapper>
        <Paragraph>
          <Line />
          <Dot /> Welcome to my page! I am a Frontend Developer with a
          background as a Design Engineer who love to improve user experience
          for digital services that the users love while working with a modern
          tech stack. I have experience working as a team leader and enjoy
          enabling teams to collaborate and thrive while reaching their full
          potential. I am currently a student at{' '}
          <a
            href="https://www.technigo.io/program"
            target="_blank"
            rel="noreferrer"
            tabIndex={-1}
            aria-hidden>
            <b>Technigo </b>
          </a>{' '}
          where I am learning a lot of exciting things. Feel free to have a look
          at my portfolio and let me know what you think.
        </Paragraph>
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

const Paragraph = styled.p`
  line-height: 1.6;
`;
