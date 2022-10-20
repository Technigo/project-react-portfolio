import React from 'react'
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from './GlobalStyles';

export const OtherProjects = ({ subTitle }) => {
  const InfoContainer = styled.div`
    display: flex;
  `;

  const SkillTagContainer = styled.div`
    display: flex;
  `;

  const OtherProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  `;

  const SkillTag = styled.p`
    background-color: pink;
    display: inline-block;
    margin: 3%;
    padding: 1%;
  `;

  const SubTitle = styled.h4`
    color: red;
    text-decoration: underline;
    margin-right: 1%;
    font-size: 18px;
    font-weight: bold;
    margin-block-end: 1em;
    margin-block-start: 1em;
  `;

  const SubParagraph = styled.p`
    color: black;
    text-decoration: underline;
    font-size: 18px;
    margin-block-end: 1em;
    margin-block-start: 1em;
  `;

  return (
    <OuterWrapper>
      <InnerWrapper>
        <OtherProjectContainer>
          <a href="INSERT-LINK-TO-PROJECTS-NETLIFY">
            <InfoContainer>
              <SubTitle>{subTitle}</SubTitle>
              <SubParagraph>
              Project to display the weather in a chosen city with info from an
              API
              </SubParagraph>
            </InfoContainer>
          </a>
          <SkillTagContainer>
            <SkillTag>HTML</SkillTag>
            <SkillTag>CSS</SkillTag>
            <SkillTag>JavaScript</SkillTag>
          </SkillTagContainer>
        </OtherProjectContainer>
      </InnerWrapper>
    </OuterWrapper>
  );
};

