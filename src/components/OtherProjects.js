import React from 'react'
import 'index';
import styled from 'styled-components';

const OtherProjects = ({ subTitle }) => {
  return (
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
  );
};
export default OtherProjects;

export const InfoContainer = styled.div`
  display: flex;
`;

export const SkillTagContainer = styled.div`
  display: flex;
`;

export const OtherProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  background-color: #FFF9F3;
`;

export const SkillTag = styled.p`
  background-color: pink;
  display: inline-block;
  margin: 3%;
  padding: 1%;
  background-color: #FFF9F3;
  border:2px solid black;
`;

export const SubTitle = styled.h4`
  color: red;
  text-decoration: underline;
  margin-right: 1%;
  font-size: 18px;
  font-weight: bold;
  margin-block-end: 1em;
  margin-block-start: 1em;
`;

export const SubParagraph = styled.p`
  color: black;
  text-decoration: underline;
  font-size: 18px;
  margin-block-end: 1em;
  margin-block-start: 1em;
`;
/* h4 is optional just write the size you want, and then the project you want. */
