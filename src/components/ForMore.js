/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import styled from 'styled-components/macro';
import { ceruleanBlue } from 'Styles';
import linkedIn from '../assets/linkedin-blue.svg';
import gitHub from '../assets/github-blue.svg';
import stackOverflow from '../assets/stack-blue.svg';

const ForMore = () => {
  return (
    <MoreLinks>
      <a
        href="https://se.linkedin.com/in/joel-%C3%B6hman-b09307159"
        target="_blank"
        rel="noreferrer"
      >
        <MoreLinksWrapper className="more-link-wrapper">
          <img alt="linkedin" src={linkedIn} />
        </MoreLinksWrapper>
      </a>
      <a href="https://github.com/joeohm" target="_blank" rel="noreferrer">
        <MoreLinksWrapper className="more-link-wrapper">
          <img alt="github" src={gitHub} />
        </MoreLinksWrapper>
      </a>
      <a
        href="https://stackoverflow.com/c/technigo/users/368"
        target="_blank"
        rel="noreferrer"
      >
        <MoreLinksWrapper className="more-link-wrapper">
          <img alt="stackoverflow" src={stackOverflow} />
        </MoreLinksWrapper>
      </a>
    </MoreLinks>
  );
};

export default ForMore;

const MoreLinks = styled.div`
  display: flex;
  flex-direction: row;

  gap: 20px;
  margin: 20px;

  @media (min-width: 800px) {
    margin: 50px;
    gap: 200px;
  }
`;

const MoreLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  width: 75px;
  height: 75px;
  border-radius: 50%;

  img {
    border: ${ceruleanBlue} 3px solid;
    border-radius: 50%;
    width: 70px;
  }

  @media (min-width: 800px) {
    img {
      width: initial;
    }
  }
`;
