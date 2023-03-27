import React from 'react';
import styled from 'styled-components';

export const OtherProjects = () => {
  return (
    <OtherProjectOuterWrapper>
      <OtherProjectInnerWrapper>
        <h6 className="otherProjects">OTHER PROJECTS</h6>
        <a href="https://linda-and-marias-movies-app.netlify.app/">
          <InfoContainer>
            <SubTitle>Movies</SubTitle>
            <SubParagraph>
              Movie site listing 50 top rated movies.
            </SubParagraph>
          </InfoContainer>
        </a>
        <SkillTagContainer>
          <SkillTag>React</SkillTag>
          <SkillTag>API</SkillTag>
          <SkillTag>Pair-programming</SkillTag>
        </SkillTagContainer>
      </OtherProjectInnerWrapper>
    </OtherProjectOuterWrapper>
  );
};

export const OtherProjectOuterWrapper = styled.div`
  background-color: var(--yellow);
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
    color: rgb(135,47,0);
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
  background-color: rgb(135,47,0);
  display: inline;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-right: 10px;
  padding: 3px 5px;
`;

export const SubTitle = styled.h4`
  color: var(--orange);
  text-decoration: underline;
  margin-right: 1%;
  font-size: 18px;
  font-weight: bold;
  margin-block-end: 1em;
  margin-block-start: 1em;
`;

export const SubParagraph = styled.p`
  color: rgb(10,37,37);
  text-decoration: none;
  font-size: 18px;
  margin-block-end: 1em;
  margin-block-start: 1em;
  text-align: left;
`;
