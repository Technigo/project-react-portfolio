import React from 'react';
import styled from 'styled-components/macro';
import { SectionSubHeading, InnerWrapper, OuterWrapperGrey, ProjectTags, TagWrapper, Span } from '../library/GlobalStyles';
import otherProjects from '../library/otherProjects.json';

export const OtherProjects = () => {
  return (
    <OuterWrapperGreyOther>
      <InnerWrapper>
        <SectionSubHeading>OTHER PROJECTS</SectionSubHeading>
        {otherProjects.map((project) => {
          return (
            <>
              <a
                key={project.id}
                href={project.url}>
                <InfoContainer>
                  <SubTitle>{project.title}</SubTitle>
                  <SubParagraph>
                    {project.description}<Span>{'>>'}</Span>
                  </SubParagraph>
                </InfoContainer>
              </a>
              <TagWrapper>
                {project.tags.map((tag) => (
                  <ProjectTags>
                    {tag}
                  </ProjectTags>
                ))}
              </TagWrapper>
            </>
          );
        })}
      </InnerWrapper>
    </OuterWrapperGreyOther>
  );
};

const OuterWrapperGreyOther = styled(OuterWrapperGrey)`
  padding-top: 0;
`;

const InfoContainer = styled.div`
  display: flex;
  text-align: left;

`;

const SubTitle = styled.h4`
  color: var(--color-eggplantPink);
  text-decoration: underline;
  margin-right: 1%;
  font-size: 16px;
  font-weight: bold;
  margin-block-end: 1em;
  margin-block-start: 1em;
`;

const SubParagraph = styled.p`
  text-decoration: underline;
  font-size: 16px;
  margin-block-end: 1em;
  margin-block-start: 1em;
`;
