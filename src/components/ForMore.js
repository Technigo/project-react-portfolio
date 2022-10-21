import React from 'react';
import styled from 'styled-components';
import { GITHUB_URL, LINKEDIN_URL, STACKOVERFLOW_URL } from 'utils/Urls';
import heroLinkedin from './assets/linkedin.png';
import heroGithub from './assets/github.png';
import heroStackOverflow from './assets/stackoverflow.png'
import { OuterWrapper, InnerWrapper, MainHeading } from './GlobalStyles';

export const ForMore = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        {/* <ForMoreContainer> */}
        <MainHeading> FOR MORE</MainHeading>
        <ForMoreContainer>
          <ForMoreIcons>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <img className="icon" src={heroLinkedin} lang="eng" alt="Linkedin icon" />
              <p>LINKEDIN</p>
            </a>
          </ForMoreIcons>
          <ForMoreIcons>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              <img className="icon" src={heroGithub} lang="eng" alt="Github icon" />
              <p>GITHUB</p>
            </a>
          </ForMoreIcons>
          <ForMoreIcons>
            <a href={STACKOVERFLOW_URL} target="_blank" rel="noreferrer">
              <img className="icon" src={heroStackOverflow} lang="eng" alt="Stackoverflow icon" />
              <p>STACK OVERFLOW</p>
            </a>
          </ForMoreIcons>
        </ForMoreContainer>
        {/* </ForMoreContainer> */}
      </InnerWrapper>
    </OuterWrapper>
  );
};
const ForMoreContainer = styled.div`
display: flex;
justify-content: center;
`;
const ForMoreIcons = styled.div`
width: 25%;
text-align: center;

a {
  text-decoration: none;
  color: inherit;
}

.icon {
  width: 35%;
}
`;
