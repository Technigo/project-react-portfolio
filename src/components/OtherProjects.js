import React from 'react'
import styled from 'styled-components';
import OtherProjectsInfo from 'data/OtherProjectsInfo';
import { OuterWrapper, InnerWrapper, SecondaryHeading, ProjectTags } from './GlobalStyles';

export const OtherProjects = ({ color }) => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <OtherProjectContainer>
          <SecondaryHeading>Other Projects</SecondaryHeading>

          {/* maps through json file */}
          {OtherProjectsInfo.map((project) => {
            return (
              <OtherProjectCard>
                <a
                  key={project.title}
                  href={`https://${project['netlify-name']}.netlify.app/`}
                  target="_blank"
                  rel="noreferrer">
                  <ProjectInfoHeader color={color}>
                    {project.title}
                  </ProjectInfoHeader>
                  <ProjectInfo>{project['project-description']} {'>>'}</ProjectInfo>
                </a>

                {/* maps through tag array, styled with global styling */}
                <ul style={{ padding: 0 }}>
                  {project.tags.map((tag) => (
                    <ProjectTags>
                      {tag}
                    </ProjectTags>
                  ))}
                </ul>
              </OtherProjectCard>
            );
          })}

        </OtherProjectContainer>
      </InnerWrapper>
    </OuterWrapper>
  );
};

/* sets the layout for other project parts */

const OtherProjectCard = styled.div`
  a {
    text-decoration: none;
    color: inherit;
    display: flex;
  }

  @media (max-width: 800px) {
    a {
      flex-direction: column;
    }
  }
  `;

const OtherProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 0 auto;
  `;

/* Styles the other project info */

const ProjectInfoHeader = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: ${(props) => props.color};
  font-size: 120%;
  margin-right: 1%;
  color: #ff7b00;
  

  ${OtherProjectCard}:hover & {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    font-size: 110%;
  }
`;

const ProjectInfo = styled.p`
  font-family: "Roboto", sans-serif;
  color: black;
  font-size: 120%;
 /*  flex-basis:70%; */

  ${OtherProjectCard}:hover & {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    font-size: 110%;
    margin: 0;
  }
`;

