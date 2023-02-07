import React from 'react';
import styled from 'styled-components/macro';
import { OuterWrapper, InnerWrapper, SectionHeader, LinkNoLine } from './GlobalStyleComponents';
import socialLinkedin from './images/socialLinkedin.png'
import socialGithub from './images/socialGithub.png'
import socialStackoverflow from './images/socialStackoverflow.png'

/* Component that shows 3 icons and links them to my socials */

const ForMore = ({ color }) => {
  return (
    <ClonedOuterWrapper>
      <ClonedInnerWrapper>
        <SectionHeader color={color}>FOR MORE</SectionHeader>
        <ForMoreContainer>
          <ForMoreIcons>
            <LinkNoLine href="www.linkedin.com/in/viktor-svensson-9a55891b2" target="_blank" rel="noreferrer">
              <img className="icon" src={socialLinkedin} alt="LinkedIn icon" />
              <ForMoreTitle>LinkedIn</ForMoreTitle>
            </LinkNoLine>
          </ForMoreIcons>
          <ForMoreIcons>
            <LinkNoLine href="https://github.com/ViktorSvenssonN" target="_blank" rel="noreferrer">
              <img className="icon" src={socialGithub} alt="Github icon" />
              <ForMoreTitle>Github</ForMoreTitle>
            </LinkNoLine>
          </ForMoreIcons>
          <ForMoreIcons>
            <LinkNoLine href="https://stackoverflow.com/users/apps/19384384" target="_blank" rel="noreferrer">
              <img className="icon" src={socialStackoverflow} alt="Stack Overflow icon" />
              <ForMoreTitle>Stack</ForMoreTitle>
            </LinkNoLine>
          </ForMoreIcons>
        </ForMoreContainer>
      </ClonedInnerWrapper>
    </ClonedOuterWrapper>
  );
};

/* localy stored styled components */

const ForMoreContainer = styled.div`
display: flex;
justify-content: space-evenly;
`;

/* icons and their links */
const ForMoreIcons = styled.div`
width: 25%;
text-align: center;
font-family: 'Roboto', sans-serif;
font-weight: 700;
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  opacity: 0.5;
}
.icon {
  width: 75%;
  filter: brightness(0) saturate(100%) invert(100%) sepia(91%) saturate(5523%) hue-rotate(316deg) brightness(99%) contrast(96%);
}
`;

const ForMoreTitle = styled.h4`
    text-align: center;
    color: #f0a04b;
    font-size: 24px;
    line-height: 1.4;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #f6c453;
    }
  
    @media (max-width: 800px) {
      font-size: 16px;
      line-height: 1.4;
`;

const ClonedOuterWrapper = styled(OuterWrapper)`
  background-color: #fefbe9;
`;

const ClonedInnerWrapper = styled(InnerWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`;

export default ForMore;
