import React from 'react';
import styled from 'styled-components';

export const OtherProjects = () => {
  return (
    <OtherProjectOuterWrapper>
      <OtherProjectInnerWrapper>
        <h6 className="otherProjects">OTHER PROJECTS</h6>
        <a href="INSERT-LINK-TO-PROJECTS-NETLIFY">
          <InfoContainer>
            <SubTitle>Weather App</SubTitle>
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
      </OtherProjectInnerWrapper>
    </OtherProjectOuterWrapper>
  );
};

export const OtherProjectOuterWrapper = styled.div`
  background-color: var(--nude);
  height: 50vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

export const OtherProjectInnerWrapper = styled.div`
  margin: 0 auto;
  width: 80vw;
  max-width: 900px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h6 {
    font-family: Montserrat;
    color: #293a4f;
    font-size: 22px;
  }

  a {
    text-decoration: none;
  }

`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin:0; 
`;

export const SkillTagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const SkillTag = styled.p`
font-family: "Roboto", sans-serif;
color: #ffff;
border-radius: 3px;
background-color: #293a4f;
display: inline;
font-size: 14px;
font-weight: 700;
letter-spacing: 1px;
margin-right: 10px;
padding: 3px 5px;
`;

export const SubTitle = styled.h4`
  color: var(--blue);
  text-decoration: underline;
  margin-right: 1%;
  font-size: 18px;
  font-weight: bold;
  margin-block-end: 1em;
  margin-block-start: 1em;
`;

export const SubParagraph = styled.p`
  color: black;
  text-decoration: none;
  font-size: 18px;
  margin-block-end: 1em;
  margin-block-start: 1em;
  texta-align: left;

`;
/* h4 is optional just write the size you want, and then the project you want. */
