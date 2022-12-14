import React from 'react'
import styled from 'styled-components';
import OtherProject from 'OtherProject.json';

const OtherProjects = ({ color, tagColor }) => {
  return (
    <OtherProjectOuterWrapper>
      <InnerWrapper>
        <OtherProjectsHeader color={color}>OTHER PROJECTS</OtherProjectsHeader>
        <OtherProjectsContainer>
          {OtherProject.map((project) => {
            return (
              <ProjectCard>
                <a href={project.netlify}>
                  <InfoContainer>
                    <SubTitle>{project.title}</SubTitle>
                    <SubParagraph>
                      {project.description}<SubParagraphArrows>{'>>>'}</SubParagraphArrows>
                    </SubParagraph>
                  </InfoContainer>
                </a>
                <SkillTagContainer>
                  {project.tags.map((tag) => (
                    <ProjectTags key={tag} tagColor={tagColor}>
                      {tag}
                    </ProjectTags>
                  ))}
                </SkillTagContainer>
              </ProjectCard>
            );
          })}
        </OtherProjectsContainer>
      </InnerWrapper>
    </OtherProjectOuterWrapper>
  );
};
export default OtherProjects;

export const OtherProjectOuterWrapper = styled.div`
  background-color: #FFF;
  width: 100%;
  margin: 0 auto 80px auto;
  padding-bottom: 80px;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1.4;
  border-right: 1px solid black;
  border-bottom: 1px solid black;

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 1.4;
  }
`;

const OtherProjectsHeader = styled.h2`
  font-size: 48px;
  line-height: 1;
  padding: 10px 15px;
  margin: 40px auto 60px auto;
  font-family: 'Montserrat', sans-serif;
  background-color: #262626;;
  color: white;
  display: inline-block;


  @media (max-width: 800px) {
    font-size: 22px;
    line-height: 1;
    padding: 10px 15px;
    margin-bottom: 40px;
  }
  @media (min-width: 1024px) {
     font-size: 40px;
  }
`;

export const OtherProjectsContainer = styled.div`

`;

export const ProjectCard = styled.div`
border-right: 1px solid black;
border-bottom: 1px solid black;
`;

export const InnerWrapper = styled.div`
width:80%;
display: flex;
flex-direction:column;
justify-content:center;
`;

export const InfoContainer = styled.div`
`;

export const SubTitle = styled.h4`
color:black;
text-decoration: underline;
`;

export const SkillTagContainer = styled.div`
padding-bottom: 20px;
`;

const ProjectTags = styled.li`
  padding: 0;
  font-family: "Roboto", sans-serif;
  color: black;
  padding: 5px 10px;
  background-color: ${(props) => props.tagColor};
  display: inline-block;
  font-size: 16px;
  margin-right: 5px;
  border: 1px solid black;

  @media (max-width: 800px) {
    padding: 2px;
    font-size: 14px;
    margin-right: 3px;
  }
`

export const SubParagraph = styled.p`
  color: black;
  font-size: 18px;
  margin-block-end: 1em;
  margin-block-start: 1em;
  text-decoration: underline;
`;

export const SubParagraphArrows = styled.p`
`;