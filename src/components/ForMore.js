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
        <SkillsContainer>
          <ForMoreParent>
            <ForMoreBox>
              <ClonedLinkNoLine href="www.linkedin.com/in/viktor-svensson-9a55891b2" target="_blank" rel="noreferrer">
                <ForMoreImg src={socialLinkedin} alt="LinkedIn icon" />
                <ForMoreTitle>LinkedIn</ForMoreTitle>
              </ClonedLinkNoLine>
            </ForMoreBox>
            <ForMoreBox>
              <ClonedLinkNoLine href="https://github.com/ViktorSvenssonN" target="_blank" rel="noreferrer">
                <ForMoreImg src={socialGithub} alt="Github icon" />
                <ForMoreTitle>Github</ForMoreTitle>
              </ClonedLinkNoLine>
            </ForMoreBox>
            <ForMoreBox>
              <LinkNoLine href="https://stackoverflow.com/users/apps/19384384" target="_blank" rel="noreferrer">
                <ForMoreImg src={socialStackoverflow} alt="Stack Overflow icon" />
                <ForMoreTitle>Stack</ForMoreTitle>
              </LinkNoLine>
            </ForMoreBox>
          </ForMoreParent>
        </SkillsContainer>
      </ClonedInnerWrapper>
    </ClonedOuterWrapper>
  );
};

/* localy stored styled components */

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const ForMoreParent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}
`;

const ForMoreBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 800px) {
        width: 30%;
    }
`;

const ForMoreImg = styled.img`
  height: 45%;
  filter: brightness(0) saturate(100%) invert(100%) sepia(91%) saturate(5523%) hue-rotate(316deg) brightness(99%) contrast(96%);

  &:hover {
    border-radius: 50%;
    transform: scale(0.8);
    transition: 700ms linear;
    }
    
  @media (max-width: 800px) {
      height: 22%; 
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

const ClonedLinkNoLine = styled(LinkNoLine)`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
